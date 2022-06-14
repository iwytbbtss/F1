<template>
    <div class="container">
        <ContentBox />
        <DriverSlide />
        <ChartBox />
        <RecommandVideo />
    </div>
</template>

<script>
import ContentBox from '../components/ContentBox.vue'
import DriverSlide from '../components/DriverSlide.vue'
import ChartBox from '../components/ChartBox.vue'
import RecommandVideo from '../components/RecommandVideo.vue'

export default {
    components: {
        ContentBox, ChartBox, RecommandVideo, DriverSlide
    },
    created() {
    this.$store.dispatch('getCSDriversAPI');
    this.$store.dispatch('getCSConstructorsAPI')
    }
}
</script>

<style scoped>
.container {
    width: 75vw;
    height: auto;
    margin: auto;
    margin-top: 30px;
}

@media screen and (max-width: 768px) {
    .container {
        width: 95vw;
    }
}
</style>