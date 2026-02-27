<template>
  <!--#region banner-->
  <section class="flex flex-col justify-start align-end items-start text-left bg-hero-clients pt-16">
    <div
      class="bg-blue/50 md:min-w-[45%] 2xl:min-w-[28%]  py-[4.125rem] px-5 lg:px-[4.125rem] max-w-[90%] m-auto mb-[20px] lg:mb-auto lg:ml-[111px] lg:mr-auto min-h-[50vh]">
      <div class="m-auto">
        <h1 class="w-11/12 text-left text-white font-semibold  pp-mori pt-5 text-forty lg:text-forty-md">
          Espacios libres <br class="hidden sm:flow-root" /> de goteras
        </h1>
        <p
          class="text-left text-white text-twenty-five mt-5 lg:text-twenty-five leading-[25px]   italic font-semibold pp-mori">
          Impermeabilizamos tu azotea,<br class="hidden lg:flow-root" /> terraza, alberca o cisterna.
        </p>
        <p class="text-left text-white text-twenty-five lg:text-twenty-five my-3 leading-[25px]       pp-mori">
          Confía en nuestro servicio <br class="hidden sm:flow-root" /> profesional especializado.
        </p>
        <p
          class="text-left text-white mb-5  text-twenty-five lg:text-twenty-five-md leading-[25px] max-w-[70%]  lg:w-fit  italic      pp-mori">
          <br />
          <a href="/Contacto" class="button button--orange ml-0 mr-auto border-white ">
            Contáctanos
          </a>
        </p>
      </div>

    </div>
  </section>
  <!--#endregion banner-->
</template>

<script>
export default {
  name: "firstBannerClients",
  data() {
    return {};
  },
};
</script>
<style>

.bg-hero-clients {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("@/assets/img/ourClients/BANNER_PRINC_DESKTOP.jpg");
  height: clamp(600px, 100vh, 100vh);
}

@media (max-width: 768px) {
  .bg-hero-clients {
    background-image: url("@/assets/img/ourClients/BANNER_PRINC.jpg");
    background-position: right;
  }
}
</style>
