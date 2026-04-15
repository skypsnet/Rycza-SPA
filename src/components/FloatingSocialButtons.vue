<script setup>
import { ref } from 'vue';

const phone = '9983717937'
const message = 'Hola, me gustaría solicitar una cotización'

const props = defineProps({
  whatsappUrl: {
    type: String,
    default: `https://wa.me/${phone}?text=${message}`
  },
  facebookUrl: {
    type: String,
    default: 'https://www.facebook.com/RYCZAImper/'
  },
  instagramUrl: {
    type: String,
    default: 'https://www.instagram.com/ricardoz.freyssinier/'
  }
});

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <!-- Desktop: Sidebar on the Left -->
    <div class="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-[9999] flex-col gap-2">
        <!-- Instagram -->
        <a :href="instagramUrl" target="_blank" rel="noopener noreferrer"
           class="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white p-3 rounded-r-lg shadow-lg hover:translate-x-2 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <!-- Facebook -->
        <a :href="facebookUrl" target="_blank" rel="noopener noreferrer"
           class="bg-[#1877F2] text-white p-3 rounded-r-lg shadow-lg hover:translate-x-2 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <!-- WhatsApp -->
        <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
           class="bg-[#25D366] text-white p-3 rounded-r-lg shadow-lg hover:translate-x-2 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.51 0 11.841-5.32 11.844-11.85a11.854 11.854 0 00-3.417-8.384"></path></svg>
        </a>
    </div>

    <!-- Mobile: Horizontal Menu to the Left of Chatbot -->
    <div class="md:hidden fixed bottom-4 right-20 z-[9999] flex flex-row-reverse items-center gap-4">
        <!-- Main Button -->
        <button
            @click="toggleMenu"
            class="group relative flex h-16 w-16 items-center justify-center rounded-full bg-blue text-white shadow-3xl transition-all duration-300 active:scale-95 border-2 border-white/20"
            :class="{ 'rotate-45 bg-red-500': isOpen }"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
        </button>

        <!-- Social Buttons Container (Horizontal) -->
        <div 
            class="flex flex-row-reverse gap-4 transition-all duration-300"
            :class="isOpen ? 'translate-x-0 opacity-100 visible' : 'pointer-events-none translate-x-4 opacity-0 invisible'"
        >
            <!-- Instagram -->
            <a :href="instagramUrl" target="_blank" rel="noopener noreferrer"
               class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-md active:scale-90 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <!-- Facebook -->
            <a :href="facebookUrl" target="_blank" rel="noopener noreferrer"
               class="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md active:scale-90 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <!-- WhatsApp -->
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
               class="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md active:scale-90 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.51 0 11.841-5.32 11.844-11.85a11.854 11.854 0 00-3.417-8.384"></path></svg>
            </a>
        </div>
    </div>
</template>

<style scoped>
.shadow-3xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(20, 117, 224, 0.1);
}
</style>
