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
                        <a href="/contacto"
                            class="button button--orange  border-white ml-0 !mr-auto lg:text-twenty-five-md text-twenty-five">Contáctanos</a>
                        <br />
                    </div>
                    <div class="hidden lg:flow-root">
                        <img class="w-full mr-auto mar" src="@/assets/img/BannerHome/MATERIALESBANNER.png"
                            alt="firstBanner">
                    </div>
                </div>
            </aside>
            <aside class="w-full  lg:max-w-[50%] bg-rycza-banner-worker">
                <div class="lg:hidden relative">
                    <img class="w-full mr-auto relative z-[3]" src="@/assets/img/BannerHome/MATERIALESBANNER.png"
                        alt="firstBanner">
                    <img class="w-full mr-auto z-0 relative -mt-[40px]"
                        src="@/assets/img/BannerHome/FOTOBANNERPRINC.jpg" alt="firstBanner">
                </div>
            </aside>
        </section>

    </div>
    <!--#endregion banner-->
</template>

<script>
export default {
    name: "firstBanner",
    data() {
        return {};
    },
};
</script>
<style>
.first-banner {
    background-repeat: repeat;
    background-position: 0%;
    background-image: url("@/assets/img/BannerHome/PLECABANNERPRINCIPAL.jpg");
    min-height: 100%;
    height: clamp(802px, 100vh, 150vh);
    background-size: 100%;
}

.bg-rycza-banner-worker {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("@/assets/img/BannerHome/FOTOBANNERPRINC.jpg");
    height: 100%;
    background-size: cover;
}

@media (max-width: 1024px) {
    .first-banner {
        min-height: 100%;
        height: clamp(800px, 60vh, 100%);
    }

    .bg-rycza-banner-worker {
        background-image: url("@/assets/img/BannerHome/PLECABANNERPRINCIPAL.jpg");
    }
}
</style>
