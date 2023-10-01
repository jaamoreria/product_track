import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDeatilsComponent } from './pages/product-deatils/product-deatils.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product-details', component: ProductDeatilsComponent },
  { path: '**', redirectTo: ''  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
