import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, provideHttpClient } from '@angular/common/http';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { AuthComponent } from './components/auth/auth.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductInfoComponent } from './components/product/product-info/product-info.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ErrorComponent } from './components/error/error.component';
import { CustomPipe } from './pipes/custom.pipe';
import { ContactFormComponent } from './components/contact/contact.component';
import { ProductHomeComponent } from './components/product/product-home/product-home.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { ClientsComponent } from './components/admin/clients/clients.component';
import { PurchasesComponent } from './components/admin/purchases/purchases.component';
import { MessagesComponent } from './components/admin/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    AuthComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProductInfoComponent,
    ProductListComponent,
    ErrorComponent,
    CustomPipe,
    ContactFormComponent,
    ProductHomeComponent,
    AdminNavbarComponent,
    ProductsComponent,
    ClientsComponent,
    PurchasesComponent,
    MessagesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient(),],
  bootstrap: [AppComponent],
})
export class AppModule {}
