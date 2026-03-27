<template>
  <div class="identifier-container !p-[1.73rem] md:!p-[2.5rem]  mt-auto">
    <div class="flex flex-col justify-between text-center  text-black  items-center">
      <p class=" p-0 pp-mori font-semibold text-thirty md:text-thirty-md text-black ">
        Gracias por comunicarte con nosotros</p>
      <p class="font-medium text-twenty my-5 text-black">
        Nuestro departamento de atención al cliente te contactará cuanto antes <br class="hidden lg:flow-root"> o si lo
        prefieres
        también
        puedes escribirnos por medio de nuestro WhatsApp.
      </p>
      <a href="https://api.whatsapp.com/send?phone=5219983717937" target="_blank"
        class="button-form font-medium text-twenty  border text-white border-green bg-green ">
        <img src="@/assets/svg/ICONO_WHATSAPP.svg" alt="whatsIcon" />
        Enviar mensaje
      </a>
      <div width="100%" height="auto" class="w-[80%] pb-5 md:max-h-[50vh] lg:max-h-none"
        style="padding:56.25% 0 0 0;position:relative;"><iframe
          src="https://player.vimeo.com/video/740620673?h=83bac729cd&amp;controls=1&amp;autoplay=1&amp;loop=1&amp;autopause=0&amp;muted=1&amp;player_id=0&amp;app_id=58479"
          frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
          style="position:absolute;top:0;left:0;width:100%;height:100%;" title="FORM2"></iframe></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "finalStep",
  data() {
    return {};
  },
  
};
</script>
