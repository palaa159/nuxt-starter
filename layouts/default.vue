<template>
  <div 
    id="top">
    <!-- <Header/> -->
    <!-- Content -->
    <main 
      :class="{'menu-sticky-active': $store.state.menuSticky}" 
      class="min-height-100vh _dp-f _alit-ct _ovfx-hd">
      <nuxt/>
    </main>
    <!-- <Footer/> -->
  </div>
</template>

<script>
  import Header from '~/components/layout/Header'
  import Footer from '~/components/layout/Footer'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>