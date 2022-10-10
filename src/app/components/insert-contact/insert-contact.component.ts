import { Component, OnInit } from '@angular/core';
import { EndpointService } from 'src/app/endpoint.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators,  } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-insert-contact',
  templateUrl: './insert-contact.component.html',
  styleUrls: ['./insert-contact.component.css']
})
export class InsertContactComponent implements OnInit {
button:boolean = false;
  sendForm!: FormGroup;
  fullname:any;
  namearray:string [] = [];
  constructor(private _EndpointService:EndpointService,private _FormBuilder:FormBuilder, private _Router:Router) { }

  ngOnInit(): void {
  this.initiate();
  }

  initiate(){
    this.sendForm = this._FormBuilder.group({
      firstName: ['', Validators.required],
      middleName: [this.namearray[1], Validators.required],
      lastName: [this.namearray[2], Validators.required],
      description : ['', Validators.required],
      email : ['', [Validators.required, Validators.email] ],
      others : ['anything'],
     
    });
  }
  get fc() {
    return this.sendForm.controls;
  }


  onSubmit(){
    this.button = true;
     this.namearray = this.fullname.split(" ");
     console.log(this.namearray);
    this.sendForm.value.firstName = this.namearray[0];
    this.sendForm.value.middleName = this.namearray[1];
    this.sendForm.value.lastName = this.namearray[2];
    console.log(this.sendForm.value);
   this._EndpointService.senddata(this.sendForm.value).subscribe((res) => {
  console.log(this.sendForm.value);
  console.log(this.sendForm.value);
  Swal.fire({
    icon: "success",
    title: "تم الارسال بنجاح",
    showConfirmButton: false,
    timer: 1500,
  });
  this.sendForm.reset();
  this.button = false;
},(err) => {
  console.log('their is a problem ');
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text:err.message    
  })
  this.button = false;
},() => {
  console.log('completed');
})
  }
}
