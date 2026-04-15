<template>
  <section id="portafolio">
    <p class="text-center pp-mori text-thirty md:text-thirty-md font-semibold">
      Conoce nuestro <br class=" lg:hidden " /> portafolio
    </p>
    <div class="lg:mb-5 p-5">
      <div class="p-3 card container box-shadow lg:flex lg:items-stretch lg:justify-around">
        <div class="mt-4  lg:mt-0 lg:w-[54.723608%] relative">
          <LazyVimeoVideo 
            src="https://player.vimeo.com/video/738823800?h=c235ff11e3"
            title="ISUZU | RYCZA IMPERMEABILIZACIONES"
            customClass="padding-iframe"
          />
        </div>
        <div class="my-3 lg:w-[35%] ">
          <img src="@/assets/img/ourClients/portfolio/ISUZU2.webp" class="rounded w-full" alt="testimonio 3">
          <p class="text-twenty pp-mori font-semibold mt-4">
            ISUZU CANCÚN
          </p>
          <p class="text-twenty my-4">
            Sistema impermeabilizante prefabricado 3.5 mm F.V.
          </p>
          <p class="text-twenty">
            Puerto Morelos
          </p>
        </div>
      </div>
    </div>
    <div class="lg:my-5 p-5">
      <div class="p-3 card container box-shadow  lg:flex lg:items-stretch lg:justify-around">
        <div class="mt-4  lg:mt-0 lg:w-[54.723608%] relative lg:order-2">
          <LazyVimeoVideo 
            src="https://player.vimeo.com/video/738823929?h=ec059f374f"
            title="ISUZU | RYCZA IMPERMEABILIZACIONES"
            customClass="padding-iframe"
          />
        </div>
        <div class="my-3 lg:order-1  lg:w-[35%] ">
          <img src="@/assets/img/ourClients/portfolio/TERRAMAGNA.webp" class="rounded" alt="testimonio 3">
          <p class="text-twenty pp-mori font-semibold mt-4">
            TERRAMAGNA
          </p>
          <p class="text-twenty my-4">
            Sistema impermeabilizante prefabricado 3.5 mm F.V.
          </p>
          <p class="text-twenty">
            Puerto Morelos
          </p>
        </div>
      </div>
    </div>
    <div class="lg:my-5 p-5">
      <div class="p-3 card container box-shadow  lg:flex lg:items-stretch lg:justify-around">
        <div class="mt-4 lg:mt-0 lg:w-[54.723608%] relative">
          <LazyVimeoVideo 
            src="https://player.vimeo.com/video/738824072?h=506209641b"
            title="ISUZU | RYCZA IMPERMEABILIZACIONES"
            customClass="padding-iframe"
          />
        </div>
        <div class="my-3  lg:w-[35%]">
          <img src="@/assets/img/ourClients/portfolio/PARTICULAR.webp" class="rounded" alt="testimonio 3">
          <p class="text-twenty pp-mori font-semibold mt-4">
            PARTICULAR
          </p>
          <p class="text-twenty my-4">
            Sistema de reforzado cementoso y acrílico.
          </p>
          <p class="text-twenty">
            Cancún, Q.Roo
          </p>
        </div>
      </div>
    </div>
    <div class="lg:my-5 p-5">
      <div class="p-3 card container box-shadow  lg:flex lg:items-stretch lg:justify-around">
        <div class="mt-4  lg:mt-0  lg:w-[54.723608%] relative lg:order-2">
          <LazyVimeoVideo 
            src="https://player.vimeo.com/video/740619991?h=7529e9e13f"
            title="ISUZU | RYCZA IMPERMEABILIZACIONES"
            customClass="padding-iframe"
          />
        </div>
        <div class="my-3  lg:w-[35%] lg:order-1 ">
          <img src="@/assets/img/ourClients/portfolio/SEDENA.webp" class="rounded" alt="testimonio 3">
          <p class="text-twenty pp-mori font-semibold mt-4">
            SEDENA
          </p>
          <p class="text-twenty my-4">
            Impermeabilizante prefabricado 4.0 mm FP
          </p>
          <p class="text-twenty">
            Isla Mujeres, Q.Roo
          </p>
        </div>
      </div>
    </div>
    <div class="lg:my-5 p-5">
      <div class="p-3 card container box-shadow  lg:flex lg:items-stretch lg:justify-around">
        <div class="mt-4 lg:mt-0 lg:w-[54.723608%] relative">
          <LazyVimeoVideo 
            src="https://player.vimeo.com/video/740620564?h=6b88d0192c"
            title="ISUZU | RYCZA IMPERMEABILIZACIONES"
            customClass="padding-iframe"
          />
        </div>
        <div class="my-3  lg:w-[35%]">
          <img src="@/assets/img/ourClients/portfolio/POLIDEPORTIVO.webp" class="rounded" alt="testimonio 3">
          <p class="text-twenty pp-mori font-semibold mt-4">
            POLIDEPORTIVO TULUM
          </p>
          <p class="text-twenty my-4">
            Sistema de impermeabilización color blanco calidad 3 años
          </p>
          <p class="text-twenty">
            Tulum, Q.Roo
          </p>
        </div>
      </div>
    </div>
    <div class="px-3 lg:mb-24 mb-12">
      <router-link :to="{ path: '/nuestros-clientes', hash: '#galeria' }" class="button button--blue ">
        Ver más proyectos
      </router-link>
    </div>
  </section>

</template>

<script>
import LazyVimeoVideo from "@/components/Common/LazyVimeoVideo.vue";

export default {
  name: "KnowOurPortfolio",
  components: {
    LazyVimeoVideo
  },
  data() {
    return {};
  },
};
</script>
<style>
.padding-iframe {
  padding: 30.25% 0 0 0;
}

@media(max-width: 1024px) {
  .padding-iframe {
    padding: 56.25% 0 0 0;
  }
}
</style>
