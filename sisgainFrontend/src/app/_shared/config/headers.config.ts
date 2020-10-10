import { HttpHeaders } from "@angular/common/http";

export class HeadersConfig{

    public httpOptions :any = { 
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin":"*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }),

        multipartHeaders: new HttpHeaders({
          'Accept': 'application/json',
          "Access-Control-Allow-Origin":"*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }), 
      };

}