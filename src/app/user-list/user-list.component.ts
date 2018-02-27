import { Component, OnInit, Injector, ReflectiveInjector } from '@angular/core';
import { UserListService } from './service/user-list.service';
import { TestService } from './service/test.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList:Array<any>;
  //这里我们没有在构造函数里面定义userListService，Angular不会自动注射
  public userListService:UserListService;

  private reflectiveInjector:ReflectiveInjector;

  private testService:TestService;

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

    //尝试自己创建注射器，然后利用注射器自己注射TestService服务实例
    let myInjector = ReflectiveInjector.resolveAndCreate([
      { provide: "TestService", useClass: TestService }  
    ]);

    this.testService = myInjector.get("TestService");

    console.log(this.testService);

  }
}
