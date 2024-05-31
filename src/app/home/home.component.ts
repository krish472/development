import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  nameListDt : any;
  constructor(private activatedroute : ActivatedRoute , private http:HttpClient , private router : Router){}
ngOnInit(): void {
  this.getDetails()
  
}
getDetails(){
  const url ='http://127.0.0.1:5000/getDetails'
  this.http.get(url).subscribe((res:any)=>{
    console.log(res);
    this.nameListDt = res.allitem
  })
  }
booknow(datum : any){
  
  const url = `/booking-page`
  this.router.navigate([url], { state: {data: datum} });
}
}
