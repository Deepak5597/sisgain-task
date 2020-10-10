import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MessageService implements OnInit{

    ngOnInit() {
    }
    
    private currentMessageObject = new BehaviorSubject<any>({
        showMessage:false,
        messageDetails:{}
    });
     messageObject= this.currentMessageObject.asObservable();

    showCommonMessage(msg:any){
        this.currentMessageObject.next(
            { 
                showMessage:true,
                messageDetails:msg
            });
    }
}