import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { ChildComponent } from '../child/child.component';
import { UserListService } from './service/user-list.service';

import { userListRoutes } from './user-list.routes';

@NgModule({
  declarations: [
    ChildComponent,
    UserListComponent
  ],
  imports: [
    RouterModule.forChild(userListRoutes)
  ],
  providers: [UserListService],
  bootstrap: []
})
export class UserListModule { }
