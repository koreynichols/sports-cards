import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './card/card.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CreateCardComponent } from './create-card/create-card.component';

const routes: Routes = [
   { path: '', component: CardComponent},
   { path: 'card/:id', component: CardDetailComponent},
   { path: 'create', component: CreateCardComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
