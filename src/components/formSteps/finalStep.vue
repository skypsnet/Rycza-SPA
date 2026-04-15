<template>
  <div class="identifier-container mt-auto" :class="isChatMode ? 'p-2' : '!p-[1.73rem] md:!p-[2.5rem]'">
    <div class="flex flex-col justify-between text-center text-black items-center">
      <p class="p-0 pp-mori font-semibold text-black"
        :class="isChatMode ? 'text-lg' : 'text-thirty md:text-thirty-md'">
        Gracias por comunicarte con nosotros
      </p>
      
      <p class="font-medium text-black"
        :class="isChatMode ? 'text-xs my-3' : 'text-twenty my-5'">
        <template v-if="isChatMode">
          ¡Todo listo! Haz clic abajo para enviarnos tus datos por WhatsApp y recibir tu presupuesto.
        </template>
        <template v-else>
          Nuestro departamento de atención al cliente te contactará cuanto antes <br class="hidden lg:flow-root"> o si lo prefieres también puedes escribirnos por medio de nuestro WhatsApp.
        </template>
      </p>

      <a :href="whatsappUrl" target="_blank"
        class="button-form font-bold flex items-center justify-center gap-3 rounded-xl text-white transition-all hover:scale-105 active:scale-95 shadow-lg w-full"
        :class="isChatMode ? 'text-base py-3 px-4' : 'text-twenty px-8 py-4'"
        style="background-color: #25D366;">
        <img src="@/assets/svg/ICONO_WHATSAPP.svg" alt="whatsIcon" :class="isChatMode ? 'w-5 h-5' : 'w-6 h-6'" />
        Enviar por WhatsApp
      </a>

      <!-- Video - Hidden in Chat Mode -->
      <div v-if="!isChatMode" width="100%" height="auto" class="w-[80%] mt-8 lg:max-h-none"
        style="position:relative;">
        <LazyVimeoVideo 
          src="https://player.vimeo.com/video/740620673?h=83bac729cd"
          title="RYCZA FORMULARIO FINAL"
          aspectRatio="56.25%"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LazyVimeoVideo from "@/components/Common/LazyVimeoVideo.vue";

export default {
  name: "finalStep",
  components: {
    LazyVimeoVideo
  },
  props: {
    whatsappUrl: {
      type: String,
      default: "https://api.whatsapp.com/send?phone=5219983717937"
    },
    isChatMode: {
      type: Boolean,
      default: false
    }
  }
};
</script>
