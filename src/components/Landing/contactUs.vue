<template>
    <section class="bg-contactanos min-h-[34.6104rem] text-white flex justify-center items-center pb-5 p-5">
        <div class="container flex justify-center">
            <div class="flex flex-col text-center">
                <p class="font-semibold text-thirty md:text-thirty-md  pp-mori mb-4">¡Contáctanos!</p>
                <p class="font-medium text-twenty">
                    Llena nuestro formulario, nos ayudará a
                    <br />
                    darte una atención personalizada.
                </p>
                <button @click="contactUs" class="button border-white bg-blue  ">
                    Llenar formulario
                </button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "ContactUs",
    data() {
        return {};
    },
    methods: {
        contactUs() {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "contactUs",
                page_location: window.location.href,
            });
            console.log("Hola mundo");
            console.log(window.dataLayer);
            
            // Si usas vue-router, es mejor usar this.$router.push('/Contacto')
            // para mantener la experiencia de SPA.
            window.location.href = "/Contacto";
        },
    },
};

</script>
<style>
.bg-contactanos {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("@/assets/img/BannerContacto.jpg");
}
</style>
