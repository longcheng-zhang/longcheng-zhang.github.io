(function () {
  const data = window.HOME_DATA || {};
  const kpisEl = document.getElementById('kpis');
  const newsEl = document.getElementById('news-list');

  const esc = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
  const safeUrl = (value) => {
    const url = String(value || '').trim();
    return /^(https?:\/\/)/i.test(url) ? url : '';
  };

  if (kpisEl && Array.isArray(data.kpis)) {
    kpisEl.innerHTML = data.kpis.map(k =>
      `<div class="kpi"><b>${esc(k.value)}</b><span>${esc(k.label)}</span></div>`
    ).join('');
  }

  if (newsEl && Array.isArray(data.news)) {
    newsEl.innerHTML = data.news.map(item => {
      const url = safeUrl(item.link);
      const text = url
        ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(item.text)}</a>`
        : esc(item.text);
      return `<li><span class="date">${esc(item.date)}</span><span>${text}</span></li>`;
    }).join('');
  }
})();
