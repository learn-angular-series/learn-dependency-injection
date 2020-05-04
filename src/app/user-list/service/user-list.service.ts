import { Injectable, Inject } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserListService {
  private _id: string;

  constructor(
    @Inject(HttpClient) private hc
  ) {
    this._id = UUID.UUID();
  }

  public getUserList(): Observable<Array<any>> {
    return Observable.create();
  }

  public get id(): string {
    return this._id;
  }
}
