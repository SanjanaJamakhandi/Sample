import { Component } from '@angular/core';

import { FormGroup , FormControl , Validators } from '@angular/forms'
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class feedbackComponent {
    regInfos:any[]=[];
    currentIndex:any;
    isUpdate=false;


  forms = new FormGroup({ 
    firstname:new FormControl(''),
    lastname:new FormControl('',[Validators.required,Validators.minLength(10)]),
    email:new FormControl(''),
    gender:new FormControl(''),
    state:new FormControl(''),
    // isMarried:new FormControl(''),
    country:new FormControl(''),
    Comment:new FormControl('')

  })
feedback: any;
  
  onSubmit(){
    console.log(this.feedback.value)
   

  }
  add(){
    this.regInfos.push(this.feedback.value);
  }
  delete(index:any){
    this.regInfos.splice(index,1);
  
  }
  edit(regInfo:any,index:any){
    this.isUpdate=true;
    this.currentIndex=index;
    this.feedback.setValue(regInfo)

  }
  Update(){
    this.regInfos[this.currentIndex]=this.feedback.value;
    this.isUpdate=false;
  }
}
