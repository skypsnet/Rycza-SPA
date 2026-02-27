<template>
    <section
        class="bg-working text-white flex flex-col items-center justify-center bg-left md:bg-center p-10 md:p-3 lg:p-10"
    >
        <div class="container mb-5">
            <p class="font-semibold text-thirty md:text-thirty-md   pp-mori">
                De ahora en adelante <br class="xl:hidden" />
                solo <br class="hidden lg:flow-root" />
                disfrutarás de espacios <br class="hidden md:flow-root" />
                libres de <br class="md:hidden" />
                goteras
            </p>
        </div>
        <div
            class="container flex flex-col flex-wrap md:flex-row md:flex-nowrap"
        >
            <div class="text-center px-4 mb-5">
                <img
                    src="@/assets/svg/Calidad_y_seguridad.svg"
                    class="w-[97] h-[97] mx-auto"
                />
                <p class="text-twenty-five md:text-twenty-five-md font-semibold  my-4">
                    Calidad y <br class="hidden md:flow-root" />
                    Seguridad
                </p>
            </div>
            <div class="px-4 mb-5">
                <img
                    src="@/assets/svg/Materiales_confiables.svg"
                    class="w-[97] h-[97] mx-auto"
                />
                <p class="text-twenty-five md:text-twenty-five-md font-semibold text-center my-4">
                    Materiales <br class="hidden md:flow-root" />
                    confiables
                </p>
            </div>
            <div class="text-center md:px-4 mb-5">
                <img
                    src="@/assets/svg/Satisfaccion_total.svg"
                    class="w-[97] h-[97] mx-auto"
                />
                <p class="text-twenty-five md:text-twenty-five-md font-semibold text-center  my-4">
                    Garantía de<br class="hidden md:flow-root" />
                    satisfacción <br class="hidden md:flow-root" />
                    total
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "freeLeaks",
    data() {
        return {};
    },
};
</script>
