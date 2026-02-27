<template>
 <div>
    <index-navbar-vue  />
    <router-view  /> 
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