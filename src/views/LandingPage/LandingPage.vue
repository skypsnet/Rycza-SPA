<template>
    <div>
        <main>
            <first-banner></first-banner>
            <slider-areas></slider-areas>
            <rain-problem></rain-problem>
            <roof-change></roof-change>
            <tedious-reparations></tedious-reparations>
            <waterproofing-service></waterproofing-service>
            <free-leaks></free-leaks>
            <our-clients></our-clients>
            <contact-us></contact-us>
        </main>
    </div>
</template>

<script>
import sliderAreas from "@/components/Sliders/sliderAreas.vue";
import FirstBanner from "@/components/Landing/firstBanner.vue";
import RainProblem from "@/components/Landing/rainProblem.vue";
import RoofChange from "@/components/Landing/RoofChange.vue";
import TediousReparations from "@/components/Landing/tediousReparations.vue";
import FreeLeaks from "@/components/Landing/freeLeaks.vue";
import WaterproofingService from "@/components/Landing/waterproofingService.vue";
import OurClients from "@/components/Landing/ourClients.vue";
import ContactUs from "@/components/Landing/contactUs.vue";
import rainIcon from "@/assets/svg/iconolluvia.svg";
export default {
    name: "LanginPage",
    data() {
        return {};
    },
    components: {
        sliderAreas,
        FirstBanner,
        RainProblem,
        RoofChange,
        TediousReparations,
        FreeLeaks,
        WaterproofingService,
        OurClients,
        ContactUs,
    },
};
</script>
<style>
/* .bg-azotea {
    opacity: 0.3;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("@/assets/img/Fondo_antes_y_despues.jpg");
} */

.bg-working {
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    min-height: 70vh;
    background-image: url("@/assets/img/hombres_trabajando.jpg");
}

@media (max-width: 757px) {
    .bg-working {
        background-image: url("@/assets/img/hombres_trabajando_mobile.jpg");
    }
}

.bg-rain-left-top {
    top: -155px;
    left: -54px;
}

.bg-rain-right-top {
    right: -119px;
    top: 18%;
}

@media(min-width: 768px) {

    .bg-rain-left-top {
        top: -155px;
    }

    .bg-rain-bottom {
        bottom: 34%;
        left: 18%;
    }

    .bg-rain-right-top {
        right: -50px;
        top: 0;
    }
}
</style>
