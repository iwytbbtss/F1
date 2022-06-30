<template>
    <div id="videos">
        <h2> 추천 동영상</h2>
        <div class="videos_wrap">
            <a v-for="slide in toSlide" :key="slide" :href="videos[index+slide].link" target="_blank">
                <img :src="videos[index+slide].src" alt="">
            </a>
            <button @click="pre" v-show="showPrev" class="prev_btn">
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </button>
            <button @click="next" v-show="showNext" class="next_btn">
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </button>
        </div>
    </div>
</template>

<script>
import data from '../data.json'

export default {
    name: 'RecommandVideo',
    data: function() {
        return {
            videos: data.videos,
            index: -1,
            toSlide: 0
        }
    },
    methods: {
        pre: function() {
            this.index--;
        },
        next: function() {
            this.index++;
        },
    },
    computed: {
        showPrev() {
            return this.index >= 0 ? true : false;
        },
        showNext() {
            return this.index < this.videos.length - (this.toSlide + 1) ? true : false;
        },
    },
    mounted() {
        this.toSlide = Math.floor(window.innerWidth * 0.75 / 720 + 1)
        window.addEventListener('resize', () => { this.toSlide = Math.floor(window.innerWidth * 0.75 / 720 + 1) });
    }
}
</script>

<style scoped>
#videos {
    position: relative;
    width: 100%;
    height: auto;
    margin: 30px 0;
}

h2 {
    text-align: start;
    width: 90%;
    height: 60px;
    margin: auto;
}

.videos_wrap {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
}

a {
    width: auto;
    height: auto;
}

img {
    width: 360px;
    height: 240px;
    margin: 0;
}

img:hover {
    filter: brightness(45%);
}

button {
    z-index: 100;
    border: none;
    border-radius: 3px;
    background-color: darkgray;
    padding: 5px 8px;
    color: dimgray;
    font-size: 25px;
}

button:hover {
    background-color: gray;
    color: white;
}

.prev_btn {
    position: absolute;
    left: -5%;
    top: 45%;
}

.next_btn {
    position: absolute;
    right: -5%;
    top: 45%;
}
</style>