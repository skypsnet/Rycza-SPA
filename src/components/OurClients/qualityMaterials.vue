<template>
  <section class="quality-materials-bg flex flex-col items-center p-4">
    <div class="container my-auto">
      <p
        class="text-black text-center mt-5 mb-14 pp-mori text-thirty md:text-thirty-md lg:max-w-[81%] 2xl:max-w-[71%] mx-auto ">
        Aplicamos
        <span class="italic font-semibold">materiales <br class=" lg:hidden " /> de calidad <br
            class="hidden lg:flow-root" /></span> para <br class=" lg:hidden " />
        <span class="italic font-semibold">impermeabilizar</span>
        tus <br class=" lg:hidden " /> espacios y <br class="hidden lg:flow-root" /> lograr los <br
          class=" lg:hidden " />
        <span class="italic font-semibold"> mejores acabados</span>
      </p>
          <img src="@/assets/img/BannerHome/bannermat.webp" alt="quality-materials"
        class="w-full mx-auto md:max-w-[71%] mb-5">
    </div>
  </section>
</template>
<script>
export default {
  name: "qualityMaterials",
  data() {
    return {};
  },
};
</script>

<style>

.quality-materials-bg {
  background-image: url("@/assets/img/ourClients/formula/FONDOMATERIALESESCRITORIO.webp");
  min-height: clamp(600px, 81vh, 100vh);

}

.quality-materials-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
