const hiddenLanguage = location.pathname.startsWith('/docs/docs_se') ? 'en' : 'sv'
document.write(`<style>[data-language="${hiddenLanguage}"]{display:none}</style>`)
