import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'axios-vue'
import data from './data.json'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
    state: {
        CSDrivers: [],
        CSConstructors: [],
        recommandVideos: data.videos
    },
    getters: {
        getCSDrivers(state) {
            return state.CSDrivers
        },
        getCSConstructors(state) {
            return state.CSConstructors
        },
        getRecVideos(state) {
            return state.recommandVideos
        }
    },
    mutations: {
        setCSDrivers(state, payload) {
            state.CSDrivers = payload;
        },
        setCSConstructors(state, payload) {
            state.CSConstructors = payload
        }
    },
    actions: {
        getCSDriversAPI({ commit }) {
            const option={
                method: 'GET',
                url: 'https://api-formula-1.p.rapidapi.com/rankings/drivers',
                params: {season: '2022'},
                headers: {
                    'X-RapidAPI-Key': 'eefb5dd36cmsh999b017f81b07dfp16ea22jsnc076742f1c8a',
                    'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
                }
            }
            axios.request(option)
                .then((res) => { commit('setCSDrivers', res.data.response); })
                .catch((err) => { console.error(err) });
        },
        getCSConstructorsAPI({ commit }) {
            const option={
                method: 'GET',
                url: 'https://api-formula-1.p.rapidapi.com/rankings/teams',
                params: {season: '2022'},
                headers: {
                    'X-RapidAPI-Key': 'eefb5dd36cmsh999b017f81b07dfp16ea22jsnc076742f1c8a',
                    'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
                }
            }
            axios.request(option)
                .then((res) => { commit('setCSConstructors', res.data.response); })
                .catch((err) => { console.error(err) });
        }
    }
})