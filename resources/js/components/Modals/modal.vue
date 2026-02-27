<template>
  <div class="modal-overlay">
    <div class="flex justify-center items-center w-full p-5 flex-col max-w-[90%] ">
      <div>
        <div class="w-full max-w-[900px] close rounded-full mb-5 lg:mt-auto lg:mb-3" @click="$emit('close-modal')">
          <img class="close-img ml-auto w-[30px] lg:w-[60px] bg-white rounded-full" src="@/assets/svg/CERRAR.svg"
            alt="x" />
        </div>
        <div class="modal  lg:flex  ">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.007);
  backdrop-filter: blur(150px);
  z-index: 60;
}

.modal {
  max-width: 800px;
  max-height: 800px;
  border-radius: 20px;
}

.close {
  cursor: pointer;
}

.close-img {
  width: 25px;
}



p {
  font-size: 16px;
  margin: 20px 0;
}
</style>

<script>
export default {
  name: "Modal",
}
</script>
