<template lang="html">
  <div class="main-page-wrapper">
      <!-- <bigButton ref="bigButton"/> -->
    <nav>
      <navbar class="navbar"/>
    </nav>
    <header>
      <headerPage/>
    </header>
    <main>
      <cardComponent/>
      <howWeClean class="img"/>
    </main>
  </div>
</template>

<script>
import navbar from '@/components/navbar-component.vue'
import headerPage from '@/components/header-page.vue'
import cardComponent from '@/components/card-component.vue'
import howWeClean from '@/components/how-we-clean.vue'
// import bigButton from '@/components/make-order-big-button.vue'
export default {
  components: {
    navbar,
    headerPage,
    cardComponent,
    howWeClean,
    // bigButton
  },
  mounted() {
    this.scrollAnimationToHeader();
  },
  methods: {
    scrollAnimationToHeader() {
      this.gsap.timeline({
        scrollTrigger: {
          trigger: ".img",
          start: "top top",
          end: "top top",
          scrub: true,
        }
      })
      .to(".navbar", {opacity: 0 })
    }
  }
}

</script>

<style lang="scss" scoped>
nav {
  padding: 0;
}
</style>
