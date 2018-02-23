import { Injectable } from '@angular/core';

@Injectable()
export class UserListService {

  constructor() { }

  public getUserList():Array<any>{
    return [
      {userName:'damoqiongqiu',age:18},
      {userName:'damoqiongqiu',age:18},
      {userName:'damoqiongqiu',age:18},
      {userName:'damoqiongqiu',age:18},
      {userName:'damoqiongqiu',age:18}
    ];
  }
}
