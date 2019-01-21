<template>
  <div/>
</template>

<script>
import Cookies from 'universal-cookie'
export default {
  layout: 'unsupported',
  mounted () {
    if (process.browser) {
      new Cookies().remove('__session')
      return window.location.href = '/'
    }
  }
}
</script>
