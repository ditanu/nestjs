import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService){

  }
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    try{
      const jwt = request.cookies['jwt'];
    return this.jwtService.verify(jwt);
    } catch(e)
    {
      return false;
    }
    
  }
}
