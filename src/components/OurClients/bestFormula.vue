<template>
  <section class="py-[60px] px-5 bg-formula lg:py-10 md:min-h-[75vh] flex flex-col items-center justify-center ">
    <div class="container">
      <p class="text-left text-white text-thirty md:text-thirty-md  font-semibold pp-mori">
        Convierte a las goteras<br /> en cosa del pasado
      </p>
      <p class="text-left mt-4 text-white text-twenty-five md:text-twenty-five-md  font-semibold pp-mori">
        Realiza tu impermeabilización <br /> con nosotros
      </p>
      <!-- checks with arrow -->
      <p class="blue-tick text-left mt-4 text-white text-twenty md:text-twenty-md   pp-mori w-full">
        Conocimiento especializado.
      </p>
      <p class="blue-tick text-left mt-4 text-white text-twenty md:text-twenty-md   pp-mori w-full">
        Nuestra experiencia nos respalda.
      </p>
      <p class="blue-tick text-left mt-4 text-white text-twenty md:text-twenty-md   pp-mori w-full">
        Tranquilidad y confianza.
      </p>
      <p class="blue-tick flex text-left my-4 text-white text-twenty md:text-twenty-md   pp-mori w-full">
        Sé parte de nuestra lista de clientes satisfechos.
      </p>
      <a href="/Contacto" class="button  button--blue ml-0 border-white  ">
        Contáctanos
      </a>

    </div>
  </section>
</template>
<script>
export default {
  name: "formula",
  data() {
    return {};
  },
}
</script>

<style>
.bg-formula {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("@/assets/img/ourClients/servicios/BANNER_SERVICIOS.jpg");
}

.blue-tick::before {
  /* add a tick before content */
  content: url("@/assets/img/ourClients/servicios/check.svg");
  color: #26AEDF;
  margin-right: 5px;

}
</style>
