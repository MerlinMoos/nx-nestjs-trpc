import { Injectable } from '@nestjs/common';
import { ContextOptions, TRPCContext } from 'nestjs-trpc';

@Injectable()
export class AppContext implements TRPCContext {
  async create(opts: ContextOptions): Promise<Record<string, unknown>> {
    return {
      req: opts.req,
      auth: {
        user: { name: 'Username' },
      },
    };
  }
}
