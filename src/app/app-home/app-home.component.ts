import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit{
nameListDt : any;
  signin  : boolean = true;
  imageContent : any =[{
    "image" : "assets/daily-pooja.jpg",
    "content" : "Puja helps to cultivate a sense of connection with the divine and can provide a sense of peace, comfort, and spiritual fulfillment. Stress relief: The act of performing puja and focusing on the divine can help to alleviate stress and bring a sense of calm and clarity to the mind."
    },
    {
      "image":"assets/daily-pooja.jpg",
    "content" : "Puja helps to cultivate a sense of connection with the divine and can provide a sense of peace, comfort, and spiritual fulfillment. Stress relief: The act of performing puja and focusing on the divine can help to alleviate stress and bring a sense of calm and clarity to the mind."
      
    },
    {
      "image":"assets/daily-pooja.jpg",
    "content" : "Puja helps to cultivate a sense of connection with the divine and can provide a sense of peace, comfort, and spiritual fulfillment. Stress relief: The act of performing puja and focusing on the divine can help to alleviate stress and bring a sense of calm and clarity to the mind."
      
    },
    {
      "image":"assets/daily-pooja.jpg",
    "content" : "Puja helps to cultivate a sense of connection with the divine and can provide a sense of peace, comfort, and spiritual fulfillment. Stress relief: The act of performing puja and focusing on the divine can help to alleviate stress and bring a sense of calm and clarity to the mind."
      
    }
  ]
  constructor(private http : HttpClient,private router:Router){}
  ngOnInit(): void {
  }
  
    navigateToSignin(){
      this.signin = true;
      this.router.navigate(['/sign-in'])
    }
    navigateToSignUp(){
      this.signin=false
      this.router.navigate(['/sign-up'])
    }
}
