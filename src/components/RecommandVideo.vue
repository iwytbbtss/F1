<template>
    <div id="videos">
        <button @click="pre" :class="preBtn"><font-awesome-icon :icon="['fas', 'chevron-left']" /></button>
        <a :href="videos[index].link" target="_blank">
            <img :src="videos[index].src" alt="">
        </a>
        <a :href="videos[index+1].link" target="_blank">
            <img :src="videos[index+1].src" alt="">
        </a>
        <a :href="videos[index+2].link" target="_blank">
            <img :src="videos[index+2].src" alt="">
        </a>
        <button @click="next" :class="nextBtn"><font-awesome-icon :icon="['fas', 'chevron-right']" /></button>
    </div>
</template>

<script>
import data from '../data.json'

export default {
    name: 'RecommandVideo',
    data: function() {
        return {
            videos: data.videos,
            index: 0
        }
    },
    methods: {
        pre: function() {
            this.index--;
        },
        next: function() {
            this.index++;
        }
    },
    computed: {
        preBtn: function() {
            if(this.index<=0)
            {
                return "pre";
            }
            return "";
        },
        nextBtn: function() {
            if(this.index>=this.videos.length-3)
            {
                return "next";
            }
            return "";
        }
    }
}
</script>

<style scoped>
.pre {
    visibility: hidden;
}

.next {
    visibility: hidden;
}

#videos {
    margin: 50px 0;
    width: 100%;
}

#videos a {
    display: inline-block;
    position: relative;
    width: 360px;
    height: 240px;
    margin: 0 20px;
}

#videos a img {
    width: 360px;
    height: 240px;
}

#videos button {
    z-index: 100;
    border: none;
    border-radius: 5px;
    background-color: dimgray;
    padding: 5px 8px;
    opacity: 0.45;
}
</style>