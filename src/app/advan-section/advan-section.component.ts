import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advan-section',
  templateUrl: './advan-section.component.html',
  styleUrls: ['./advan-section.component.css']
})
export class AdvanSectionComponent implements OnInit{
  poojaDesc : any =[]
  constructor(private router : Router , private http:HttpClient){

  }
ngOnInit(): void {
  this.getPoojaDesc();
  // this.poojaDesc = [
  //   {"img" : "assets/sathya-narayan.jpg" , "desc" : "Satya Narayan is a manifestation of Narayan, also known as Lord Vishnu, and is regarded as the embodiment of truth.All Hindus who wish to fulfill their goals worship Him and worshipping Him offers relief from their afflictions. To be effective, the Puja must be conducted in a specified manner and according to religious traditions."},
  //   {"img": "assets/varaalakshmi.webp" , "desc" : "The origin of Varalakshmi Vratham is often attributed to a legend mentioned in the Skanda Purana. According to the legend, a woman named Charumati was observing a fast on this day. Pleased with her devotion and dedication, Goddess Lakshmi appeared before her and granted her a boon, asking her to wish for anything she desired. Charumati requested Goddess Lakshmi to bless all women with prosperity and well-being. Goddess Lakshmi granted her wish, and from then on, it became a tradition for married women to observe the Varalakshmi Vratham to seek the blessings of Goddess Lakshmi for the well-being and prosperity of their families.Women believe that by observing the Vratham with sincerity and devotion, they can invoke the blessings of Goddess Lakshmi and bring prosperity and happiness to their families."},
  //   {"img" : "assets/ganapath-homam.png","desc" : "Homam or Havan or Yajna is a holy fire ritual performed with the sacred chants (mantras and shlokas). It is the procedure practiced from time immemorial to invoke the divine spirit. However, as per the Vedic scriptures, there are many times of havans performed for various reasons and significances. Ganapati Homam is a traditional Hindu ritual dedicated to Lord Ganesha to seek divine blessings from God. "},
  //   {"img" : "assets/akshara abhyasam.jpg" , "desc":"Aksharabhyasam is a Sanskrit word that means 'initiation of education to a child by his parents and guru on an auspicious day'. It is a sacred religious function that involves the worship of the goddess Saraswati before initiating a child's primary education. The word is a combination of two terms: Akshara, which means alphabet, and Abhyasam, which means the study of. The ceremony is meant to seek the blessings of the gods so they can assist the child in their academic journey"}
    
  // ]
} 
getPoojaDesc(){
  const url = ` http://127.0.0.1:5000/poojaDescription`
  this.http.get(url).subscribe((res : any)=>{
    this.poojaDesc = res.poojaDesc;
    console.log(this.poojaDesc)
  })
}
navigatetoStory(item: any){
  let url = `story/${item._id}/storyDetails`
  this.router.navigateByUrl(url);
}
}
