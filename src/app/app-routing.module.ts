import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReadingComponent } from './pages/reading/reading.component';
import { BottomSectionComponent } from './pages/reading/section/bottom-section/bottom-section.component';
import { SubmitComponent } from './pages/submit/submit.component';
import { WritingComponent } from './pages/writing/writing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reading',
    component: ReadingComponent
  },
  {
    path: 'writing',
    component: WritingComponent
  },
  {
    path: 'submit',
    component: SubmitComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
