<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'Video'
  },
  aspectRatio: {
    type: String,
    default: '56.25%'
  },
  customClass: {
    type: String,
    default: ''
  },
  iframeClass: {
    type: String,
    default: ''
  },
  iframeStyle: {
    type: Object,
    default: () => ({})
  }
});

const isLoaded = ref(false);
const videoContainer = ref(null);
let observer = null;

// Clean and prepare the Vimeo URL with optimized parameters
const optimizedSrc = computed(() => {
  if (!props.src) return '';
  
  // Create a URL object or use string manipulation to append params
  let url = props.src.replace(/&amp;/g, '&');
  
  // Ensure background mode for seamless performance and autoplay
  const params = [
    'autoplay=1',
    'muted=1',
    'background=1',
    'loop=1',
    'autopause=0'
  ];
  
  params.forEach(param => {
    if (!url.includes(param.split('=')[0])) {
      url += (url.includes('?') ? '&' : '?') + param;
    }
  });

  return url;
});

onMounted(() => {
  // Use Intersection Observer to load only when nearly visible
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isLoaded.value = true;
      if (videoContainer.value) {
        observer.unobserve(videoContainer.value);
      }
    }
  }, {
    rootMargin: '200px 0px', // Start loading 200px before it enters the viewport
    threshold: 0.01
  });

  if (videoContainer.value) {
    observer.observe(videoContainer.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div 
    ref="videoContainer" 
    class="lazy-vimeo-wrapper transition-all duration-700" 
    :class="customClass"
    :style="aspectRatio ? { padding: aspectRatio + ' 0 0 0', position: 'relative', width: '100%' } : { position: 'relative', width: '100%' }"
  >
    <template v-if="isLoaded">
      <iframe
        :src="optimizedSrc"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        class="absolute top-0 left-0 w-full h-full opacity-0 animate-in"
        :class="iframeClass"
        :style="iframeStyle"
        :title="title"
        @load="$event.target.classList.remove('opacity-0')"
      ></iframe>
    </template>
    
    <!-- Pulse Placeholder -->
    <div 
      v-else 
      class="absolute top-0 left-0 w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden"
    >
      <div class="w-12 h-12 border-4 border-blue border-t-transparent rounded-full animate-spin"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
    </div>
  </div>
</template>

<style scoped>
.animate-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>
