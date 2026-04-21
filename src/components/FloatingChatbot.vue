<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick, computed } from 'vue';
import axios from 'axios';
import { trackGTMEvent } from "@/utils/gtm";

import { Splide, SplideSlide } from "@splidejs/vue-splide";
import FirstStep from "@/components/formSteps/firstStep.vue";
import FinalStep from "@/components/formSteps/finalStep.vue";

// State
const isOpen = ref(false);
const hasOpenedByScroll = ref(false);
const showTooltip = ref(false);
const identifier = ref(1);
const steppage = ref(0);
const actualPath = ref([1, 2, 3, 5, 7, 8, 9]);
const isLoading = ref(false);

const StepsPaths = [
    [1, 2, 3, 5, 7, 8, 9],
    [1, 2, 4, 6, 8, 9],
    [1, 2, 4, 6, 5, 7, 8, 9],
    [1, 2, 4, 8, 9]
];

// Form Data
const goterasHumedadEnDomicilio = ref(null);
const tipoDeConstruccion = ref(null);
const otroTipoDeConstruccion = ref(null);
const productoInteresado = ref([]);
const otroTipodeProductoInteresado = ref(null);
const identificacion = ref(null);
const mantenimientoPreventivo = ref(null);
const dondeRequieresElServicio = ref({
    ubicacion: null,
    calle: null,
    noExterior: null,
    noInterior: null,
    colonia: null,
    referencias: null,
    fullfilled: false
});
const datosDelCliente = ref({
    nombre: null,
    telefono: null,
    correo: null,
    fechaCita: null,
    fullfilled: false
});

// Chat History
const messages = ref([]);
const chatContainer = ref(null);

const scrollToBottom = async () => {
    await nextTick();
    if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
};

const toggleChat = () => {
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
        scrollToBottom();
        showTooltip.value = false;
    } else {
        resetChat();
    }
};

const resetChat = () => {
    // Reset Navigation
    identifier.value = 1;
    steppage.value = 0;
    actualPath.value = StepsPaths[0];
    
    // Reset Form Data
    goterasHumedadEnDomicilio.value = null;
    tipoDeConstruccion.value = null;
    otroTipoDeConstruccion.value = null;
    productoInteresado.value = [];
    otroTipodeProductoInteresado.value = null;
    identificacion.value = null;
    mantenimientoPreventivo.value = null;
    
    dondeRequieresElServicio.value = {
        ubicacion: null,
        calle: null,
        noExterior: null,
        noInterior: null,
        colonia: null,
        referencias: null,
        fullfilled: false
    };
    
    datosDelCliente.value = {
        nombre: null,
        telefono: null,
        correo: null,
        fechaCita: null,
        fullfilled: false
    };

    // Reset Messages and Restart
    messages.value = [];
    processBotStep(1);
};

const pushBotMessage = (type, content) => {
    messages.value.push({ role: 'bot', type, content });
    scrollToBottom();
};

const pushUserMessage = (text) => {
    messages.value.push({ role: 'user', type: 'text', content: text });
    scrollToBottom();
};

const nextStep = (selectionText) => {
    if (selectionText) pushUserMessage(selectionText);
    
    // Path branching logic (Mirroring StepperFormPage.vue:524)
    if (identifier.value === 2) {
        if (goterasHumedadEnDomicilio.value === "Si") {
            actualPath.value = StepsPaths[0]; // Path: Goteras Si
        } else {
            actualPath.value = StepsPaths[1]; // Switch to default Path 1 (to hit Step 4 next)
        }
    }
    
    if (identifier.value === 4) {
        if (identificacion.value === "Particular") {
            // Stay in Path 1 for now (to hit Step 6 next)
            actualPath.value = StepsPaths[1];
        } else {
            actualPath.value = StepsPaths[3]; // Switch to Path 3 (Constructor)
        }
    }
    
    if (identifier.value === 6) {
        if (mantenimientoPreventivo.value === "Si") {
            actualPath.value = StepsPaths[2]; // Switch to Path 2 (Mantenimiento Si)
        } else {
            actualPath.value = StepsPaths[1]; // Stay in Path 1 (Mantenimiento No)
        }
    }
    
    steppage.value++;
    if (steppage.value < actualPath.value.length) {
        identifier.value = actualPath.value[steppage.value];
    }
};

watch(identifier, (newId) => {
    processBotStep(newId);
});

const processBotStep = (id) => {
    switch (id) {
        case 1: pushBotMessage('component', 'first'); break;
        case 2: pushBotMessage('text', '¿Tienes problemas de goteras o humedad en tu domicilio?'); break;
        case 3: pushBotMessage('text', 'Selecciona el tipo de construcción donde tienes este inconveniente'); break;
        case 4: pushBotMessage('text', 'Te identificas como:'); break;
        case 5:
            pushBotMessage('text', 'Productos que podrían interesarte (selecciona una opción)');
            pushBotMessage('component', 'products');
            break;
        case 6: pushBotMessage('text', '¿Requieres mantenimiento?'); break;
        case 7:
            pushBotMessage('text', '¿En dónde requieres el servicio?');
            pushBotMessage('component', 'address');
            break;
        case 8:
            pushBotMessage('text', 'Proporcionanos tus datos para finalizar');
            pushBotMessage('component', 'address'); // Reuse or skip scheduler
            break;
        case 9: pushBotMessage('component', 'final'); break;
    }
};

const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPos = window.scrollY + clientHeight;
    const progress = scrollPos / scrollHeight;

    if (progress > 0.7 && !hasOpenedByScroll.value && !isOpen.value) {
        hasOpenedByScroll.value = true;
        isOpen.value = true;
        showTooltip.value = false;
        scrollToBottom();
    }
};

onMounted(() => {
    processBotStep(identifier.value);
    
    setTimeout(() => {
        if (!isOpen.value) showTooltip.value = true;
    }, 2000);

    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const selectProduct = (prod) => {
    if (productoInteresado.value.includes(prod)) {
        productoInteresado.value = productoInteresado.value.filter(p => p !== prod);
    } else {
        productoInteresado.value.push(prod);
    }
};

const sendForm = async () => {
    isLoading.value = true;
    try {
        const response = await axios.post("https://api.web3forms.com/submit", {
            access_key: "46628c94-552b-46ef-8312-95e72743eca0",
            subject: `Nuevo Presupuesto Chat RYCZA: ${datosDelCliente.value.nombre}`,
            from_name: datosDelCliente.value.nombre,
            Nombre: datosDelCliente.value.nombre,
            Telefono: datosDelCliente.value.telefono,
            Correo: datosDelCliente.value.correo,
            "Goteras o Humedad": goterasHumedadEnDomicilio.value,
            "Tipo de Construcción": tipoDeConstruccion.value === 'Otro' ? otroTipoDeConstruccion.value : tipoDeConstruccion.value,
            Identificación: identificacion.value,
            "Productos de Interés": productoInteresado.value.join(", ") + (otroTipodeProductoInteresado.value ? `, ${otroTipodeProductoInteresado.value}` : ""),
            "Mantenimiento Preventivo": mantenimientoPreventivo.value,
            Ubicación: dondeRequieresElServicio.value.ubicacion,
            Colonia: dondeRequieresElServicio.value.colonia,
            Calle: dondeRequieresElServicio.value.calle,
            "No. Exterior": dondeRequieresElServicio.value.noExterior,
            "No. Interior": dondeRequieresElServicio.value.noInterior,
            Referencias: dondeRequieresElServicio.value.referencias,
        });

        if (response.status === 200) {
            console.log("Chatbot form successfully submitted to Web3Forms");
            trackGTMEvent('form_submission_success', {
                category: 'conversion',
                label: 'Chatbot Form'
            });
        }
    } catch (error) {
        console.error("Error submitting chatbot form", error);
        trackGTMEvent('form_submission_error', {
            category: 'error',
            label: 'Chatbot Form'
        });
    } finally {
        isLoading.value = false;
        nextStep('Datos enviados');
    }
};

const formattedWhatsappUrl = computed(() => {
    const baseUrl = "https://wa.me/529983717937?text=";
    const constructionType = tipoDeConstruccion.value === 'Otro' ? otroTipoDeConstruccion.value : tipoDeConstruccion.value;
    const products = [...productoInteresado.value];
    if (otroTipodeProductoInteresado.value) products.push(otroTipodeProductoInteresado.value);
    
    const message = `*Nuevo Presupuesto Rycza (Chat)*\n` +
        `--------------------------\n` +
        `*Nombre:* ${datosDelCliente.value.nombre || 'N/A'}\n` +
        `*Email:* ${datosDelCliente.value.correo || 'N/A'}\n` +
        `*Teléfono:* ${datosDelCliente.value.telefono || 'N/A'}\n` +
        `*Problema:* ${goterasHumedadEnDomicilio.value || 'N/A'}\n` +
        `*Tipo de construcción:* ${constructionType || 'N/A'}\n` +
        `*Interés:* ${products.join(', ') || 'N/A'}\n` +
        `*Ubicación:* ${dondeRequieresElServicio.value.calle || ''}, ${dondeRequieresElServicio.value.colonia || ''}, ${dondeRequieresElServicio.value.ubicacion || ''}\n` +
        `*Mantenimiento:* ${mantenimientoPreventivo.value || 'N/A'}`;
    
    return baseUrl + encodeURIComponent(message);
});
</script>

<template>
    <div class="fixed bottom-4 right-4 z-[10000] flex flex-col items-end pointer-events-none sm:right-6 md:right-8">
        
        <!-- Chat Window -->
        <Transition name="sprout">
            <div v-if="isOpen" class="pointer-events-auto bg-white w-[90vw] md:w-[350px] max-h-[70vh] md:max-h-[550px] rounded-2xl shadow-3xl flex flex-col overflow-hidden border border-gray-100 mb-4 origin-bottom-right">
                <!-- Header -->
                <div class="bg-gradient-to-r from-blue to-[#1475E0]/80 p-4 flex items-center gap-3">
                    <div class="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5z" />
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-white font-bold leading-none">Asistente Rycza</h3>
                        <span class="inline-flex items-center gap-1.5 mt-1">
                            <span class="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
                            <p class="text-blue-100 text-[10px] uppercase font-bold tracking-wider">En línea</p>
                        </span>
                    </div>
                    <button @click="toggleChat" class="ml-auto p-2 hover:bg-white/10 rounded-lg transition-colors group">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white/70 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Messages area -->
                <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 flex flex-col">
                    <div v-for="(msg, idx) in messages" :key="idx" 
                        class="flex flex-col animate-fade-in"
                        :class="msg.role === 'bot' ? 'items-start' : 'items-end'">
                        
                        <div v-if="msg.type === 'text'" 
                            class="max-w-[85%] p-3 rounded-2xl text-sm shadow-sm"
                            :class="msg.role === 'bot' ? 'bg-white text-gray-800 rounded-tl-none border-l-4 border-blue' : 'bg-blue text-white rounded-tr-none'">
                            {{ msg.content }}
                        </div>

                        <div v-else class="w-full">
                            <div v-if="msg.content === 'first'" class="bg-white border rounded-xl overflow-hidden p-2 shadow-sm">
                                <FirstStep :isChatMode="true" @nextStep="nextStep('¡Comencemos!')" />
                            </div>

                            <div v-if="msg.content === 'products'" class="space-y-3 mt-2">
                                <div class="grid grid-cols-1 gap-2">
                                    <div v-for="p in ['acrilicos', 'prefabricados', 'cementicios', 'Termo reductores']" :key="p"
                                        @click="selectProduct(p)"
                                        class="p-3 border rounded-xl flex items-center justify-between cursor-pointer transition-all hover:border-blue group"
                                        :class="productoInteresado.includes(p) ? 'border-blue bg-blue/5' : 'bg-white'">
                                        <span class="uppercase text-xs font-bold transition-colors" :class="productoInteresado.includes(p) ? 'text-blue' : 'text-gray-600'">{{p}}</span>
                                        <div v-if="productoInteresado.includes(p)" class="text-blue">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <button @click="nextStep('He seleccionado mis productos')" class="w-full bg-orange hover:bg-orange/90 text-white py-3 rounded-xl text-sm font-bold shadow-md transform active:scale-95 transition-all">
                                    Confirmar Selección
                                </button>
                            </div>

                            <div v-if="msg.content === 'address'" class="bg-white border rounded-xl p-4 space-y-3 shadow-sm">
                                <input v-model="datosDelCliente.nombre" placeholder="👤 Nombre Completo" class="w-full border-gray-200 p-2.5 rounded-lg text-sm focus:ring-2 focus:ring-blue focus:border-transparent outline-none"/>
                                <input v-model="datosDelCliente.telefono" placeholder="📞 Teléfono" class="w-full border-gray-200 p-2.5 rounded-lg text-sm focus:ring-2 focus:ring-blue focus:border-transparent outline-none"/>
                                <input v-model="datosDelCliente.correo" placeholder="📧 Correo" class="w-full border-gray-200 p-2.5 rounded-lg text-sm focus:ring-2 focus:ring-blue focus:border-transparent outline-none"/>
                                <button @click="sendForm()" :disabled="isLoading" class="w-full bg-orange hover:bg-orange/90 text-white py-3 rounded-xl text-sm font-bold shadow-md transition-all disabled:opacity-50">
                                    {{ isLoading ? 'Enviando...' : 'Finalizar y Contactar' }}
                                </button>
                            </div>

                            <div v-if="msg.content === 'final'" class="flex flex-col items-center py-4">
                                <FinalStep :isChatMode="true" :whatsapp-url="formattedWhatsappUrl" />
                            </div>
                        </div>
                    </div>

                    <!-- Quick Replies -->
                    <div v-if="messages.length > 0 && messages[messages.length-1].role === 'bot'" class="flex flex-wrap gap-2 mt-2">
                        <template v-if="identifier === 2">
                            <button @click="goterasHumedadEnDomicilio = 'Si'; nextStep('Si')" class="px-6 py-2 rounded-full border-2 border-blue text-blue font-bold text-xs hover:bg-blue hover:text-white transition-all transform active:scale-90">SÍ</button>
                            <button @click="goterasHumedadEnDomicilio = 'No'; nextStep('No')" class="px-6 py-2 rounded-full border-2 border-blue text-blue font-bold text-xs hover:bg-blue hover:text-white transition-all transform active:scale-90">NO</button>
                        </template>
                        <template v-if="identifier === 3">
                            <button v-for="opt in ['Casa 1 Nivel', 'Casa 2 Niveles', 'Departamento', 'Edificio']" :key="opt"
                                @click="tipoDeConstruccion = opt; nextStep(opt)" class="px-4 py-2 rounded-full border-2 border-blue text-blue font-bold text-xs hover:bg-blue hover:text-white transition-all">
                                {{opt}}
                            </button>
                        </template>
                        <template v-if="identifier === 4">
                            <button @click="identificacion = 'Particular'; nextStep('Particular')" class="px-4 py-2 rounded-full border-2 border-blue text-blue font-bold text-xs hover:bg-blue hover:text-white transition-all">PARTICULAR</button>
                            <button @click="identificacion = 'Constructor'; nextStep('Encargado Mantenimiento')" class="px-4 py-2 rounded-full border-2 border-blue text-blue font-bold text-xs hover:bg-blue hover:text-white transition-all uppercase">Constructor</button>
                        </template>
                        <template v-if="identifier === 6">
                            <button @click="mantenimientoPreventivo = 'Si'; nextStep('Si')" class="px-6 py-2 rounded-full border-2 border-blue text-blue font-bold text-xs hover:bg-blue hover:text-white transition-all">SÍ</button>
                            <button @click="mantenimientoPreventivo = 'No'; nextStep('No')" class="px-6 py-2 rounded-full border-2 border-blue text-blue font-bold text-xs hover:bg-blue hover:text-white transition-all">NO</button>
                        </template>
                    </div>
                </div>

                <!-- Footer -->
                <div class="bg-white p-2 border-t flex justify-center">
                    <span class="text-[9px] text-gray-300 uppercase tracking-widest font-medium">Potenciado por Rycza AI</span>
                </div>
            </div>
        </Transition>

        <!-- FAB with Pulse & Tooltip -->
        <div class="relative flex flex-col items-end">
            <!-- Tooltip -->
            <Transition name="bounce">
                <div v-if="showTooltip && !isOpen" class="hidden md:flex pointer-events-auto bg-white border-2 border-blue px-4 py-2 rounded-xl mb-4 mr-2 shadow-lg relative max-w-[250px]">
                    <p class="text-xs font-bold text-blue leading-tight text-center">
                        ¿Necesitas una cotización? Te ayudo aquí 👷♂️
                    </p>
                    <div class="absolute -bottom-2 right-4 w-4 h-4 bg-white border-r-2 border-b-2 border-blue transform rotate-45"></div>
                </div>
            </Transition>

            <button
                @click="toggleChat"
                class="pointer-events-auto h-16 w-16 bg-gradient-to-br from-blue to-[#1475E0] rounded-full shadow-3xl flex items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95 group relative ring-offset-2 ring-offset-transparent"
                :class="{ 'pulse-active': !isOpen }"
            >
                <div class="transition-all duration-500 transform" :class="{ 'rotate-180 scale-0 opacity-0': isOpen }">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5z" />
                    </svg>
                </div>
                <div class="absolute transition-all duration-500 transform scale-0 opacity-0" :class="{ 'rotate-0 scale-100 opacity-100': isOpen }">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </button>
        </div>
    </div>
</template>

<style scoped>
.pulse-active {
    animation: custom-pulse 2s infinite;
}

@keyframes custom-pulse {
    0% { box-shadow: 0 0 0 0 rgba(20, 117, 224, 0.7); }
    70% { box-shadow: 0 0 0 15px rgba(20, 117, 224, 0); }
    100% { box-shadow: 0 0 0 0 rgba(20, 117, 224, 0); }
}

/* Tooltip Bounce */
.bounce-enter-active {
    animation: bounce-in 0.8s backwards;
}
.bounce-leave-active {
    animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); opacity: 1; }
}

/* Sprout Animation */
.sprout-enter-active {
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.sprout-leave-active {
    transition: all 0.3s ease-in;
}
.sprout-enter-from {
    transform: scale(0.2) translateY(50px);
    opacity: 0;
}

@keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
    animation: fade-in 0.4s ease-out forwards;
}

/* Scrollbar styling */
div::-webkit-scrollbar { width: 5px; }
div::-webkit-scrollbar-track { background: transparent; }
div::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 10px; }
div::-webkit-scrollbar-thumb:hover { background: #94A3B8; }

.shadow-3xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(20, 117, 224, 0.1);
}
</style>
