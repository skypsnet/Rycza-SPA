<template>
    <div
        class="relative !flex h-full w-full !items-end !justify-center text-white"
    >
        <img
            class="absolute h-full w-full [&>img]:mix-blend-normal md:[&>img]:!object-cover"
            :image="image"
            fit
            rounded
        />
        <div
            class="linear-gradient-180 absolute h-1/2 w-full rounded-[10px] opacity-50"
        ></div>
        <div
            class="relative left-0 right-0 mt-auto mb-6 w-full px-5 text-center text-sm md:mb-3 lg:mb-5 2xl:pb-2"
        >
            <slot name="text"
                ><span class="text-sm">{{ text }}</span></slot
            >
        </div>
    </div>
</template>

<script lang="ts"></script>

<style>
.linear-gradient-180 {
    background: linear-gradient(180deg, rgba(10, 10, 10, 0) 0%, #030303 69.79%);
}
</style>
