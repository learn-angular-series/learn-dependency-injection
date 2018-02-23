import { Component, OnInit } from '@angular/core';
import { UserListService } from './service/user-list.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList:Array<any>;

  constructor(
    private userListService:UserListService
  ) { }

  ngOnInit() {
    this.userList=this.userListService.getUserList();
  }
}
