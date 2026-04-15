<template>
  <section id="testimoniales" class=" bg-testimonials ">
    <div class="xl:container">
      <p class="text-center pp-mori text-thirty md:text-thirty-md font-extralight pt-14">
        ¡Agradecemos su confianza!
      </p>
      <p class="text-center pp-mori text-thirty md:text-thirty-md font-semibold italic">
        Nuestros clientes opinan
      </p>
      <Splide ref="splide" :options="sliderOptions" class="!py-0 md:!px-0 2xl:!px-4 ">
        <SplideSlide v-for="(review, index) in reviews" :key="index" class="!my-4 p-3 2xl:p-5 min-h-[60vh] lg:min-h-[70vh] 2xl:min-h-[60vh] text-white">
          <div class=" h-full rounded-[10px]" :class="review.classes">
            <div class="max-w-[90%] pt-5 pb-5 px-5 mx-auto flex flex-col  h-full">
              <p class="text-justify	  text-twenty md:text-twenty-md pt-5 my-auto" v-html="review.content">
              </p>
              <p class="text-right text-twenty md:text-twenty-md pt-5 py-10 ">
                {{ review.name }}
              </p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
      <div class="px-3 pb-12">
        <a href="#portafolio" class="button button--blue  	">
          Ver portafolio
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
export default {
  name: "ClientsOpinions",
  data() {
    return {
      sliderOptions: {
        drag: true,
        autoHeight: true,
        perPage: 1,
        updateOnMove: true,
        rewindByDrag: true,
        arrows: {
          path: 'svg',
        },
        classes: {
          page: "splide__pagination__page pagination__clients_opinions",
        },
        autoplay: true,
        autoplay: true,
        centered: true,
        mediaQuery: 'min',
        center: true,
        breakpoints: {
          640: {
            padding: "0",
          },
          768: {
            padding: "0",
            pagination: true,
          },
          1025: {
            perPage: 3,
            pagination: false,
            arrows: false,
            drag: false,
          },
        },
      },
      reviews: [
        {
          content: ` “Para un servicio de
            impermeabilización es  muy 
            importante contar  con una 
            empresa confiable  como lo es   Rycza,
            excelente trato y 
            cumplen  con los estándares de
            calidad esperados.”`,
          classes: "testimonio-1",
          name: `Ing. Luis Michel de la Mora`
        },
        {
          content: ` “Después de varias lluvias  y un 
            huracán no hemos tenido 
            ninguna filtración, la 
            impermeabilización estuvo 
            muy bien realizada. Muy buen 
            trabajo y seguimiento, 
            definitivamente los recomendamos.”`,
          classes: "testimonio-2",
          name: `Juan Pedro Villaseñor`
        },
        {
          content: `“Excelente servicio 
            profesional, un equipo muy 
            trabajador, estoy muy 
            satisfecho con el servicio de la 
            impermeabilización la azotea 
            de este edificio, estoy 
            contento de recomendarlos.”`,
          classes: "testimonio-3",
          name: `Arq. Israel Zavala`
        }
      ]
    };
  },
  components: { Splide, SplideSlide },
  created() {



     
  },
}
</script>
<style>
.box-shadow {
  box-shadow: 0px 3px 6px #00000029;
}

.testimonio-1 {
  background-image: url("@/assets/img/ourClients/testimonials/Testimonio1.webp");
  background-size: cover;
}

.testimonio-2 {
  background-image: url("@/assets/img/ourClients/testimonials/Testimonio2.webp");
  background-size: cover;
}

.testimonio-3 {
  background-image: url("@/assets/img/ourClients/testimonials/Testimonio3.webp");
  background-size: cover;
}

@media(min-width:1024px) {
  .bg-testimonials {
    background-image: url('@/assets/img/ourClients/testimonials/Textura1.svg');
    background-repeat: no-repeat;
    background-size: 120%;
    background-position: right 0%;
  }

}

.pagination__clients_opinions {
  /* Layout Properties */
  width: 42px;
  height: 4px;
  border: 1px solid #3673d9;
  background: #fff 0% 0% no-repeat padding-box;
  border-radius: 2px;
  opacity: 1;
}
</style>
