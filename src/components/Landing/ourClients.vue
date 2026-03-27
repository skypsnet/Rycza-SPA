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
                <div class="lg:grid grid-cols-2 lg:grid-cols-5 gap-5 p-4 hidden">
                    <img src="@/assets/img/LogosClientes/sedena.png" />
                    <img src="@/assets/img/LogosClientes/terramagna.png" />
                    <img src="@/assets/img/LogosClientes/isuzu.png" />
                    <img src="@/assets/img/LogosClientes/ciudadmayakoba.png" />
                    <img src="@/assets/img/LogosClientes/rolandi.png" />
                </div>
                <splide :options="clientSliderOptions" aria-label="clientSliders" class="lg:hidden">
                    <SplideSlide>
                        <img src="@/assets/img/LogosClientes/sedena.png" class="mx-auto" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="@/assets/img/LogosClientes/terramagna.png" class="mx-auto" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="@/assets/img/LogosClientes/isuzu.png" class="mx-auto" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="@/assets/img/LogosClientes/ciudadmayakoba.png" class="mx-auto" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="@/assets/img/LogosClientes/rolandi.png" class="mx-auto" />
                    </SplideSlide>
                </splide>
                <a href="/nuestros-clientes#testimoniales"
                    class="md:flow-root button button--blue container  mb-6 ">
                    Ver opiniones
                </a>
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
                rewind: true,
                classes: {
                    arrows: "splide__arrows your-class-arrows",
                    page: "splide__pagination__page your-class-page",
                    pagination: "splide__pagination pagination-clients-mobile",
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
