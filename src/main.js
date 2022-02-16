import Vue from 'vue'
import injector from 'vue-inject';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(injector);

new Vue({
    render: h => h(App),
}).$mount('#app')

// require('./constants');
// // require('./services/ExplorerService');

// function explorerService(axios) {
//     this.getCats = function() {
//         try {
//             axios.defaults.headers.common["x-api-key"] = "45365c9b-c2bf-4c89-9a13-f0d64bfdc1e5";
//             var queryParams = {
//                 limit: 2,
//                 order: "RANDOM",
//                 page: 100,
//             };
//             let response = axios.get("https://api.thecatapi.com/v1/images/search", { params: queryParams });
//             return response.data;
//         } catch (err) {
//             console.log(err);
//             throw (err);
//         }
//     };
// }
// injector.service('explorerService', ['axios'], explorerService);