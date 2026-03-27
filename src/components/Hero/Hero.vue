<template>
  <div class="h-full">
    <div
      class="
        group
        relative
        flex
        h-[318px]
        items-end
        bg-cover bg-center bg-no-repeat
        p-0
        md:h-full
      "
    >
      <img
        class="
          h-full
          w-full
          bg-center
          opacity-[0.9]
          mix-blend-normal
          md:absolute  md:group-hover:opacity-[0.4]
          [&>img]:rounded-[10px] [&>img]:mix-blend-normal
          md:[&>img]:!object-cover
          [&>picture>img]:rounded-[10px] [&>picture>img]:mix-blend-normal
          md:[&>picture>img]:!object-cover
        "
        :image="media"
      />
      <div
        class="
          slider-gradient
          relative
          mt-auto
          hidden
          h-full
          w-full
          rounded-[10px]
          pb-6
          text-white
          md:flex md:flex-col md:items-center md:justify-end
        "
      >
        <p class="mt-auto text-center font-serif text-2xl md:w-3/6">
          {{ title }}
        </p>
        <p
          class="
            line-clamp-3
            overflow-ellipsis
            text-center text-base
            md:my-4 md:w-4/6
            xl:w-2/6
            2xl:w-[30vw]
          "
        >
          {{ description }}
        </p>
        <div class="w-full flex justify-center group-hover:!visible">
          <button
            class="
              mx-auto
              mb-[3vw]
              items-center
              !p-6
              font-serif
              text-base
              leading-[15px]
               md:!px-16
            "
            uppercase
            flat
            outlined
            v-bind="button"
          >
          </button>
        </div>
      </div>
    </div>
    <div
      class="
        m-0
        mx-auto
        flex
        max-w-sm
        flex-col
        items-center
        justify-center
        p-1
        text-center
        align-middle
        font-normal
        text-white
        md:hidden
      "
    >
      <p class="mt-7 font-serif text-2xl">{{ title }}</p>
      <p class="my-5 text-center font-sans text-base">{{ description }}</p>
      <div class="">
      </div>
    </div>
  </div>
</template>

<script>


</script>
<style lang="scss">
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.slider-gradient {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 50%
  );
}
</style>
