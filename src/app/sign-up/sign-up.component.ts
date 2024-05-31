import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  form !: FormGroup;

  constructor(private http : HttpClient,private formbuilder : FormBuilder,private router : Router){}
  ngOnInit(): void {
    this.initiateform()
  }
  submit(){
    const url = 'http://127.0.0.1:5000/signup'
 this.http.post(url ,this.form.value).subscribe((res:any)=>{
  console.log(res.message)
  if(res.code == 100){
    this.router.navigate(['/home'])
  }
 })
  }
  initiateform(){
    this.form = this.formbuilder.group({
      name : new FormControl('' , Validators.required),
      age : new FormControl('' , Validators.required),
      contact : new FormControl('' , Validators.required),
      address : new FormControl('' , Validators.required),
      area : new FormControl('' , Validators.required)
    })
  }

}
