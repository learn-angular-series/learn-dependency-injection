import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list/service/user-list.service';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(
    public userListService:UserListService
  ) {
    console.dir(this);
    console.dir(this.userListService);
  }

  ngOnInit() {
  
  }
}
