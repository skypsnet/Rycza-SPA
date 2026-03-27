<template>
  <section class="bg-ourJob ">
    <div class="container my-auto p-5 py-10 lg:p-[4rem] lg:pt-[7rem] xl:p-[9rem]  ">
      <p class="text-left pp-mori text-thirty md:text-thirty-md font-semibold">
        Nuestro trabajo<br />
        <span class="pp-mori italic text-thirty md:text-thirty-md block">en acción</span>
      </p>
      <p class="text-twenty md:text-twenty-md text-left mt-4 mb-4 lg:mb-0">Sistema impermeabilizante prefabricado</p>
      <div>
        <div class="container my-auto px-5 pb-5">
          <div class="flex flex-col lg:flex-row lg:items-end  lg:content-center">
            <div class="w-full lg:w-1/3">
              <img src="@/assets/img/ourClients/ourJob/FINALASOLEADO.jpg" class="rounded-[11px] box-shadow"
                alt="FINALASOLEADO">
              <p class="font-bold italic text-twenty md:text-twenty-md py-2 uppercase mt-2">Soleado</p>
              <hr class="max-w-[90%] border border-orange" />
            </div>
            <div class="w-full pt-10 lg:pt-0 text-left lg:w-2/3 lg:px-5">
              <img src="@/assets/img/ourClients/ourJob/PRODUCTOFINALLLOVIENDO.jpg" class="rounded-[11px] box-shadow"
                alt="PRODUCTOFINALLLOVIENDO">
              <p class="font-bold ml-auto italic w-full text-twenty text-right md:text-twenty-md py-2 uppercase mt-2">
                Bajo la lluvia</p>
              <hr class="ml-auto max-w-[90%] border border-blue" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
<script>
export default {
  name: "ourJob",
  data() {
    return {};
  },
};

</script>
<style>


@media(min-width: 1024px) {
  .bg-ourJob {
      background-image: url('@/assets/img/ourClients/ourJob/TEXTURA2.svg');
      background-position: top;
      background-repeat: no-repeat;
    }
  }
</style>
