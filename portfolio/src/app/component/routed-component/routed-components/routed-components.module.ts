import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationalQualificationsComponent } from './educational-qualifications/educational-qualifications.component';
import { SkillsHobbiesComponent } from './skills-hobbies/skills-hobbies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


const routes : Routes = [
  {
    path: '', pathMatch : 'full', redirectTo:'home'
  },
  {
    path: 'home', component : HomeComponent
  },
  {
    path: 'EducationalQualifications', component : EducationalQualificationsComponent
  },
  {
    path:'skills&hobbies', component: SkillsHobbiesComponent
  },
  {
    path:'my-projects' , component: ProjectsComponent
  },
  {
    path:'my-contacts' , component : ContactMeComponent
  }

]

@NgModule({
  declarations: [
    ProjectsComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RoutedComponentsModule { }
