import injector from 'vue-inject';
import axios from "axios";
import { createDecipheriv } from 'crypto';

export default {
    name: 'Card',
    props: {
      cat: Object
    },
    data(){
      return {
      };
    },
    methods: {
      catCliecked() {
        console.log('Card.catCliecked');
        this.$emit('clicked-cat', this.cat.id);
      }
    },
    computed: {
      
    }
  }