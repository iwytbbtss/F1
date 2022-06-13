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
    margin: 50px 200px;
    display: flex;
    flex-wrap: wrap;
}
</style>