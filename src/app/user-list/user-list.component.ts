import { Component, OnInit, Injector } from '@angular/core';
import { UserListService } from './service/user-list.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList:Array<any>;
  //这里我们没有在构造函数里面定义userListService，Angular不会自动注射
  public userListService:UserListService;

  constructor(  
    public injector:Injector
  ) { 
    console.log(this.userListService);
    console.log(this.injector);
  }

  ngOnInit() {
    //尝试自己手动创建userListService实例
    this.userListService=this.injector.get(UserListService);
    console.log(this.userListService);

    this.userListService.getUserList().subscribe((userList:Array<any>)=>{
      this.userList=userList;
    });
  }
}
