import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable()
export class UserListService {
  private _id:string;

  constructor() { 
    this._id=UUID.UUID();
  }

  public getUserList():Array<any>{
    return [
      {userName:'damoqiongqiu',age:18},
      {userName:'damoqiongqiu',age:18},
      {userName:'damoqiongqiu',age:18},
      {userName:'damoqiongqiu',age:18},
      {userName:'damoqiongqiu',age:18}
    ];
  }

  public get id():string{
    return this._id;
  }
}
