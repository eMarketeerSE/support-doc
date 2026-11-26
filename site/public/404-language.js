const language = location.pathname.startsWith('/docs/docs_se') ? 'sv' : 'en'
document.documentElement.lang = language
document.documentElement.dataset.language = language
