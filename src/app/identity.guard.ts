import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { UserService } from './services/user.service';


@Injectable({
  providedIn: 'root'
})
export class IdentityGuard implements  CanActivate{

  constructor(private _router:Router,
    private _userService: UserService)
  {

  }
  canActivate()
  {
    let identity = this._userService.getIdentity();

    if(identity)
    {
      return true;
    }
    else
    {
      this._router.navigate(['/error']);
      return true;
    }
  }
  
}
