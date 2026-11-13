const searchForm = document.querySelector(".archive-search");
const searchInput = document.querySelector("#archive-query");
const searchStatus = document.querySelector("#archive-search-status");
const searchResults = document.querySelector("#archive-search-results");
const archiveBrowse = document.querySelector("#archive-browse");

let indexRequest;
let searchVersion = 0;

function loadIndex() {
  indexRequest ??= fetch(searchForm.dataset.index)
    .then((response) => {
      if (!response.ok) throw new Error("Archive index unavailable");
      return response.json();
    })
    .then((posts) => {
      const decoder = document.createElement("textarea");
      return posts.map((post) => {
        decoder.innerHTML = post.text.replaceAll("<", "&lt;");
        const text = decoder.value;
        return { ...post, text, searchableText: text.toLowerCase(), searchableTitle: post.title.toLowerCase() };
      });
    })
    .catch((error) => {
      indexRequest = undefined;
      throw error;
    });

  return indexRequest;
}

function findMatches(posts, terms) {
  return posts
    .filter(({ searchableTitle, searchableText }) =>
      terms.every((term) => searchableTitle.includes(term) || searchableText.includes(term))
    )
    .map((post) => ({
      post,
      titleMatches: terms.filter((term) => post.searchableTitle.includes(term)).length,
    }))
    .sort((a, b) => b.titleMatches - a.titleMatches);
}

function excerpt(post, terms) {
  const positions = terms.map((term) => post.searchableText.indexOf(term));
  const firstMatch = Math.min(...positions.filter((position) => position >= 0));
  const start = Number.isFinite(firstMatch) ? Math.max(0, firstMatch - 50) : 0;
  const end = start + 180;
  return (start ? "…" : "") + post.text.slice(start, end).trim() + (end < post.text.length ? "…" : "");
}

function resultItem(post, terms) {
  const item = document.createElement("li");
  const link = document.createElement("a");
  const dateLine = document.createElement("p");
  const date = document.createElement("time");
  const summary = document.createElement("p");

  link.href = post.url;
  link.textContent = post.title;
  dateLine.className = "meta";
  date.dateTime = post.date;
  date.textContent = post.displayDate;
  dateLine.append(date);
  summary.textContent = excerpt(post, terms);
  item.append(link, dateLine, summary);
  return item;
}

async function updateSearch() {
  const version = ++searchVersion;
  const terms = searchInput.value.toLowerCase().trim().split(/\s+/).filter(Boolean);

  if (!terms.length) {
    searchStatus.textContent = "";
    searchResults.hidden = true;
    archiveBrowse.hidden = false;
    return;
  }

  if (!indexRequest) searchStatus.textContent = "Loading articles…";

  try {
    const posts = await loadIndex();
    if (version !== searchVersion) return;

    const matches = findMatches(posts, terms);
    searchResults.replaceChildren(...matches.map(({ post }) => resultItem(post, terms)));
    searchResults.hidden = matches.length === 0;
    archiveBrowse.hidden = true;
    searchStatus.textContent = matches.length
      ? `${matches.length} ${matches.length === 1 ? "article" : "articles"} found.`
      : "No articles found. Try different search terms.";
  } catch {
    if (version !== searchVersion) return;
    searchResults.hidden = true;
    archiveBrowse.hidden = false;
    searchStatus.textContent = "Search couldn’t load. Try again or browse all posts below.";
  }
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateSearch();
});
searchInput.addEventListener("input", updateSearch);
searchForm.hidden = false;
