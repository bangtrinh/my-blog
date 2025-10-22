// search.js — final stable version for GitHub Pages + local Hugo
// Detect base URL automatically and handle multi-language sites (en/vi)

function encodeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidUrl(url) {
  try {
    const parsedUrl = new URL(url, window.location.origin);
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch (e) {
    return false;
  }
}

let debounceTimeout;
function searchOnChange(evt) {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    performSearch(evt);
  }, 300); // debounce delay
}

async function performSearch(evt) {
  const input =
    evt && evt.target
      ? evt.target
      : document.querySelector("#search") || document.querySelector("#search-mobile");

  if (!input) {
    console.error("No search input found.");
    return;
  }

  const searchQuery = input.value.trim().toLowerCase();

  if (!searchQuery) {
    const sc = document.getElementById("search-content");
    if (sc) sc.style.display = "none";
    const sr = document.getElementById("search-results");
    if (sr) sr.innerHTML = "";
    return;
  }

  // position search result box near input
  try {
    const rect = input.getBoundingClientRect();
    const sc = document.getElementById("search-content");
    if (sc) {
      sc.style.position = "absolute";
      sc.style.top = window.scrollY + rect.bottom + 6 + "px";
      sc.style.left = rect.left + "px";
      sc.style.width = window.innerWidth > 768 ? "500px" : "300px";
    }
  } catch (e) {
    // ignore
  }

  try {
    // --- ✅ FIX: determine base and lang correctly ---
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const hasMyBlog = pathParts[0] === "my-blog";
    const base = hasMyBlog ? "/my-blog" : "";
    const langPrefix = hasMyBlog ? pathParts[1] : pathParts[0];
    const jsonPath = ["en", "vi"].includes(langPrefix)
      ? `${base}/${langPrefix}/index.json`
      : `${base}/index.json`;
    // -------------------------------------------------

    console.log("Fetching search data:", jsonPath);
    const response = await fetch(jsonPath);
    if (!response.ok) throw new Error("Failed to fetch " + jsonPath + ": " + response.status);

    const searchJson = await response.json();
    console.log("Fetched Data:", searchJson);

    const results = (Array.isArray(searchJson) ? searchJson : []).filter((item) => {
      if (!item || typeof item !== "object") return false;
      const title = (item.title || item.Title || "").toString().toLowerCase();
      const desc = (item.description || item.Description || "").toString().toLowerCase();
      const content = (item.content || item.Content || "").toString().toLowerCase();
      return (
        title.includes(searchQuery) || desc.includes(searchQuery) || content.includes(searchQuery)
      );
    });

    const searchResultsContainer = document.getElementById("search-results");
    if (!searchResultsContainer) {
      console.warn("No #search-results container found.");
      return;
    }
    searchResultsContainer.innerHTML = "";

    if (results.length > 0) {
      results.slice(0, 20).forEach((item) => {
        const href =
          item.permalink ||
          item.Permalink ||
          item.url ||
          item.Url ||
          item.link ||
          item.Link;
        if (!href) return;

        const card = document.createElement("div");
        card.className = "card mb-2";

        const link = document.createElement("a");
        link.href = href;
        link.className = "text-decoration-none text-reset";

        const contentDiv = document.createElement("div");
        contentDiv.className = "p-3";

        const titleEl = document.createElement("h5");
        titleEl.textContent = item.title || item.Title || "Untitled";

        const descEl = document.createElement("div");
        descEl.textContent = item.description || item.Description || "";

        contentDiv.appendChild(titleEl);
        if (descEl.textContent) contentDiv.appendChild(descEl);
        link.appendChild(contentDiv);
        card.appendChild(link);
        searchResultsContainer.appendChild(card);
      });
    } else {
      const noResultsMessage = document.createElement("p");
      noResultsMessage.className = "text-center py-3";
      noResultsMessage.textContent = `No results found for "${searchQuery}"`;
      searchResultsContainer.appendChild(noResultsMessage);
    }

    const sc = document.getElementById("search-content");
    if (sc) sc.style.display = "block";
  } catch (error) {
    console.error("Error fetching or processing search index:", error);
  }
}

// Handle Enter, Escape, and click-outside events
window.addEventListener("load", () => {
  const inputs = Array.from(document.querySelectorAll("#search, #search-mobile"));
  console.log("Search inputs found:", inputs.length);

  inputs.forEach((input) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        performSearch({ target: input });
      } else if (e.key === "Escape") {
        const sc = document.getElementById("search-content");
        if (sc) sc.style.display = "none";
        const sr = document.getElementById("search-results");
        if (sr) sr.innerHTML = "";
      }
    });
  });

  document.addEventListener("click", (e) => {
    const sc = document.getElementById("search-content");
    if (!sc) return;
    if (
      !sc.contains(e.target) &&
      !inputs.some((i) => i.contains(e.target))
    ) {
      sc.style.display = "none";
    }
  });
});
