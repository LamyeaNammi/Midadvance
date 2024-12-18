import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { AdminModule } from './admin/admin.module';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';
import { DeliveryAgentController } from './delivery-agent/delivery-agent.controller';
import { DeliveryAgentService } from './delivery-agent/delivery-agent.service';
import { DeliveryAgentModule } from './delivery-agent/delivery-agent.module';
import { StoreManagerController } from './store-manager/store-manager.controller';
import { StoreManagerService } from './store-manager/store-manager.service';
import { StoreManagerModule } from './store-manager/store-manager.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'lamyea4246',
      database: 'FreshBasket',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Only for development
    }),
    AdminModule, CustomerModule, DeliveryAgentModule, StoreManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
