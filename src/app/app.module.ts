import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './dashboard/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterDropdownComponent } from './dashboard/filter-dropdown/filter-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    ChildComponent,
    CardComponent,
    FilterDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
