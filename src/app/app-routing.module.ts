import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { HomeComponent } from './home/home.component';
import { PoojaCategoryComponent } from './pooja-category/pooja-category.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { BookingPageComponent } from './booking-page/booking-page.component';

const routes: Routes = [
  {
    path:'',
    component:AppHomeComponent
  },
  {
    path : 'sign-in',
    component: SignInComponent
  },
  {
    path : 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'agentDetails/:id',
    component:AgentDetailsComponent
    // loadChildren:()=> import('./agent-details/agent-details.component').then((m)=>m.AgentDetailsComponent)
  },{
  path:'agentDetails',
  component:AgentDetailsComponent
  },
  {
    path : 'home',
    component:HomeComponent
  },
  {
    path : 'poojaServices',
    component : PoojaCategoryComponent
  },
  {
    path : 'story/:id/storyDetails',
    component : StoryDetailComponent
  },
  {
    path : 'booking-page',
    component : BookingPageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
