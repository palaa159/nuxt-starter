<template>
  <footer>
    <div class="container">
      <div class="row">
        <!-- Branding, when in mobile stay at bottom -->
        <div class="col-12 col-md-2 _dp-f order-md-first order-last _mgt-32px _mgt-0px-md">
          <div>
            <small>
              All Rights Reserved {{ new Date().getFullYear() }}
              <br>
              x
            </small>
          </div>
        </div>
        <!-- FooterMenu -->
        <nav class="col-12 col-md-10 _dp-f-md _jtfct-spbtw-md">
          <!-- col 1 -->
          <div 
            v-for="(item, i) in $store.state.footerMenu.filter(f => f.title !== 'home')" 
            :key="i"
            class="_f-2">
            <h5 
              class="_ttf-upc _cl-white"
              v-html="item.title"/>
            <ul v-if="item.submenu">
              <li 
                v-for="(list, j) in item.submenu" 
                :key="j" 
                class="_pdbt-4px">
                <nuxt-link 
                  :to="localePath(list.path)"
                  class="_cl-white hover-spacing white _ttf-cptl"
                  v-html="list.title"/>
              </li>
            </ul>
          </div>
          <!-- Contact -->
          <div class="_f-2">
            <h5 class="_ttf-upc _cl-white">Contact Us</h5>
          </div>
          <!-- Social -->
          <div class="_f-1">
            <div class="_dp-f _alit-ct _jtfct-fe">
              <a 
                href="https://www.facebook.com/test/" 
                target="_blank" 
                class="_cl-white">
                <i class="fab fa-facebook fa-2x _mgr-8px"/>
              </a>
              <a 
                href="https://www.instagram.com/test/" 
                target="_blank" 
                class="_cl-white">
                <i class="fab fa-instagram fa-2x _mgr-4px"/>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '~assets/styles/variables';
footer {
  position: relative;
  background: #000;
  padding: 32px 0px 32px 0px;
  margin-top: 20px;
  color: #fff;
  @media (max-width: $md - 1px) {
    padding: 32px 0px;
  }
  &::before {
    content: '';
    width: 100%;
    height: 24px;
    /* background: $yellow-400; */
    position: absolute;
    top: 0px;
    left: 0px;
  }
}
nav {
  h5 {
    /* text-transform: capitalize; */
    @media (max-width: $md - 1px) {
      margin: 16px 0px;
    }
    @media (min-width: $md) {
      margin-bottom: 16px;
    }
  }
}
.contact-container {
  line-height: 150%;
  font-size: 0.9rem;
}
</style>
