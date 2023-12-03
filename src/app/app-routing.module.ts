
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { AuthComponent } from './components/auth/auth.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductInfoComponent } from './components/product/product-info/product-info.component';
import { ErrorComponent } from './components/error/error.component';

import { ClientsComponent } from './components/admin/clients/clients.component';
import { MessagesComponent } from './components/admin/messages/messages.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { PurchasesComponent } from './components/admin/purchases/purchases.component';

import { AdminGuard } from './guards/admin.guard';
import { ClientGuard } from './guards/client.guard';


import { AddProdComponent } from './components/admin/products/add-prod/add-prod.component';
import { EditProdComponent } from './components/admin/products/edit-prod/edit-prod.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'client', component: ClientComponent, canActivate: [ClientGuard] },
  { path: 'auth', component: AuthComponent },
  {
    path: 'products',
    children: [
      { path: '', component: ProductListComponent },
      { path: ':id', component: ProductInfoComponent },
    ],
  },
  { path: 'error', component: ErrorComponent },
  { path: 'admin/clients', component: ClientsComponent, canActivate: [AdminGuard] },
  { path: 'admin/messages', component: MessagesComponent, canActivate: [AdminGuard] },
  { path: 'admin/products', component: ProductsComponent, canActivate: [AdminGuard] },
  { path: 'admin/purchases', component: PurchasesComponent, canActivate: [AdminGuard] },

  { path: 'admin/products/add', component: AddProdComponent, canActivate: [AdminGuard] },
  { path: 'admin/products/edit/:id', component: EditProdComponent, canActivate: [AdminGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/error' },
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
