<template>
    <!--#region ¿Qué tal un cambio en tu azotea?-->
    <section class=" pt-20 relative flex flex-col justify-center align-cener items-center text-center">
        <div class="absolute bg-azotea w-full h-full z-0"></div>
        <p class="pp-mori text-thirty md:text-thirty-md   font-semibold relative w-9/12 mb-4 md:w-full"
            id="roof-change">
            Impermeabiliza, protege y ahorra
        </p>
        <p
            class="text-twenty-five md:text-twenty-five-md pp-mori font-semibold relative w-full lg:w-11/12 md:w-full mb-5">
            Impermeabiliza tu azotea y <br class="md:hidden" />
            evita problemas
            de humedad <br class="md:hidden" /> y goteras.
        </p>
        <div
            class="bg-blue min-h-[84px] flex align-center  rounded-r-md relative text-white uppercase leading-6 md:text-twenty-five-md text-twenty-five self-start min-w-[90%] lg:min-w-[25%]	">
            <p class=" text-left py-5 pr-12 pp-mori font-semibold w-fit ml-10 mr-auto lg:ml-auto   my-auto">
                IMPERMEABILIZACIÓN <br />
                EN OBRA
                NUEVA</p>
        </div>
        <br />
        <div class="container rounded-xl max-w-[90%] mx-auto">
            <div class="lg:grid gap-6 lg:gap-8 grid-cols-10 rounded-xl justify-center  p-2 lg:p-0">
                <div class="hidden lg:flow-root col-span-1"></div>
                <div class="relative col-span-10 lg:col-span-4 rounded-[16px] pb-10 lg:pb-0  flex flex-col">
                    <img src="@/assets/img/SEDENA_ANTES.png" class="w-full xl:h-full max-h-[339px]" />
                    <div class="text-left text-twenty lg:text-twenty  py-5">
                        <p class=" text-twenty my-4 font-bold text-black ">
                            A N T E S
                        </p>
                        <hr class="w-[56.54%] border-2 border-orange  my-4" />
                        <p>
                            Azotea de una construcción nueva, superficie limpia.
                        </p>
                    </div>
                </div>
                <div class="relative col-span-10 lg:col-span-4 rounded-[16px] pb-10 lg:pb-0 flex flex-col">
                    <img src="@/assets/img/SEDENA_FINAL.png" class="w-full xl:h-full max-h-[339px]" />
                    <div class="text-left text-twenty lg:text-twenty py-5">
                        <p class="text-right text-twenty  font-bold text-black">
                            D E S P U É S
                        </p>
                        <hr class="w-[56.54%] border-2 ml-auto border-blue my-4" />
                        <p>
                            Aplicación de sistema de impermeabilizado prefabricado.
                        </p>
                    </div>
                </div>
                <div class="hidden lg:flow-root col-span-1"></div>
            </div>
        </div>
        <br />
        <div class="flex mt-10 w-full justify-end relative">
            <div
                class="bg-blue flex align-center  min-h-[84px] relative  rounded-l-md text-white uppercase leading-6 lg:text-twenty-five-md text-twenty-five self-start min-w-[90%] lg:min-w-[25%]	">
                <p class=" text-left py-5 pl-12 pp-mori font-semibold w-fit mr-auto  my-auto">MANTENIMIENTO</p>
            </div>
        </div>
        <div class="  bg-roof-texture w-full">
            <div class="container pb-20 pt-10 rounded-xl ">
                <div class="lg:grid gap-6 lg:gap-8 grid-cols-10 rounded-xl justify-center  p-2 lg:p-0">
                    <div class="hidden lg:flow-root col-span-1"></div>
                    <div class=" crelative col-span-10 lg:col-span-4 rounded-[16px]">
                        <img src="@/assets/img/ANTES_AZOTEA.png" class="mx-auto lg:ml-auto h-full max-h-[374px]  " />
                        <div class="max-w-[80%] lg:max-w-none mx-auto text-left text-twenty lg:text-twenty  py-5">
                            <p class=" text-twenty my-4 font-bold text-black">
                                A N T E S
                            </p>
                            <hr class="w-[56.54%] border-2 border-orange  my-4" />
                            <p>
                                Azotea de un domicilio particular, el cual presentaba moho y filtraciones.
                            </p>
                        </div>
                    </div>
                    <div class="relative col-span-10 lg:col-span-4 rounded-[16px]">
                        <img src="@/assets/img/DESPUES_AZOTEA.png" class="mx-auto lg:mr-auto  h-full max-h-[374px]" />
                        <div class="max-w-[80%] lg:max-w-none mx-auto text-left text-twenty lg:text-twenty  py-5">
                            <p class="text-right text-twenty my-4 font-bold text-black">
                                D E S P U É S
                            </p>
                            <hr class="w-[56.54%] border-2 ml-auto border-blue my-4" />
                            <p>
                                Aplicación de sistema de impermeabilizado acrílico en acabado color blanco.
                            </p>
                        </div>
                    </div>
                    <div class="hidden lg:flow-root col-span-1"></div>
                </div>
            </div>
        </div>
    </section>
    <!--#endregion ¿Qué tal un cambio en tu azotea?-->
</template>
<script>
export default {
    name: "RoofChange",
    data() {
        return {};
    },
};
</script>
<style>
/* fullwidth background with container height */
@media (min-width: 1024px) {
    .bg-roof-texture {
        background-image: url('@/assets/img/roof/TEXTURAFONDO.svg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        height: 100%;


    }

    
}
</style>
