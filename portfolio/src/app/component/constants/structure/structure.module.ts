import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DesignComponent } from './design/design.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../routed-component/routed-components/home/home.component';
import { EducationalQualificationsComponent } from '../../routed-component/routed-components/educational-qualifications/educational-qualifications.component';

const routes : Routes = [
  {
    path : '', component : DesignComponent, children : [

      {
        path: '',loadChildren: () => import('../../routed-component/routed-components/routed-components.module').then(m => m.RoutedComponentsModule)
      }

      // {
      //   path: 'home' , component: HomeComponent
      // },
      // {
      //   path: 'EducationalQualifications' , component: EducationalQualificationsComponent
      // }
    ]
  },

]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DesignComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StructureModule { }
