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
                                <LazyVimeoVideo 
                                  src="https://player.vimeo.com/video/750546148?h=7e8a460fb1"
                                  title="Aplicación de acrílico | RYCZA"
                                  aspectRatio="153%"
                                />
                            </div>
                            <router-link :to="{ path: '/nuestros-clientes', hash: '#galeria' }"
                                class="button button--blue-light mx-auto lg:ml-0 lg:mr-0  ">
                                Ver más
                            </router-link>
                        </div>
                    </div>
                    <div class="hidden lg:flex w-[40%]">
                        <div class="mx-auto w-full relative ">
                            <LazyVimeoVideo 
                              src="https://player.vimeo.com/video/750546148?h=7e8a460fb1"
                              title="Aplicación de Sistema Prefabricado | RYCZA"
                              aspectRatio="100%"
                              iframeClass="max-h-[80vh] m-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--#endregion que la lluvia no sea un problema-->
</template>
<script>
import LazyVimeoVideo from "@/components/Common/LazyVimeoVideo.vue";

export default {
    name: "rainProblem",
    components: {
        LazyVimeoVideo
    },
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
    background-image: url('@/assets/img/rainProblem/FONDOROJO.webp');
    background-repeat: no-repeat;
    background-size: cover;
}
@media (max-width: 768px) {
    .bg-rain-problem:before {
        background-image: url('@/assets/img/rainProblem/FONDOROJOMOBILE.webp');
    }
}
    
</style>
