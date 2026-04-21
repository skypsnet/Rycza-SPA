<template>
    <footer class="relative    ">
        <div class=" bg-footer  px-1">
            <div class="container pb-6 pt-4 ">
                <p class="text-center text-blue text-xl italic font-medium">
                    Trabajamos con materiales de calidad, conoce nuestra garantía
                    RYCZA
                </p>
                <div
                    class="flex lg:grid lg:grid-cols-8 lg:gap-4 flex-wrap container lg:justify-around xl:w-[90%] justify-center items-center py-4">
                    <div class="w-1/3 md:w-1/4 lg:w-auto p-2">
                        <img src="@/assets/img/Footer/sherwin.webp" alt="Sherwin Williams" class="footer-logo object-contain mx-auto" />
                    </div>
                    <div class="w-1/3 md:w-1/4 lg:w-auto p-2">
                        <img src="@/assets/img/Footer/pasa.webp" alt="PASA" class="footer-logo footer-logo--png object-contain mx-auto" />
                    </div>
                    <div class="w-1/3 md:w-1/4 lg:w-auto p-2">
                        <img src="@/assets/img/Footer/pazti.webp" alt="PAZTI" class="footer-logo footer-logo--pazti object-contain mx-auto" />
                    </div>
                    <div class="w-1/3 md:w-1/4 lg:w-auto p-2">
                        <img src="@/assets/img/Footer/imperquimia.webp" alt="Imperquimia" class="footer-logo footer-logo--png footer-logo--imperquimia object-contain mx-auto" />
                    </div>
                    <div class="w-1/3 md:w-1/4 lg:w-auto p-2">
                        <img src="@/assets/img/Footer/protexa.webp" alt="Protexa" class="footer-logo footer-logo--png object-contain mx-auto" />
                    </div>
                    <div class="w-1/3 md:w-1/4 lg:w-auto p-2">
                        <img src="@/assets/img/Footer/copernit.webp" alt="Copernit" class="footer-logo object-contain mx-auto" />
                    </div>
                    <div class="w-1/3 md:w-1/4 lg:w-auto p-2">
                        <img src="@/assets/img/Footer/ultramex.webp" alt="Ultramex" class="footer-logo object-contain mx-auto" />
                    </div>
                    <div class="w-1/3 md:w-1/4 lg:w-auto p-2">
                        <img src="@/assets/img/Footer/danesa.webp" alt="Danesa" class="footer-logo object-contain mx-auto" />
                    </div>
                </div>

                <div class="w-full lg:flex justify-around flex-wrap">
                    <a href="mailto:ryczaimper@gmail.com"
                        @click="trackFooterClick('Email')"
                        class="flex items-center relative flex-wrap justify-center text-center text-blue text-xl font-medium">Contacto
                        <span class="inline-block"><img src="@/assets/svg/ICONO_MAIL.svg" width="25px"
                                class="mx-2" /></span>
                        ryczaimper@gmail.com
                    </a>

                    <a href="https://www.facebook.com/RYCZAImper" target="_blank"
                        @click="trackFooterClick('Facebook')"
                        class="flex items-center relative flex-wrap justify-center text-center text-blue text-xl font-medium"> Siguenos!
                        <span class="inline-block"><img src="@/assets/svg/ICONO_FB.svg" width="25px"
                                class="mx-2" /></span>
                                RYCZA Impermeabilizaciones
                    </a>
                </div>
            </div>
        </div>

    </footer>
</template>
<script>
import { trackGTMEvent } from "@/utils/gtm";

export default {
    data() {
        return {};
    },
    methods: {
        trackFooterClick(label) {
            trackGTMEvent('footer_click', {
                label: label,
                category: 'footer'
            });
        }
    }
};
</script>
<style>
.bg-footer {
    background-image: url("@/assets/img/footerFondo.webp") !important;
    background-repeat: repeat !important;
    background-position: left;
}

.footer-logo {
    max-height: 50px;
    width: 100%;
}

.footer-logo--pazti {
    transform: scale(0.5);
}

.footer-logo--imperquimia {
    transform: scale(3.5);
}

@media (min-width: 768px) {
    .footer-logo {
        max-height: 80px;
    }
    .footer-logo--png {
        transform: scale(1.4);
    }
    .footer-logo--pazti {
        transform: scale(0.8);
    }
    .footer-logo--imperquimia {
        transform: scale(2.5);
    }
}

</style>
