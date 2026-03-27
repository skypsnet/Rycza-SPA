<template>
  <div class="min-h-screen flex flex-wrap flex-col">
    <index-navbar-vue black />
    <router-view class="grow" />
    <footer-component></footer-component>
  </div>
</template>
<script>
import IndexNavbarVue from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/FooterLanding.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    IndexNavbarVue,
    FooterComponent,
  },
});
</script>
<style>
#app {
  background-color: #FFFFFF !important;
}
</style>
