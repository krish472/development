import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-pooja',
  templateUrl: './search-pooja.component.html',
  styleUrls: ['./search-pooja.component.css']
})
export class SearchPoojaComponent implements OnInit{
  poojaName : any;
  searchForm !: FormGroup

  constructor(private formbuilder : FormBuilder,private http : HttpClient){}
  ngOnInit(): void {
    this.getpoojaList()
    this.searchPoojaform()
    console.log(this.poojaName)
  }
  getpoojaList(){
    
    const url = ' http://127.0.0.1:5000/getPoojaList'
    this.http.get(url).subscribe((res : any)=>{
      this.poojaName = res.poojalist
      console.log(this.poojaName)
    })
  }
  searchPoojaform(){
    this.searchForm = this.formbuilder.group({
      poojaName : new FormControl(null , Validators.required),
      city : new FormControl(null , Validators.required)
    })
  }
  searchPooja(){
    const url = ' http://127.0.0.1:5000/searchPooja'
    this.http.post(url,this.searchForm.value).subscribe((res:any)=>{
      
    })
  }
}
