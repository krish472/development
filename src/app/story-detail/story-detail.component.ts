import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css']
})
export class StoryDetailComponent implements OnInit{
  storyId : any;
  storyDetails : any
constructor(private router : Router , private activatedRoute : ActivatedRoute,private http : HttpClient){
}
  ngOnInit(): void {
  this.storyId = this.activatedRoute.snapshot.params['id']

    this.getStoryDetail()
  }
  ngOnchange(){
    // this.getStoryDetail()
  }
  getStoryDetail(){
    const url = ` http://127.0.0.1:5000/poojaStory?poojaId=${this.storyId}`
    this.http.get(url).subscribe((res:any)=>{
      this.storyDetails = res.poojaDesc;
    // console.log(this.storyDetails);
    // this.storyDetails.img = 'src/'+this.storyDetails.img
    // this.storyDetails.img = 
    })
  }
}
