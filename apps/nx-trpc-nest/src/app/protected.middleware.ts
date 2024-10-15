import {
  MiddlewareOptions,
  MiddlewareResponse,
  TRPCMiddleware,
} from 'nestjs-trpc';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProtectedMiddleware implements TRPCMiddleware {
  async use(opts: MiddlewareOptions<object>): Promise<MiddlewareResponse> {
    const start = Date.now();
    const result = await opts.next({
      ctx: {
        ben: 1,
      },
    });

    const durationMs = Date.now() - start;
    const meta = { path: opts.path, type: opts.type, durationMs };
    result.ok
      ? console.log('OK request timing:', meta)
      : console.error('Non-OK request timing', meta);
    return result;
  }
}
