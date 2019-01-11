<template>
  <button 
    class="bio-button _pd-0px _r-4px _bgcl-tpr _bdcl-tpr hamburger-container _w-32px _h-32px"
    @click="click">
    <div 
      :class="{'-open': $store.state.isMobileMenuActive}" 
      class="hamburger-btn -black" />
  </button>
</template>

<script>
export default {
  methods: {
    click () {
      this.$scrollTo('#top', 500)
      return this.$store.commit('SET_MOBILE_MENU_ACTIVE', !this.$store.state.isMobileMenuActive)
    }
  }
}
</script>


<style lang="scss" scoped>
.hamburger-container {
  z-index: 9;
  position: relative;
  top: 0px;
  .hamburger-btn {
    /* If menu is open */
    &.-open {
      background: #fff !important;
      &::before {
        width: 33px;
        top: 0px;
        transform: rotate(-45deg);
        transition: 0.2s;
        background: white;
        content: ' ';
        &:hover {
          width: 33px;
        }
      }
      &::after {
        width: 33px;
        top: 0px;
        transform: rotate(45deg);
        transition: 0.2s;
        background: white;
        content: ' ';
        &:hover {
          width: 33px;
        }
      }
    }
    /*  */
    &.-black {
      background: #000;
      &::before,
      &::after {
        background: #000;
      }
    }
    width: 33px;
    height: 3px;
    background: #fff;
    border-radius: 8px;
    position: absolute;
    transition: 0.2s;
    :not(.-open) {
      &:hover {
        width: 28px;
        &::before {
          width: 33px;
        }
        &::after {
          width: 30px;
        }
      }
    }

    &::before {
      width: 28px;
      position: absolute;
      height: 3px;
      background: #fff;
      border-radius: 8px;
      content: ' ';
      top: -11px;
      right: 0px;
      transition: 0.2s;
    }

    &::after {
      position: absolute;
      width: 28px;
      height: 3px;
      background: #fff;
      border-radius: 8px;
      content: ' ';
      top: 11px;
      right: 0px;
      transition: 0.2s;
    }
  }
}
</style>
