import { Module } from '@nestjs/common';
import { DeliveryAgentController } from './delivery-agent.controller';
import { DeliveryAgentService } from './delivery-agent.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { User } from '../entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',          // Host
        port: 5432,                 // Port
        username: 'postgres',       // Database username
        password: 'lamyea4246',     // Database password
        database: 'FreshBasket',
        entities: [Order, User],    // Entities to be included
        synchronize: true,          // Synchronize the database schema (development only)
      }),
      TypeOrmModule.forFeature([Order, User]), // Registers entities for the module
    ],
    controllers: [DeliveryAgentController],
    providers: [DeliveryAgentService],
  })
  export class DeliveryAgentModule {}
  