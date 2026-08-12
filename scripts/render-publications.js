(function () {
  const pubs = Array.isArray(window.PUBLICATIONS) ? window.PUBLICATIONS : [];
  const yearNav = document.getElementById('year-nav');
  const list = document.getElementById('pub-list');
  const count = document.getElementById('publication-count');
  if (!yearNav || !list) return;

  const esc = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const boldMyName = (authors) => {
    const safe = esc(authors);
    return safe.replace(/Zhang, L\.\*?/g, (m) => `<strong>${m}</strong>`);
  };

  const safeUrl = (value) => {
    const url = String(value || '').trim();
    return /^(https?:\/\/)/i.test(url) ? url : '';
  };

  const years = [...new Set(pubs.map(p => p.year))];
  yearNav.innerHTML = years.map(y => `<a href="#y${esc(y)}">${esc(y)}</a>`).join('');

  let currentYear = null;
  const html = [];
  pubs.forEach((p) => {
    if (p.year !== currentYear) {
      currentYear = p.year;
      html.push(`<h2 class="pub-year" id="y${esc(currentYear)}">${esc(currentYear)}</h2>`);
    }
    const link = safeUrl(p.link);
    const title = esc(p.title);
    const titleHtml = link
      ? `<a href="${esc(link)}" target="_blank" rel="noopener">${title}</a>`
      : title;
    const badge = p.badge ? ` <span class="badge">${esc(p.badge)}</span>` : '';
    html.push(`
      <article class="pub-item" id="pub-${esc(p.number)}">
        <div class="pub-num">${esc(p.number)}.</div>
        <div class="pub-body">
          <div class="pub-title">${titleHtml}</div>
          <div class="pub-authors">${boldMyName(p.authors)}</div>
          <div class="pub-venue">${esc(p.venue)}${badge}</div>
        </div>
      </article>`);
  });
  list.innerHTML = html.join('');
  if (count) count.textContent = pubs.length;
})();
