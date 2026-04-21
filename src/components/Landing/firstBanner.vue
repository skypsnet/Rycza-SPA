<template>
    <!--#region banner-->
    <div>
        <section class="z-[3] flex flex-col pt-16 lg:pt-0 lg:flex-row items-end text-start  first-banner  ">
            <aside class="w-full lg:max-w-[50%] py-10 ">
                <div class="w-full max-w-[95%] lg:max-w-[90%] container">
                    <div class="max-w-[95%] lg:max-w-[90%] m-auto">
                        <p
                            class="text-white text-start lg:text-thirty-md text-thirty leading-[30px] font-semibold pp-mori">
                            Impermeabiliza
                            y
                            <br />
                            protege tu inversión
                        </p>
                        <br />
                        <p class="text-white text-start lg:text-twenty-five-md text-twenty pp-mori  !leading-[36px]">
                            Servicio de
                            <span class=" font-semibold  italic pp-mori "> impermeabilización</span>
                            <br class="hidden lg:flow-root" />
                            para todo tipo de construcciones
                            en <br class="hidden lg:flow-root" />
                            <span class=" font-semibold  italic pp-mori  "> Cancún, Riviera Maya, Mérida y CDMX. </span>

                        </p>
                        <br />
                        <router-link to="/Contacto"
                            @click="trackCTAClick('Contáctanos Banner')"
                            class="button button--orange  border-white ml-0 !mr-auto lg:text-twenty-five-md text-twenty-five">Contáctanos</router-link>
                        <br />
                    </div>
                    <div class="hidden lg:flow-root">
                        <img class="w-full mr-auto mar" src="@/assets/img/BannerHome/bannermat.webp"
                            alt="firstBanner">
                    </div>
                </div>
            </aside>
            <aside class="w-full  lg:max-w-[50%] bg-rycza-banner-worker">
                <div class="lg:hidden relative">
                    <img class="w-full mr-auto relative z-[3]" src="@/assets/img/BannerHome/bannermat.webp"
                        alt="firstBanner">
                    <img src="@/assets/img/BannerHome/principalRycza.webp" alt="RYCZA IMPERMEABILIZACIONES">
                </div>
            </aside>
        </section>

    </div>
    <!--#endregion banner-->
</template>

<script>
import { trackGTMEvent } from "@/utils/gtm";

export default {
    name: "firstBanner",
    data() {
        return {};
    },
    methods: {
        trackCTAClick(label) {
            trackGTMEvent('cta_click', {
                label: label,
                category: 'conversion'
            });
        }
    }
};
</script>
<style>
.first-banner {
    background-repeat: repeat;
    background-position: 0%;
    background-image: url("@/assets/img/BannerHome/PLECABANNERPRINCIPAL.webp");
    min-height: 100%;
    height: clamp(802px, 100vh, 150vh);
    background-size: 100%;
}

.bg-rycza-banner-worker {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("@/assets/img/BannerHome/principalRycza.webp");
    height: 100%;
    background-size: cover;
}

@media (max-width: 1024px) {
    .first-banner {
        min-height: 100%;
        height: clamp(800px, 60vh, 100%);
    }

    .bg-rycza-banner-worker {
        background-image: url("@/assets/img/BannerHome/PLECABANNERPRINCIPAL.webp");
    }
}
</style>
