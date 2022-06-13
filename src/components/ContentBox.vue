<template>
    <div id="content">
        <NewsContainer/>
        <DriverSlide/>
    </div>
</template>

<script>
import NewsContainer from './NewsContainer.vue'
import DriverSlide from './DriverSlide.vue'

export default {
    name: 'ContentBox',
    components: {
        NewsContainer,DriverSlide
    }
}
</script>

<style scoped>
#content {
    margin: 50px 200px;
    display: flex;
    flex-wrap: wrap;
}
</style>