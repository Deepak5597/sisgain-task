import { Component, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from './_shared/services/message.service';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sisgainFrontend';
  currentCard:number=0;

  userForm:FormGroup;

  constructor(private _eleRef:ElementRef, private _fb:FormBuilder,private _spinner:NgxSpinnerService,private _messageService:MessageService,private _appService:AppService){}

  users:any=[];

  public showCommonModal:boolean;
  public modalMessage:any;
  public isErrorMessage:boolean;
  public currentRole:string;
  ngOnInit(){
    
    this.getAllUsers();
      this.sortingCriteria = 'sortingCriteria';

      this.userForm = this._fb.group({
        doctorName:this._fb.control(''),
        role:this._fb.control(''),
        contact:this._fb.control(''),
        gender:this._fb.control(''),
        email:this._fb.control(''),
        address:this._fb.control(''),
        institute:this._fb.control(''),
        imgName:this._fb.control('')
      });

      this.isErrorMessage =false;
      this.showCommonModal = false;
      this._messageService.messageObject.subscribe(
        (msgObject:any)=>{
          this.modalMessage = <any>msgObject.messageDetails;
          this.showCommonModal = msgObject.showMessage;
          if(this.showCommonModal){
            if(this.modalMessage.hasOwnProperty('messageType')){
              if(this.modalMessage.messageType === 'exception' || this.modalMessage.messageType === 'error' || this.modalMessage.messageType === 'client_error'|| this.modalMessage.messageType === 'invalid_route_error'){
                  this.isErrorMessage = true;
                  
              }else{
                this.isErrorMessage = false;
              }
              this._eleRef.nativeElement.querySelector("#displayFlashBtn").click();
            }else{
              this.isErrorMessage = true;
              this.modalMessage = {
                messageType:'error',
                message:'Something went wrong.',
                messageCode:'500'
              }
            }
            if(this.showCommonModal){
                setTimeout(()=>{
                  this.showCommonModal = false;
                  this._eleRef.nativeElement.querySelector("#displayFlashCancleBtn").click();
               },3000);
            }
          }
       
        }
      );
  }

  filteredUsers:any[]=[];
  sortingCriteria:string;
  sortArrayInAcending(key:string){
    console.log(key)
    let data = this.users;
    const sortedData = data.sort(function(a, b){
                    return a[key] - b[key];
        });
    this.filteredUsers = sortedData;
  }

  searchText:string;
  filterList(){
      let tmpList:any[]=[];
      let lSText = this.searchText.toLowerCase();
      this.users.forEach(indUser => {
        if(indUser.doctorName.toLowerCase().indexOf(lSText) != -1 || indUser.role.toLowerCase().indexOf(lSText) != -1 || indUser.contact.toLowerCase().indexOf(lSText) != -1 || indUser.gender.toLowerCase().indexOf(lSText) != -1 || indUser.email.toLowerCase().indexOf(lSText) != -1 || indUser.address.toLowerCase().indexOf(lSText) != -1){
          tmpList.push(indUser);
        }
      });
      this.filteredUsers = tmpList;
  }

  addUser(){
    console.log(this.userForm.value)
    this._spinner.show();
    let payload = this.userForm.value;
    this._appService.addNewDoctor(payload).subscribe(
        (res)=>{
           this._spinner.hide();
            this._messageService.showCommonMessage(res);
            this.getAllUsers();
        },
        (err)=>{
          this._spinner.hide();
           this._messageService.showCommonMessage(err);
        }
    );
  }

  getAllUsers(){
    this._appService.fetchAllDoctorsData().subscribe(
      (res:any)=>{
          this.users = res.data;
          this.filteredUsers = this.users;
          this.getUniqueInstitutes();
      },
      (err)=>{
         this._messageService.showCommonMessage(err);
      }
  );
  }

  filterText:string;
  changeRole(keyName:string){
    let tmpList:any=[];
    this.users.forEach(indUser => {
      if(indUser[keyName].toLowerCase().indexOf(this.filterText.toLowerCase()) != -1){
        tmpList.push(indUser);
      }
    });
    this.filteredUsers = tmpList;
  }

  resetAll(){
    this.filterText= '';
    this.searchText = '';
    this.sortingCriteria = '';
    this.filteredUsers = this.users;
  }

  instituteData:any[]=[];
  getUniqueInstitutes(){
    let tmpinsarr:any[]=[];
    this.users.forEach(element => {
      if(tmpinsarr.indexOf(element.institute) == -1){
        tmpinsarr.push(element.institute);
      }
      this.instituteData = tmpinsarr;
    });
  }
}
