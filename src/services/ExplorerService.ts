import injector from 'vue-inject';
import axios from "axios";

//  interface IQueryParams {
//      limit: number;
//      order: string;
//      page: number;
//  }
//  export interface IData {
//      breeds: any[];
//      id: string;
//      url: string;
//      width: number;
//      height: number;
//  }
//  export interface ICatApiResponse {
//      data: IData[];
//      status: number;
//      statusText: string;
//  }
//  export class CatApiData implements IData {
//      breeds: any[];
//      id: string;
//      url: string;
//      width: number;
//      height: number;
//      constructor() {
//          this.breeds = [];
//          this.id = "";
//          this.url = "";
//          this.width = 0;
//          this.height = 0;
//      }
//      set(data: IData): CatApiData {
//          this.breeds = data.breeds;
//          this.id = data.id;
//          this.url = data.url;
//          this.width = data.width;
//          this.height = data.height;
//          return this;
//      }
//  }
//  export class CatApiDataContainer {
//      data: CatApiData[];
//      constructor() {
//          this.data = [];
//      }
//      set(data: IData[]): CatApiDataContainer {
//          data.map(d => this.data.push(new CatApiData().set(d)));
//          return this;
//      }
//  }

//  export class ExplorerService {
//     getCats = async (): Promise<CatApiDataContainer> => {
//       console.log("test");
//       try{
//         axios.defaults.headers.common["x-api-key"] = "45365c9b-c2bf-4c89-9a13-f0d64bfdc1e5";
  
//         var queryParams: IQueryParams = {
//           limit: 2,
//           order: "RANDOM",
//           page: 100,
//         };
  
//         let response: ICatApiResponse = await axios.get("https://api.thecatapi.com/v1/images/search", { params: queryParams } );
  
//         return new CatApiDataContainer().set(response.data);
  
//       } catch(err) {
//           console.log(err);
//           throw(err);
//       }
//     }
//   }

// var explorerService = new ExplorerService();
// export default explorerService;

// function explorerService(axios) {
//     this.getCats = function(){
//         try {
//             axios.defaults.headers.common["x-api-key"] = "45365c9b-c2bf-4c89-9a13-f0d64bfdc1e5";

//             var queryParams: IQueryParams = {
//                 limit: 2,
//                 order: "RANDOM",
//                 page: 100,
//             };

//             let response: ICatApiResponse = axios.get("https://api.thecatapi.com/v1/images/search", { params: queryParams });

//             return new CatApiDataContainer().set(response.data);

//         } catch (err) {
//             console.log(err);
//             throw (err);
//         }
//     };
// }

// injector.service('explorerService', ['axios'], explorerService);

function ExplorerService(axios) {
    this.getCats = function() {
        try {
            axios.defaults.headers.common["x-api-key"] = "45365c9b-c2bf-4c89-9a13-f0d64bfdc1e5";
            var queryParams = {
                limit: 2,
                order: "RANDOM",
                page: 100,
            };
            let response = axios.get("https://api.thecatapi.com/v1/images/search", { params: queryParams });
            return response.data;
        } catch (err) {
            console.log(err);
            throw (err);
        }
    };
}

var explorerService = new ExplorerService(axios);
export default explorerService;