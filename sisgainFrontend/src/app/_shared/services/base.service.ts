import { Injectable } from "@angular/core";
import { ResponseObject } from "../models/response.object";

@Injectable()
export class BaseService {

    constructor(){}

    protected handleMap(response: Response) {
        return new ResponseObject(response);
   }
   
}
 