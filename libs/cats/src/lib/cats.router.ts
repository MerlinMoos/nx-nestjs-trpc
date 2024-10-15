import { z } from 'zod';
import { Query, Router } from 'nestjs-trpc';
import { Cat, catsSchema } from './cats.schema';

const cats: Cat[] = [];

@Router()
export class CatsRouter {
  @Query({ output: z.array(catsSchema) })
  findAll(): Cat[] {
    return cats;
  }
}
