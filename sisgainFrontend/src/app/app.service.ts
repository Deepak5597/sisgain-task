import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlConfig } from './_shared/config/api.url.config';
import { HeadersConfig } from './_shared/config/headers.config';

@Injectable()
export class AppService {

    constructor(private _http:HttpClient){}

    urlConfig:ApiUrlConfig = new ApiUrlConfig();
    httpOptions:any = new HeadersConfig().httpOptions;

    fetchAllDoctorsData(){
        return this._http.get(this.urlConfig.getDoctorsResourceUrl(),{headers:this.httpOptions.headers,responseType:"json"});
    }

    addNewDoctor(payload:any){
        return this._http.post(this.urlConfig.getDoctorsResourceUrl(),payload,{headers:this.httpOptions.headers,responseType:"json"});
    }
}