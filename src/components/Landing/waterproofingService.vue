<template>
    <!--#region nuestro servicio de impermiabilización -->
    <section class="bg-rain-waterproofing">
        <div class="lg:my-5 p-5">
            <div class="p-3 card container box-shadow  lg:flex lg:items-stretch lg:justify-around">
                <div class="mt-4  lg:mt-0 lg:w-[54.723608%]  relative lg:order-2 hidden lg:flow-root">
                    <LazyVimeoVideo 
                      src="https://player.vimeo.com/video/750544940?h=389feff9a0"
                      title="ISUZU | RYCZA IMPERMEABILIZACIONES"
                      aspectRatio="56.25%"
                    />
                </div>
                <div class="my-3 lg:order-1 flex flex-col justify-evenly  lg:w-[35%] ">

                    <p class="text-thirty md:text-thirty-md pp-mori font-semibold ">
                        Nuestro servicio de impermeabilización es transparente y <br /> confiable
                    </p>
                    <p class="text-twenty  my-4">
                        Observa cómo aplicamos nuestros <br /> impermeabilizantes y convéncete, somos <br
                            class="hidden lg:flow-root" /> la mejor
                        opción para ti.
                    </p>

                    <div class="mt-4  lg:mt-0 lg:w-[54.723608%] relative lg:order-2 lg:hidden">
                        <LazyVimeoVideo 
                          src="https://player.vimeo.com/video/750544940?h=389feff9a0"
                          title="ISUZU | RYCZA IMPERMEABILIZACIONES"
                          aspectRatio="56.25%"
                        />
                    </div>
                    <br />
                    <router-link to="/nuestros-clientes"
                        class="button button--blue-light mx-auto  ml-0  ">
                        Ver más
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <!-- #endregion nuestro servicio de impermiabilización  -->
</template>
<script>
import LazyVimeoVideo from "@/components/Common/LazyVimeoVideo.vue";

export default {
    name: "waterproofingService",
    components: {
        LazyVimeoVideo
    },
    data() {
        return {};
    },
};
</script>
