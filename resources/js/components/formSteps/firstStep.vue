<template>
  <div class="identifier-container py-5  relative container flex flex-wrap md:justify-center items-center ">
    <div class="h-full  min-w-[60%] lg:min-w-[45%] 2xl:min-w-[40%] ">
      <div class="2xl:w-[91%]">
        <p
          class="text-black pp-mori text-forty md:mt-5 lg:mt-0  md:!leading-[3.8rem] 2xl:text-forty-md font-semibold min-w-[80%] ">
          Estás a un paso de <br class="hidden lg:flow-root">
          <span class="text-orange">impermeabilizar</span> tu <br class="hidden lg:flow-root"><span class="lg:italic">
            propiedad
          </span>
        </p>
        <br class="md:hidden 2xl:flow-root" />
        <p class="text-black italic pp-mori text-thirty md:mt-3 lg:mt-0  md:!leading-[3.8rem] md:text-text-thirty-md  ">
          ¡Despídete de las <span class="text-orange">goteras!</span>
        </p>

        <button class="mr-auto button-form   my-5 ml-0   md:py-3 px-6  border-2 font-medium button--orange"
          @click="nextStep"><span>INICIAR</span> <span class="material-symbols-sharp">
            arrow_forward_ios
          </span> </button>
      </div>
    </div>
    <div class="w-full lg:w-[50%]  2xl:w-[40%]">
      <div style="padding:56.25% 0 0 0;position:relative;"><iframe
          src="https://player.vimeo.com/video/750969208?h=fd185fe4b6&amp;controls=1&amp;autoplay=1&amp;loop=1&amp;autopause=0&amp;muted=1&amp;player_id=0&amp;app_id=58479"
          frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          title="Sistema prefabricado en Arbolada | RYCZA IMPERMEABILIZACIONES"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "firstStep",
  data() {
    return {

    };
  },
  //emmit 
  methods: {
    nextStep() {
      this.$emit('nextStep')
    }
  }
};
</script>
