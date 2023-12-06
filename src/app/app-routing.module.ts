import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { PersonalComponent } from './component/personal/personal.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { SkillsComponent } from './component/skills/skills.component';

const routes: Routes = [
  {path:'',component:HomeComponent,title:'Galal Hegazy'},
  {path:'contacts',component:ContactsComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'personal',component:PersonalComponent},
  {path:'skills',component:SkillsComponent},
  {path:'Not found',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
