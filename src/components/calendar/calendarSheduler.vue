<template>
  <!-- Calendly link widget begin -->
  <div class="relative text-center">
    <button class="button-form-question button--orange mx-auto" @click="openCalendly">
      Seleccionar fecha y hora
    </button>
  </div>
  <!-- Calendly link widget end -->
</template>
<script>

export default {
  name: 'Calendar',
  data() {
    return {
      calendlyEvent: null,
      calendlyPayload: null,
    }
  },
  props: {
    prefillData: {
      type: Object,
      default: () => ({}),
    },
  },
  created() {

  },
  methods: {
    receiveMessage(event) {
      if (this.isCalendlyEvent(event)) {
        /* 
        console.log("Event name:", event.data.event); */
        this.calendlyEvent = event.data.event;x/* 
        console.log("Event details:", event.data.payload); */
        this.calendlyPayload = event.data.payload;

      }
    }
    , isCalendlyEvent(e) {
      return e.data.event &&
        e.data.event.indexOf('calendly') === 0;
    },
    closeCalendly() {
      Calendly.closePopupWidget();
    },
    openCalendly() {
      Calendly.initPopupWidget({
        url: 'https://calendly.com/impermeabirycza/agendar_asesoria',
        prefill: this.prefillData,
      });
      return false;
    }
  },
  mounted() {
    window.addEventListener('message', this.receiveMessage)
  },
  beforeDestroy() {
    window.removeEventListener('message', this.receiveMessage)
  },
  watch: {
    calendlyEvent(newVal, oldVal) {
      if (newVal) {
        if (newVal == 'calendly.event_scheduled') {
          //remove calendly modal 
          this.closeCalendly(); 
          this.$emit('calendlyEvent', newVal);
        }
      }
    },

  }



}
</script>
