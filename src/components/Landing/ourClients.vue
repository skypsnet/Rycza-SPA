<template>
    <section class=" py-10 p-5" id="ourClients">
        <div
            class="px-3 card py-6 container box-shadow text-start md:text-center lg:px-5 pb-5 lg:pb-0  flex justify-center items-center">
            <div>
                <p class="pp-mori font-semibold text-thirty mt-10 md:text-thirty-md  ">
                    Nuestros clientes <br class="flow-root md:hidden" />
                    nos respaldan
                </p>
                <p class="font-light text-twenty mt-5">
                    Agradecemos a nuestros clientes <br class="lg:hidden" /> quienes ponen su confianza en <br
                        class="lg:hidden" /> nosotros para brindarles la <br class="lg:hidden" />
                    tranquilidad de que están <br class="hidden lg:flow-root" /> adquiriendo <br class="lg:hidden" /> un
                    servicio profesional de<br class="lg:hidden" />
                    impermeabilización.
                </p>
                <div class="hidden lg:flex flex-wrap items-center justify-center gap-x-12 gap-y-14 p-6 pt-10 max-w-[1400px] mx-auto">
                    <img src="@/assets/img/LogosClientes/sedena.webp" alt="SEDENA" class="max-h-40 lg:max-h-52 scale-125 object-contain" />
                    <img src="@/assets/img/LogosClientes/terramagna.webp" alt="Terramagna" class="max-h-40 lg:max-h-52 scale-125 object-contain" />
                    <img src="@/assets/img/LogosClientes/isuzu.webp" alt="ISUZU" class="max-h-40 lg:max-h-52 scale-125 object-contain" />
                    <img src="@/assets/img/LogosClientes/ciudadmayakoba.webp" alt="Ciudad Mayakoba" class="max-h-40 lg:max-h-52 scale-140 object-contain" />
                    <img src="@/assets/img/LogosClientes/rolandi.webp" alt="Rolandi" class="max-h-40 lg:max-h-52 scale-125 object-contain" />
                    <img src="@/assets/img/LogosClientes/mistiq.webp" alt="Mistiq" class="max-h-28 lg:max-h-32 object-contain" />
                    <img src="@/assets/img/LogosClientes/corasol.webp" alt="Corasol" class="max-h-28 lg:max-h-32 object-contain" />
                    <img src="@/assets/img/LogosClientes/magnuscenter.webp" alt="Magnus Center" class="max-h-28 lg:max-h-32 object-contain" />
                    <img src="@/assets/img/LogosClientes/macdonalds.webp" alt="McDonald's" class="max-h-28 lg:max-h-32 object-contain" />
                    <img src="@/assets/img/LogosClientes/secrets.webp" alt="Secrets" class="max-h-28 lg:max-h-32 object-contain" />
                    <img src="@/assets/img/LogosClientes/moon_palace.webp" alt="Moon Palace" class="max-h-28 lg:max-h-32 object-contain" />
                </div>


                <Splide :options="clientSliderOptions" aria-label="clientSliders" class="lg:hidden py-10">
                    <SplideSlide class="flex items-center justify-center h-48"><img src="@/assets/img/LogosClientes/sedena.webp" class="h-40 scale-125 object-contain" /></SplideSlide>
                    <SplideSlide class="flex items-center justify-center h-48"><img src="@/assets/img/LogosClientes/terramagna.webp" class="h-40 scale-125 object-contain" /></SplideSlide>
                    <SplideSlide class="flex items-center justify-center h-48"><img src="@/assets/img/LogosClientes/isuzu.webp" class="h-40 scale-125 object-contain" /></SplideSlide>
                    <SplideSlide class="flex items-center justify-center h-48"><img src="@/assets/img/LogosClientes/ciudadmayakoba.webp" class="h-40 scale-140 object-contain" /></SplideSlide>
                    <SplideSlide class="flex items-center justify-center h-48"><img src="@/assets/img/LogosClientes/rolandi.webp" class="h-40 scale-125 object-contain" /></SplideSlide>
                    <SplideSlide class="flex items-center justify-center h-48"><img src="@/assets/img/LogosClientes/corasol.webp" class="h-32 object-contain" /></SplideSlide>
                    <SplideSlide class="flex items-center justify-center h-48"><img src="@/assets/img/LogosClientes/magnuscenter.webp" class="h-32 object-contain" /></SplideSlide>
                    <SplideSlide class="flex items-center justify-center h-48"><img src="@/assets/img/LogosClientes/macdonalds.webp" class="h-32 object-contain" /></SplideSlide>
                    <SplideSlide class="flex items-center justify-center h-48"><img src="@/assets/img/LogosClientes/secrets.webp" class="h-32 object-contain" /></SplideSlide>
                    <SplideSlide class="flex items-center justify-center h-48"><img src="@/assets/img/LogosClientes/moon_palace.webp" class="h-32 object-contain" /></SplideSlide>
                    <SplideSlide class="flex items-center justify-center h-48"><img src="@/assets/img/LogosClientes/mistiq.webp" class="h-28 object-contain" /></SplideSlide>
                </Splide>






                <router-link :to="{ path: '/nuestros-clientes', hash: '#testimoniales' }"
                    class="md:flow-root button button--blue container  mb-6 ">
                    Ver opiniones
                </router-link>
            </div>
        </div>
    </section>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
    name: "ourClients",
    data() {
        return {
            clientSliderOptions: {
                drag: true,
                center: true,
                autoplay: true,
                type: "loop",
                perPage: 1,
                gap: '1.5rem',
                arrows: false,
                pagination: true,
                rewind: true,
                classes: {
                    arrows: "splide__arrows your-class-arrows",
                    page: "splide__pagination__page your-class-page",
                    pagination: "splide__pagination pagination-clients-mobile",
                },
                breakpoints: {
                    640: {
                        perPage: 2,
                    },
                    1024: {
                        perPage: 3,
                    },
                },
            },
        };
    },
    components: {
        Splide,
        SplideSlide,
    },
};
</script>
<style lang="scss">
.pagination-clients-mobile {
    bottom: 1em !important;
}

.bg-rain-left {
    background-image: url("@/assets/svg/iconolluvia.svg"), url("@/assets/svg/iconolluvia.svg");
    background-position: -121px 58%, 151% -11%;
    background-repeat: no-repeat, no-repeat;

}

@media(min-width: 768px) {
    .bg-rain-left {
        background-position: left 90%, right top;
        background-repeat: no-repeat, no-repeat;

    }
}
</style>
