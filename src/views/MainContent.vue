<template>
    <div class="container">
        <BannerComponent />
        <DriverSlide />
        <ChartBox />
        <RecommandVideo />
    </div>
</template>

<script>
import DriverSlide from '../components/DriverSlide.vue'
import ChartBox from '../components/ChartBox.vue'
import RecommandVideo from '../components/RecommandVideo.vue'
import BannerComponent from '../components/Banner.vue'

export default {
    components: {
        ChartBox, RecommandVideo, DriverSlide, BannerComponent
    },
    created() {
        this.$store.dispatch('getCSDriversAPI').then(() => {
            this.$store.dispatch('getCSConstructorsAPI');
        });
    }
}
</script>

<style scoped>
.container {
    width: 75vw;
    height: auto;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

@media screen and (max-width: 768px) {
    .container {
        width: 95vw;
    }
}
</style>