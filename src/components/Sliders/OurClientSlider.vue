<template>
  <section id="galeria">
    <p class="mx-auto pp-mori text-thirty lg:text-thirty-md font-semibold  text-center pt-10">Más de nuestras
      impermeabilizaciones</p>
    <Splide :options="sliderOptions" class=" lg:hidden">
      <SplideSlide v-for="(slide, index) in Slides" :key="index"
        class="relative min-h-[29.75rem] flex items-end rounded-[14px] ">
        <img @click='openModal(index)' :src="slide.image" class="rounded-[14px]  absolute h-full w-full object-cover"
          alt="">
        <div class="relative bg-black/30 w-full rounded-[14px] -t text-white py-3 px-3" v-html="slide.content">

        </div>
      </SplideSlide>
    </Splide>
    <div class="hidden  lg:grid grid-cols-2 container gap-2 gap-y-5 my-10 lg:px-16 2xl:px-[15rem] ">
      <div v-for="(slide, index) in Slides" :key="index"
        class="relative flex items-end rounded-[14px]  aspect-gallery overflow-hidden mb-3">
        <img @click="openModal(index)" :src="slide.image" class="rounded-[14px]  absolute h-full w-full object-cover"
          alt="">
        <div class="relative bg-black/30 w-full rounded-[14px] -t text-white py-3 px-3" v-html="slide.content">
        </div>
      </div>

    </div>
    <Modal class="overflow-y-auto" v-show="showModal" @close-modal="showModal = false">
      <div style="aspect-ratio: 16 / 9;" class="lg:mb-auto">
        <img :src="selectedSlide.image" class="rounded-[14px]   h-full w-full object-cover" alt="">
        <div class=" bg-black/30 w-full rounded-[14px] mt-2 text-white py-3 px-2" v-html="selectedSlide.content">

        </div>
      </div>
    </Modal>
  </section>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import Modal from "@/components/Modals/modal.vue";
import proyecto1 from "@/assets/img/ourClients/portfolio/PROYECTO1.webp";
import proyecto2 from "@/assets/img/ourClients/portfolio/PROYECTO2.webp";
import proyecto3 from "@/assets/img/ourClients/portfolio/PROYECTO3.webp";
import proyecto4 from "@/assets/img/ourClients/portfolio/PROYECTO4.webp";
import proyecto5 from "@/assets/img/ourClients/portfolio/PROYECTO5.webp";
import proyecto6 from "@/assets/img/ourClients/portfolio/PROYECTO6.webp";
import proyecto7 from "@/assets/img/ourClients/portfolio/PROYECTO7.webp";
import proyecto8 from "@/assets/img/ourClients/portfolio/PROYECTO8.webp";

export default {
  name: "OurClientSlider",
  data() {
    return {
      sliderOptions: {
        classes: {
          page: "splide__pagination__page pagination__clients",
        },
      },
      showModal: false,
      selectedSlide: "",
      Slides: [
        {
          image: proyecto1,
          content: `  <p class="text-fifteen pp-mori font-bold">
            DECO CONSTRUCCIONES
            <hr class="w-1/2 my-4 lg:w-3/12" />
          </p>
          <p class="font-light text-fifteen">Sistema impermeabilizante cementoso marca RETEX <br />
            Solidaridad, Quintana Roo
          </p>`,

        },
        {
          image: proyecto3,
          content: ` <p class="text-fifteen pp-mori font-bold">
            GRUPO CONSTRUCTOR TRANSPORTIEREN
            <hr class="w-1/2 my-4 lg:w-3/12" />
          </p>

          <p class="font-light text-fifteen">
            Sistema impermeabilizante prefabricado en losa inclinada. <br />
            Solidaridad, Q.Roo
          </p>`,
        },
        {
          image: proyecto7,
          content: ` <p class="text-fifteen pp-mori font-bold">
            PARTICULAR
            <hr class="w-1/2 my-4 lg:w-3/12" />
          </p>
          <p class="font-light text-fifteen">Sistema impermeabilizante acrílico <br /> Cancún, Q.Roo
          </p>`,
        },
        {
          image: proyecto2,
          content: `  <p class="text-fifteen pp-mori font-bold">
            LEYCAR EDIFICACIONES
            <hr class="w-1/2 my-4 lg:w-3/12" />
          </p>
          <p class="font-light text-fifteen">Impermeabilizante prefabricado 4.0 <br /> Cancùn, Q.Roo
          </p>`,
        },
        {
          image: proyecto8,
          content: ` <p class="text-fifteen pp-mori font-bold">
            SEVEN ELEVEN ZONA HOTELERA 
            <hr class="w-1/2 my-4 lg:w-3/12" />
          </p>
          <p class="font-light text-fifteen">Impermeabilizante prefabricado <br /> Cancún, Q.Roo
          </p>`,
        },
        {
          image: proyecto4,
          content: ` <p class="text-fifteen pp-mori font-bold">
            PARTICULAR
            <hr class="w-1/2 my-4 lg:w-3/12" />
          </p>
          <p class="font-light text-fifteen">Sistema impermeabilizante prefabricado <br /> CDMX
          </p>`,
        },
        {
          image: proyecto6,
          content: ` <p class="text-fifteen pp-mori font-bold">
            PARTICULAR
            <hr class="w-1/2 my-4 lg:w-3/12" />
          </p>

          <p class="font-light text-fifteen"> Sistema impermeabilizante acrílico <br /> Cancún, Q.Roo
          </p>`,
        },
        {
          image: proyecto5,
          content: ` <p class="text-fifteen pp-mori font-bold">
            PARTICULAR
            <hr class="w-1/2 my-4 lg:w-3/12" />
          </p>
          <p class="font-light text-fifteen">Sistema de impermeabilizante acrílico <br /> Cancún, Q.Roo
          </p>`,
        },

      ]
    };
  },
  methods: {
    openModal(slide) {
      this.selectedSlide = this.Slides[slide];
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  components: { Splide, SplideSlide, Modal }
}
</script>
<style>
.pagination__clients {
  /* Layout Properties */
  width: 42px;
  height: 4px;
  border: 1px solid #3673d9;
  background: #fff 0% 0% no-repeat padding-box;
  border-radius: 2px;
  opacity: 1;
}

.-t {
  backdrop-filter: blur(25px);
}

.aspect-gallery {
  aspect-ratio: 16 / 11;
}
</style>
