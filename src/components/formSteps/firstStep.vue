<template>
  <div class="identifier-container relative container flex flex-wrap md:justify-center items-center"
    :class="isChatMode ? 'p-2 py-3' : 'py-5'">
    <div :class="isChatMode ? 'w-full' : 'h-full min-w-[60%] lg:min-w-[45%] 2xl:min-w-[40%]'">
      <div :class="{ '2xl:w-[91%]': !isChatMode }">
        <p class="text-black pp-mori font-semibold leading-tight"
          :class="isChatMode ? 'text-lg mb-2' : 'text-forty md:mt-5 lg:mt-0 md:!leading-[3.8rem] 2xl:text-forty-md min-w-[80%]'">
          Estás a un paso de 
          <span v-if="!isChatMode"><br class="hidden lg:flow-root"></span>
          <span class="text-orange">impermeabilizar</span> tu 
          <span v-if="!isChatMode"><br class="hidden lg:flow-root"></span>
          <span :class="{ 'lg:italic': !isChatMode }">propiedad</span>
        </p>
        <br v-if="!isChatMode" class="md:hidden 2xl:flow-root" />
        <p class="text-black italic pp-mori leading-tight"
          :class="isChatMode ? 'text-sm mb-4' : 'text-thirty md:mt-3 lg:mt-0 md:!leading-[3.8rem] md:text-text-thirty-md'">
          ¡Despídete de las <span class="text-orange">goteras!</span>
        </p>

        <button 
          class="button-form border-2 font-bold transition-all active:scale-95"
          :class="[
            isChatMode ? 'w-full py-3 text-sm px-4 bg-orange text-white border-orange shadow-md' : 'mr-auto my-5 ml-0 md:py-3 px-6 button--orange',
          ]"
          @click="nextStep"
        >
          <span>INICIAR</span> 
          <span class="material-symbols-sharp ml-2">arrow_forward_ios</span>
        </button>
      </div>
    </div>
    
    <!-- Video - Hidden in Chat Mode -->
    <div v-if="!isChatMode" class="w-full lg:w-[50%] 2xl:w-[40%] mt-8 lg:mt-0">
      <video 
        class="w-full shadow-large"
        :src="videoSrc"
        autoplay
        loop
        muted
        playsinline
        controls
      ></video>
    </div>
  </div>
</template>

<script>
import videoSrc from "@/assets/video/ryczavideo.mp4";

export default {
  name: "firstStep",
  data() {
    return {
      videoSrc
    };
  },
  props: {
    isChatMode: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    nextStep() {
      this.$emit('nextStep')
    }
  }
};
</script>
