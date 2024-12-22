import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliveryAgentController } from './delivery-agent/delivery-agent.controller';
import { DeliveryAgentService } from './delivery-agent/delivery-agent.service';
import { DeliveryAgentModule } from './delivery-agent/delivery-agent.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './delivery-agent/auth/auth.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'lamyea4246',
      database: 'fresh',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Only for development
    }),
     AuthModule,
      DeliveryAgentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
