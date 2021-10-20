import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route:any): boolean {
    if(route.url[0].path === 'details' && route.params.id){
      if(!Number.isInteger(Number(route.params.id))){
        this.router.navigateByUrl('/home')
      }
      return true;
    }
    return true;
  }
}
