<template>
    <div id="content">
        <NewsContainer/>
    </div>
</template>

<script>
import NewsContainer from './NewsContainer.vue'

export default {
    name: 'ContentBox',
    components: {
        NewsContainer
    }
}
</script>

<style scoped>
#content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>