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

  // Find all orders with a delivery date in the future (monitor orders)
  async findAllOrderstoMonitor() {
    const now = new Date();
    return await this.orderRepository.find({
      where: { deliveryDate: MoreThan(now) },
    });
  }

  // Find all orders with status 'Pending'
  async findAllPendingOrders() {
    return await this.orderRepository.find({ where: { status: 'Pending' } });
  }

  // Update the status of a specific order by ID
  async updateOrderStatus(id: number, status: string) {
    // Find the order by ID
    const order = await this.orderRepository.findOneBy({ id });
    if (!order) {
      throw new Error('Order not found');
    }

    // Update the order's status
    order.status = status;
    const updatedOrder = await this.orderRepository.save(order);

    // Return the updated order
    return updatedOrder;
  }
}
