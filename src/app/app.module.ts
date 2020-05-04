import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListService } from './user-list/service/user-list.service';
import { LiteralService } from './user-list/service/literal.service';
import { MY_CONFIG, MY_CONFIG_TOKEN} from './my-config';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [UserListService, LiteralService, { provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
