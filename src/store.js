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
        SSDrivers: {},
        SSConstructors: [],
        recommandVideos: data.videos,
        currentSeason: '2022'
    },
    getters: {
        getCSDrivers(state) {
            return state.CSDrivers
        },
        getCSConstructors(state) {
            return state.CSConstructors
        },
        getSSDrivers(state) {
            return state.SSDrivers
        },
        getSSConstructors(state) {
            return state.SSConstructors
        },
        getRecVideos(state) {
            return state.recommandVideos
        },
        getCurrentSeason(state) {
            return state.currentSeason
        }
    },
    mutations: {
        setCSDrivers(state, payload) {
            state.CSDrivers = payload;
            console.log(payload);
        },
        setCSConstructors(state, payload) {
            state.CSConstructors = payload;
        },
        setSSDrivers(state, payload) {
            state.SSDrivers[payload.year] = payload.data;
        },
        setSSConstructors(state, payload) {
            state.SSConstructors[payload.year] = payload.data;
        },
    },
    actions: {
        getCSDriversAPI({ commit }) {
            const option={
                method: 'GET',
                url: 'https://api-formula-1.p.rapidapi.com/rankings/drivers',
                params: {season: '2022'},
                headers: {
                    'X-RapidAPI-Key': process.env.VUE_APP_F1_API_KEY,
                    'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
                }
            }
            axios.request(option)
                .then((res) => {
                    commit('setCSDrivers', res.data.response);
                    commit('setSSDrivers', { year: '2022', data: res.data.response });
                })
                .catch((err) => { console.error(err) });
        },
        getCSConstructorsAPI({ commit }) {
            const option={
                method: 'GET',
                url: 'https://api-formula-1.p.rapidapi.com/rankings/teams',
                params: {season: '2022'},
                headers: {
                    'X-RapidAPI-Key': process.env.VUE_APP_F1_API_KEY,
                    'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
                }
            }
            axios.request(option)
                .then((res) => {
                    commit('setCSConstructors', res.data.response);
                    commit('setSSDrivers', { year: '2022', data: res.data.response });
                })
                .catch((err) => { console.error(err) });
        },
        getSSDriversAPI({ commit }, payload) {
            const option={
                method: 'GET',
                url: 'https://api-formula-1.p.rapidapi.com/rankings/drivers',
                params: {season: payload},
                headers: {
                    'X-RapidAPI-Key': process.env.VUE_APP_F1_API_KEY,
                    'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
                }
            }
            axios.request(option)
                .then((res) => { commit('setSSDrivers', { year: payload, data: res.data.response }); })
                .catch((err) => { console.error(err) });
        },
        getSSConstructorsAPI({ commit }, payload) {
            const option={
                method: 'GET',
                url: 'https://api-formula-1.p.rapidapi.com/rankings/teams',
                params: {season: payload},
                headers: {
                    'X-RapidAPI-Key': process.env.VUE_APP_F1_API_KEY,
                    'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
                }
            }
            axios.request(option)
                .then((res) => { commit('setSSConstructors', { year: payload, data: res.data.response }); })
                .catch((err) => { console.error(err) });
        },
    }
})