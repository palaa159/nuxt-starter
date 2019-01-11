import qs from 'qs'

const api = {
  cpt: `/wp-json/api/v1/cpt`
}

export const actions = {
  async listCPT ({}, {
    cpt,
    slug,
    per_page
  }) {
    const res = await this.$axios.$get(`${api.cpt}/${cpt}?${qs.stringify({ slug, per_page })}`)
    return res
  }
}
