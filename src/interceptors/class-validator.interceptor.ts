import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { Observable } from 'rxjs';

@Injectable()
export class ClassValidatorInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const dto = request.body;
    const errors = await validate(dto);
    if (errors.length > 0) {
      const validationErrors = errors.map((error: ValidationError) =>
        Object.values(error.constraints),
      );
      throw new BadRequestException(validationErrors);
    }

    return next.handle();
  }
}
