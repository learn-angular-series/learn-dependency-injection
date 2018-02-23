import { Component, OnInit, SkipSelf, Optional } from '@angular/core';
import { UserListService } from '../user-list/service/user-list.service';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [UserListService]
})
export class ChildComponent implements OnInit {

  constructor(
    @SkipSelf() @Optional() public userListService: UserListService
  ) { }

  ngOnInit() {
  }
}
