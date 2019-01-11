export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect
}) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  store.commit('SET_MOBILE_MENU_ACTIVE', false)
  // Force lang prefix at API endpoints
  if (app.i18n.locale === 'en' && app.$axios.defaults.baseURL.indexOf('en') === -1) {
    app.$axios.defaults.baseURL += `${app.i18n.locale}/`
  }

  // Terminate search modal
  store.commit('SET_SEARCH_MODAL_ACTIVE', false)
}
