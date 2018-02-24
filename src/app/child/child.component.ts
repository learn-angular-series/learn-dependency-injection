import { Component, OnInit, Host, Optional } from '@angular/core';
import { UserListService } from '../user-list/service/user-list.service';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(
    @Host() @Optional() public userListService: UserListService
  ) { }

  ngOnInit() {
    
  }
}
