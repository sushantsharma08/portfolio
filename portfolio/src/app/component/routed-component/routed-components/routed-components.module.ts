import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationalQualificationsComponent } from './educational-qualifications/educational-qualifications.component';
import { SkillsHobbiesComponent } from './skills-hobbies/skills-hobbies.component';

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

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RoutedComponentsModule { }
