<template>
  <div>
    <router-view />
    <FloatingSocialButtons/>
    <FloatingChatbot v-if="route.name !== 'Contacto'" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import FloatingSocialButtons from '@/components/FloatingSocialButtons.vue';
import FloatingChatbot from '@/components/FloatingChatbot.vue';

const route = useRoute();
</script>