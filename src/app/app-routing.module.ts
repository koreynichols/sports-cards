import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './card/card.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const routes: Routes = [
   { path: '', component: CardComponent},
   { path: 'card/:id', component: CardDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
