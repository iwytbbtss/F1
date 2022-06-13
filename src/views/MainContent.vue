<template>
    <div>
        <ContentBox/>
        <DriverSlide />
        <ChartBox/>
        <RecommandVideo/>
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