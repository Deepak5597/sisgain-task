import { environment } from "src/environments/environment";

export class ApiUrlConfig {

    apiHost:string = environment.apiHost;

    getDoctorsResourceUrl():string{
        return this.apiHost + '/doctors'; 
    }
}