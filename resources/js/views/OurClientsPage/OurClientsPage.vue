<template>
  <main>
    <FirstBannerClients></FirstBannerClients>
    <ClientsOpinions></ClientsOpinions>
    <QualityMaterials></QualityMaterials>
    <OurJob></OurJob>
    <KnowOurPortfolio></KnowOurPortfolio>
    <BestFormula></BestFormula>
    <OurClientSlider></OurClientSlider>
    <ContactUs></ContactUs>
  </main>
</template>
<script>
import FirstBannerClients from "../../components/OurClients/firstBannerClients.vue";
import ClientsOpinions from "../../components/OurClients/clientsOpinions.vue";
import QualityMaterials from "@/components/OurClients/qualityMaterials.vue";
import OurJob from "@/components/OurClients/ourJob.vue";
import KnowOurPortfolio from "@/components/OurClients/knowOurPortfolio.vue";
import ContactUs from "@/components/Landing/contactUs.vue";
import BestFormula from "../../components/OurClients/bestFormula.vue";
import OurClientSlider from "@/components/Sliders/OurClientSlider.vue";
export default {
    data() {
        return {};
    },
    components: { FirstBannerClients, ClientsOpinions, QualityMaterials, OurJob, KnowOurPortfolio, ContactUs, BestFormula, OurClientSlider }
}
</script>
