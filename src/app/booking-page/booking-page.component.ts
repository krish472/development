import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit{
  bookingdetails:any;
  selectedImage : any;
  availableSlots : any;
  constructor(private router : Router){

  }
ngOnInit(): void {

this.bookingdetails = history.state.data; 
this.selectedImage = "assets/profile.svg";
this.availableSlots = ['10 May' , '12 May' , '17 May']
console.log(this.bookingdetails, this.availableSlots) 
}

}
