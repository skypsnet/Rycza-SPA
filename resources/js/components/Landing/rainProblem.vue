<template>
    <!--#region que la lluvia no sea un problema-->
    <section class="bg-rain-problem relative">
        <div class="lg:p-5 relative">
            <div class="container mx-auto text-white">
                <div class="lg:flex justify-center  items-center lg:min-h-[80vh]">
                    <div class=" lg:w-[35%] xl:w-[40%] p-10">
                        <div class="lg:w-[91%] flex h-full justify-around flex-col">
                            <p
                                class="font-semibold  text-thirty md:text-thirty-md   tracking-normal mb-4 text-left pp-mori ">
                                ¡Qué la lluvia <br />
                                ya no sea un problema!
                            </p>

                            <p class="text-twenty  text-left mt-4">
                                Un servicio de impermeabilización preventivo puede ser tu mejor aliado para proteger tu
                                patrimonio, ponte en manos de profesionales.
                            </p>
                            <div class="relative flow-root lg:hidden py-4">
                                <div class="pt-[153%] lg:pt-[56.25%] relative">
                                    <iframe
                                        src="https://player.vimeo.com/video/750546148?h=7e8a460fb1&amp;controls=1&amp;autoplay=1&amp;loop=1&amp;autopause=0&amp;muted=1&amp;player_id=0&amp;app_id=58479"
                                        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
                                        style="position:absolute;top:0;left:0;width:100%;height:100%;"
                                        title="Aplicaci&amp;oacute;n de acr&amp;iacute;lico | RYCZA">
                                    </iframe>
                                </div>
                            </div>
                            <a href="/nuestros-clientes#galeria"
                                class="button button--blue-light mx-auto lg:ml-0 lg:mr-auto  ">
                                Ver más
                            </a>
                        </div>
                    </div>
                    <div class="hidden lg:flex w-[40%]">
                        <div class="mx-auto w-full relative ">
                            <div class="w-full" style="padding:100%  0 0 0;position:relative;">
                                <iframe class="max-h-[80vh] m-auto"
                                    src="https://player.vimeo.com/video/750546148?h=7e8a460fb1&amp;controls=1&amp;autoplay=1&amp;loop=1&amp;autopause=0&amp;muted=1&amp;player_id=0&amp;app_id=58479"
                                    frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
                                    style="position:absolute;top:0;left:0;width:100%;height:100%;"
                                    title="Aplicaci&amp;oacute;n de Sistema Prefabricado | RYCZA">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--#endregion que la lluvia no sea un problema-->
</template>
<script>
export default {
    name: "rainProblem",
    data() {
        return {};
    },
};
</script>
<style>
.bg-rain-problem:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    background-image: url('@/assets/img/rainProblem/FONDOROJO.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
@media (max-width: 768px) {
    .bg-rain-problem:before {
        background-image: url('@/assets/img/rainProblem/FONDOROJOMOBILE.jpg');
    }
}
    
</style>
