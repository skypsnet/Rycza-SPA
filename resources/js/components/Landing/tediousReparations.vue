<template>
    <!--#region Olvídate de numerosas y tediosas reparaciones -->
    <div class="bg-tedious-reparations w-full">
        <section class="container  grid grid-cols-12 py-20 px-5 md:p-0 min-h-[90vh] ">
            <div class="col-span-12 md:col-span-6 p-4 flex justify-center items-center">
                <div class="md:w-10/12">
                    <p class="font-semibold  mx-auto text-thirty md:text-thirty-md  text-left  md:w-full pb-5 pp-mori">
                        Olvídate de las molestas goteras y el olor a<br class="hidden md:flow-root lg:hidden" /> humedad
                    </p><br />
                    <img src="@/assets/svg/tediousReparations/texturas_reparaciones.svg"
                        class="mx-auto pp-mori w-8/12 h-auto md:hidden" />
                    <p class="text-twenty  pt-5 md:pt-0">
                        El problema por <span class="text-orange font-semibold ">humedad</span> puede
                        <br class="lg:hidden" /> ocasionar daños a
                        la infraestructura,<br class="lg:hidden" /> alergias y problemas
                        <span class="text-orange font-semibold ">respiratorios</span>.<br /> <br /> Invierte en un
                        servicio de<br class="lg:hidden" />
                        impermeabilización y <span class="text-orange font-semibold ">ahorra</span> tiempo y dinero.
                    </p>
                    <br />
                    <router-link to="/Contacto" class="button   mx-auto lg:!ml-0 lg:mr-auto button--blue   ">
                        Contáctanos
                    </router-link>
                </div>
            </div>
            <div class="col-span-12 hidden md:flex md:col-span-6 p-4 z-20  justify-center items-center">
                <img src="@/assets/svg/tediousReparations/texturas_reparaciones.svg" class="w-10/12 h-auto" />
            </div>
        </section>
    </div>
    <!--#endregion Olvídate de numerosas y tediosas reparaciones -->
</template>
<script>
export default {
    name: "tediousReparations",
    data() {
        return {};
    },
};
</script>

<style scoped>
.bg-tedious-reparations {
    background-image:
        url("@/assets/img/tediousReparations/FONDOGOTERAS.png");
    background-size: cover;
    min-height: 60vh;
}
</style>
