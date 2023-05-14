import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionListComponent } from './component/description-list/description-list.component';
import { DescriptionDetailsComponent } from './component/description-details/description-details.component';
import { AddDescriptionComponent } from './component/add-description/add-description.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'description', component: DescriptionListComponent },
  { path: 'description/:id', component: DescriptionDetailsComponent },
  { path: 'add', component: AddDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
