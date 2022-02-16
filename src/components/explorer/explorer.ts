import injector from 'vue-inject';
import axios from "axios";
import { createDecipheriv } from 'crypto';
import Card from '../card/card.vue';
// import explorerService from '../../services/ExplorerService.ts'

function ExplorerService(axios) {
  this.getCats = async function() {
      try {
          axios.defaults.headers.common["x-api-key"] = "45365c9b-c2bf-4c89-9a13-f0d64bfdc1e5";
          var queryParams = {
              limit: 2,
              order: "RANDOM",
              page: 100,
          };
          let response = await axios.get("https://api.thecatapi.com/v1/images/search", { params: queryParams });
          console.log(response);
          return response.data;
      } catch (err) {
          console.log(err);
          throw (err);
      }
  };

  this.getCatsByBreed = async function(breed_ids) {
      try {
          axios.defaults.headers.common["x-api-key"] = "45365c9b-c2bf-4c89-9a13-f0d64bfdc1e5";
          var queryParams = {
              limit: 2,
              order: "RANDOM",
              page: 100,
              breed_ids
          };
          let response = await axios.get("https://api.thecatapi.com/v1/images/search", { params: queryParams });
          console.log(response);
          return response.data;
      } catch (err) {
          console.log(err);
          throw (err);
      }
  };

  this.getCatBreeds = async function() {
    try {
      axios.defaults.headers.common["x-api-key"] = "45365c9b-c2bf-4c89-9a13-f0d64bfdc1e5";
      let response = await axios.get("https://api.thecatapi.com/v1/breeds");
      return response.data;
  } catch (err) {
      console.log(err);
      throw (err);
  }
  }
}

var explorerService = new ExplorerService(axios);

export default {
    name: 'Exporter',
    // dependencies : 'explorerService',
    props: {
      msg: String
    },
    components: {
      Card
    },
    data(){
      return {
        cats : null,
        searchTerm: '',
        catBreeds: [],
        breedName: ''
      };
    },
    methods: {
      async breedSelected(breedName) {
        this.cats = await explorerService.getCatsByBreed(breedName);
        this.breedName = breedName; 
      },
      async changeCat(catId) {
        console.log(catId);
        if(this.breedName !== '') {
          const newCat = (await explorerService.getCatsByBreed(this.breedName))[0];
          const indexOfReplaceCat = this.cats.findIndex(cat => cat.id === catId);
          let newCats = this.cats;
          newCats[indexOfReplaceCat] = newCat;
          this.cats = newCats;
        }
      }
    },
    computed: {
      filteredData() {
          return this.catBreeds.filter((item) => item.id.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0);
      }
    },
    async created() {
      this.catBreeds = await explorerService.getCatBreeds();
    },
    async mounted() {
      console.log(explorerService);
      this.cats = await explorerService.getCats(); 
      this.catBreeds = await explorerService.getCatBreeds();
    }
  }