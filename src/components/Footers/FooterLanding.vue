<template>
    <footer class="relative    ">
        <div class=" bg-footer  px-1">
            <div class="container pb-6 pt-4 ">
                <p class="text-center text-blue text-xl italic font-medium">
                    Trabajamos con materiales de calidad, conoce nuestra garantía
                    RYCZA
                </p>
                <div
                    class="flex lg:grid lg:grid-cols-5 lg:gap-5 flex-wrap container lg:justify-around xl:w-[74%]	  justify-center">
                    <div class=" w-[30%] lg:w-auto ">
                        <img src="@/assets/img/Footer/thermotek.png" class="footer-logo  aspect-square lg:mx-auto" />
                    </div>
                    <div class=" w-[30%] lg:w-auto   ">
                        <img src="@/assets/img/Footer/pasa.png" class="footer-logo  aspect-square lg:mx-auto" />
                    </div>
                    <div class=" w-[30%] lg:w-auto  ">
                        <img src="@/assets/img/Footer/chovatek.png" class="footer-logo  aspect-square lg:mx-auto" />
                    </div>
                    <div class=" w-[30%] lg:w-auto    ">
                        <img src="@/assets/img/Footer/imperquimia.png" class="footer-logo  aspect-square lg:mx-auto" />
                    </div>
                    <div class=" w-[30%] lg:w-auto    ">
                        <img src="@/assets/img/Footer/protexa.png" class="footer-logo  aspect-square lg:mx-auto" />
                    </div>
                </div>
                <div class="w-full lg:flex justify-around flex-wrap">
                    <a href="mailto:epoxicos.ricardozamora@gmail.com"
                        class="flex items-center relative flex-wrap justify-center text-center text-blue text-xl font-medium">Contacto
                        <span class="inline-block"><img src="@/assets/svg/ICONO_MAIL.svg" width="25px"
                                class="mx-2" /></span>
                        epoxicos.ricardozamora@gmail.com
                    </a>

                    <a href="https://www.facebook.com/RYCZAConstrucciones" target="_blank"
                        class="flex items-center relative flex-wrap justify-center text-center text-blue text-xl font-medium"> Siguenos!
                        <span class="inline-block"><img src="@/assets/svg/ICONO_FB.svg" width="25px"
                                class="mx-2" /></span>
                                RYCZAConstrucciones
                    </a>
                </div>
            </div>
        </div>

    </footer>
</template>
<script>
export default {
    data() {
        return {};
    },
};
</script>
<style>
.bg-footer {
    background-image: url("@/assets/img/footerFondo.png") !important;
    background-repeat: repeat !important;
    background-position: left;
}

@media (min-width: 768px) {
    .footer-logo {
        max-height: 177px;
    }
}
</style>
