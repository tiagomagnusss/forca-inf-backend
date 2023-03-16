import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';
import { ROLES_KEY } from './roles.decorator';
import { AuthGuard } from '@nestjs/passport';

export class RolesGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const reflector = new Reflector();
    // call AuthGuard in order to ensure user is injected in request
    const baseGuardResult = await super.canActivate(context);
    if (!baseGuardResult) {
      // unsuccessful authentication return false
      return false;
    }

    const requiredRoles = reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }
    // successfull authentication, user is injected
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.role == role);
  }
}
