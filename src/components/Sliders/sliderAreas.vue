<template>
    <section class=" bg-slider-area">
        <div class="py-10">
            <div class="container text-center flex flex-col justify-center items-center">
                <p class="text-thirty md:text-thirty-md  font-semibold pp-mori lg:mt-[21px]">
                    Tenemos la solución <br class="md:hidden" /> para todo tipo de áreas
                </p>
                <p
                    class="text-blue text-twenty-five md:text-twenty-five-md mb-4 lg:mb-8 mt-[21px]  pp-mori font-semibold ">
                    Selecciona una opción <br class="md:hidden" />
                    para ver más
                </p>
                <div class="hidden md:grid grid-cols-2 md:grid-cols-5 gap-3 justify-center md:justify-evenly container">
                    <a href="#SliderText" v-for="(item, index) in availableSlideres" @click="changeSlides(index)"
                        :class="
                        index === activeButton
                            ? 'bg-blue text-white'
                            : 'bg-white text-black '
                    " class="p-2 block rounded-sm border text-center border-blue-dark uppercase text-twenty">
                        {{ item.text }}
                    </a>
                </div>
                <div id="#SliderText" class="hidden md:flow-root mt-5">
                    <p class="text-center text-twenty">
                        <span class="text-blue font-semibold">
                            {{ activeSlider.text }}:
                        </span>
                        {{ activeSlider.leyend }}
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-1 px-5 md:hidden gap-3 justify-center md:justify-evenly container">
                <a href="#SliderAreas" v-for="(item, index) in availableSlideres" @click="changeSlides(index)" :class="
                    index === activeButton
                        ? 'bg-blue text-white'
                        : 'bg-white text-black '
                "
                    class="p-2 block font-light rounded-sm border text-center border-blue-dark uppercase text-twenty md:w-auto">
                    {{ item.text }}
                </a>
            </div>
            <div style="position: relative">
                <Splide class="splide--dynamic lg:!py-0" id="SliderAreas" :options="sliderOptions"
                    aria-label="My Favorite Images" :has-track="false">
                    <SplideTrack>
                        <SplideSlide v-for="(slide, index) in activeSlider.images" :key="index" class="md:p-3">
                            <div class="w-full h-full relative">
                                <img class="m-auto w-full h-full " :src="slide.img" />
                            </div>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </div>
            <div class="container px-5 md:hidden flow-root mb-5 lg:my-5">
                <p class="text-center text-twenty">
                    <span class="text-blue-light">
                        {{ activeSlider.text }}:
                    </span>
                    {{ activeSlider.leyend }}
                </p>
            </div>
            <router-link :to="{ path: '/nuestros-clientes', hash: '#portafolio' }"
                class="mx-auto w-[60%]  md:flow-root button button--blue-light container ">
                Ver proyectos
            </router-link>
        </div>
    </section>
</template>

<script>
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import azotea1 from "@/assets/img/AreaSlider/AZOTEA1.webp";
import azotea2 from "@/assets/img/AreaSlider/AZOTEA2.webp";
import azotea3 from "@/assets/img/AreaSlider/AZOTEA3.webp";
import azotea4 from "@/assets/img/AreaSlider/AZOTEA4.webp";
import azotea6 from "@/assets/img/AreaSlider/AZOTEA6.webp";
import azotea8 from "@/assets/img/AreaSlider/AZOTEA8.webp";
import azotea9 from "@/assets/img/AreaSlider/AZOTEA9.webp";
import azotea10 from "@/assets/img/AreaSlider/AZOTEA10.webp";
import azotea11 from "@/assets/img/AreaSlider/AZOTEA11.webp";
import azotea13 from "@/assets/img/AreaSlider/AZOTEA13.webp";
import terraza1 from "@/assets/img/AreaSlider/TERRAZA1.webp";
import terraza2 from "@/assets/img/AreaSlider/TERRAZA2.webp";
import terraza3 from "@/assets/img/AreaSlider/TERRAZA3.webp";
import terraza4 from "@/assets/img/AreaSlider/TERRAZA4.webp";
import alberca1 from "@/assets/img/AreaSlider/ALBERCA1.webp";
import alberca2 from "@/assets/img/AreaSlider/ALBERCA2.webp";
import alberca5 from "@/assets/img/AreaSlider/ALBERCA5.webp";
import cisterna1 from "@/assets/img/AreaSlider/CISTERNA1.webp";
import cisterna2 from "@/assets/img/AreaSlider/CISTERNA2.webp";
import cisterna3 from "@/assets/img/AreaSlider/CISTERNA3.webp";
import cisterna4 from "@/assets/img/AreaSlider/CISTERNA4.webp";
import espejodeagua from "@/assets/img/AreaSlider/ESPEJODEAGUA.webp";

export default {
    components: {
        Splide,
        SplideSlide,
        SplideTrack,
    },
    data() {
        return {
            sliderOptions: {
                drag: true,
                lazyLoad: true,
                rewind: true,
                rewindByDrag: true,
                focus: 'center',
                perMove: 1,
                autoplay: true,
                pagination: true,
                mediaQuery: 'min',
                classes: {
                    arrows: "splide__arrows your-class-arrows ",
                    pagination: "your-class-pagination flex-wrap flex",
                    page: "splide__pagination__page your-class-page",
                },
                breakpoints: {
                    640: {
                        padding: "0",
                        perPage: 1,
                    },
                    768: {
                        padding: "0",
                        perPage: 1,
                        drag: true,
                        rewind: true,
                    },
                    1280: {
                        perPage: 2,
                        padding: '5%',
                        drag: true,
                        rewind: true,


                    },
                },
            },
            activeButton: 0,
            activeSlider: {
                text: "Azoteas",
                leyend: "Sistemas de alta durabilidad a la intemperie.",
                images: [
                    {
                        img: azotea1,
                    },
                    {
                        img: azotea2,
                    },
                    {
                        img: azotea3,
                    },
                    {
                        img: azotea4,
                    },
                    {
                        img: azotea6,
                    },
                    {
                        img: azotea8,
                    },
                    {
                        img: azotea9,
                    },
                    {
                        img: azotea10,
                    },
                    {
                        img: azotea11,
                    },
                    {
                        img: azotea13,
                    },
                ],
            },
            availableSlideres: [
                {
                    text: "Azoteas",
                    leyend: "Sistemas de alta durabilidad a la intemperie.",
                    images: [
                        {
                            img: azotea1,
                        },
                        {
                            img: azotea2,
                        },
                        {
                            img: azotea3,
                        },
                        {
                            img: azotea4,
                        },
                        {
                            img: azotea6,
                        },
                        {
                            img: azotea8,
                        },
                        {
                            img: azotea9,
                        },
                        {
                            img: azotea10,
                        },
                        {
                            img: azotea11,
                        },
                        {
                            img: azotea13,
                        },
                    ],
                },
                {
                    text: "Terrazas",
                    leyend: "Sistema impermeable de tráfico peatonal o jardín.",

                    images: [
                        {
                            img: terraza1,
                        },
                        {
                            img: terraza2,
                        },
                        {
                            img: terraza3,
                        },
                        {
                            img: terraza4,
                        },
                    ],
                },
                {
                    text: "Albercas",
                    leyend: "Productos especializados bajo inmersión.",

                    images: [
                        {
                            img: alberca1,
                        },
                        {
                            img: alberca2,
                        },
                        {
                            img: alberca5,
                        },
                    ],
                },
                {
                    text: "Espejos de agua",
                    leyend: "Recubrimientos de acabado final o de inmersión.",

                    images: [
                        {
                            img: espejodeagua,
                        },
                    ],
                },
                {
                    text: "Cisternas",
                    leyend: "Sistemas restaurativos y de alto soporte a presiones hidráulicas.",

                    images: [
                        {
                            img: cisterna1,
                        },
                        {
                            img: cisterna2,
                        },
                        {
                            img: cisterna3,
                        },
                        {
                            img: cisterna4,
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        changeSlides(index) {
            this.activeSlider = this.availableSlideres[index];
            this.activeButton = index;
            if (this.activeSlider.images.length < 3) {
                this.sliderOptions.breakpoints[1280].drag = false;
                this.sliderOptions.breakpoints[1280].rewind = false;
            }
            else {
                this.sliderOptions.breakpoints[1280].drag = true;
                this.sliderOptions.breakpoints[1280].rewind = true;
            }
        },
        scrollFix: function (hashbang) {
            location.href = hashbang;
        }
    },
};
</script>
<style lang="scss">
.your-class-page {
    /* Layout Properties */
    width: 52px;
    height: 4px;
    border: 1px solid #3673d9;
    background: #fff 0% 0% no-repeat padding-box;
    border-radius: 2px;
    opacity: 1;
}

.splide__pagination__page.is-active {
    transform: scale(1) !important;
    background: #1976bb 0% 0% no-repeat padding-box;

}

.your-class-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: auto;
}

.splide__track--draggable {
    cursor: grab !important;
}

@media (max-width: 768.1px) {

    .your-class-pagination,
    .your-class-page {
        display: hidden !important;
    }
}

.your-class-arrows {
    display: none !important;
}

.splideImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.bg-slider-area {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url("@/assets/img/AreaSlider/FONDODEGRADADO.webp");
}
</style>
