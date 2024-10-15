import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc';
import { AppContext } from './app.context';
import { TrpcPanelController } from './trpc-panel.controller';
import { ProtectedMiddleware } from './protected.middleware';
import { CatsModule } from '@nx-trpc-nest/cats';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: './src/@generated',
      context: AppContext,
    }),
    CatsModule,
  ],
  controllers: [TrpcPanelController],
  providers: [AppContext, ProtectedMiddleware],
})
export class AppModule {}
