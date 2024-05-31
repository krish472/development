import { Component, OnInit  } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { FormBuilder , FormControl , FormGroup, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit{
  signinForm !: FormGroup
constructor(private formBuilder : FormBuilder , private http : HttpClient , private router:Router){}
  ngOnInit(){
this.initializeForm()
   
}
initializeForm(){
this.signinForm = this.formBuilder.group({
  email : new FormControl(null , Validators.required),
  password : new FormControl(null , Validators.required)
});
}
signin(){
  console.log(this.signinForm.value)
  const url = `http://127.0.0.1:5000/signin`
  this.http.post(url , this.signinForm.value).subscribe((res : any)=>{
    console.log(res);
    if(res.code == 100){
    this.router.navigate(['/home'])
    }
    else{
      alert(res.message + ' Please sign up')
    }
  })
}
}


