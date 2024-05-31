import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.css']
})
export class AgentDetailsComponent implements OnInit{
agentName : any;
agentDetails : any;
  constructor(
    private activatedroute : ActivatedRoute,
    private http :HttpClient

  ){
    this.agentName = this.activatedroute.snapshot.params['id']
  }
  ngOnInit(): void {
    console.log(this.agentName , '')
    this.getagentDetails()
    
  }
  getagentDetails(){
    const url = `http://127.0.0.1:5000/agentId?agentId=${this.agentName}`
    this.http.get(url).subscribe((res:any)=>{
      console.log(res)
      this.agentDetails = res;
    })
  }

}
