import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { Order } from '../entities/order.entity';

@Injectable()
export class DeliveryAgentService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async findAllOrderstoMonitor(){
    const now = new Date();    
    return await this.orderRepository.find({where: {deliveryDate: MoreThan(now), }})
  }

  async findAllPendingOrders() {
    return await this.orderRepository.find({ where: { status: 'Pending' } });
  }

  async updateOrderStatus(id: number, status: string) {
    const order = await this.orderRepository.findOneBy({ id });
    if (!order) {
      throw new Error('Order not found');
    }
    order.status = status;

    console.log(order);
    const updatedOrder= await this.orderRepository.update(id, order);

    if (updatedOrder.affected === 0) {
      throw new Error('Order not found or update failed');
    }

    return this.orderRepository.findOneBy({ id });
  }
}
