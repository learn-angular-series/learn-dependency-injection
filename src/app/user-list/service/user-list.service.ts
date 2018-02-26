import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Observable } from 'rxjs';

@Injectable()
export class UserListService {
  private _id:string;

  constructor() { 
    this._id=UUID.UUID();
  }

  public getUserList():Observable<Array<any>>{
    return Observable.of([
      {userName:'damoqiongqiu',age:18},
      {userName:'damoqiongqiu',age:18},
      {userName:'damoqiongqiu',age:18},
      {userName:'damoqiongqiu',age:18},
      {userName:'damoqiongqiu',age:18}
    ]);
  }

  public get id():string{
    return this._id;
  }
}
