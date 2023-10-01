import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { ProductDeatilsComponent } from './pages/product-deatils/product-deatils.component';
import { HeaderComponent } from './shared/components/global/header/header.component';
import { EventHistoryComponent } from './shared/components/event-history/event-history.component';
import { ProductService } from './shared/services/product.service';
import { ServiceInterceptor } from './shared/services/service-interceptor.service';
import { SafePipe } from './shared/components/pipe/safe-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductDeatilsComponent,
    EventHistoryComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi: true},
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
