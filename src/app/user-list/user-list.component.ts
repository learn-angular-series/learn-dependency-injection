import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list/service/user-list.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers:[ UserListService ]
})
export class UserListComponent implements OnInit {
  public userList:Array<any>;

  constructor(
    public userListService:UserListService
  ) { 
  }

  ngOnInit() {
  }
}
