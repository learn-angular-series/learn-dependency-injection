import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChildComponent } from './child/child.component';
import { UserListService } from './user-list/service/user-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
