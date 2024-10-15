import { Module } from '@nestjs/common';
import { CatsRouter } from './cats.router';

@Module({
  imports: [],
  controllers: [],
  providers: [CatsRouter],
  exports: [],
})
export class CatsModule {}
