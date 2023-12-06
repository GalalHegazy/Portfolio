import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { PersonalComponent } from './component/personal/personal.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { SkillsComponent } from './component/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    ExperienceComponent,
    PortfolioComponent,
    PersonalComponent,
    NotfoundComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
