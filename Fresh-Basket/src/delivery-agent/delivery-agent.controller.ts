import { Controller, Get, Param, Patch, Body, UseGuards } from '@nestjs/common';
import { DeliveryAgentService } from './delivery-agent.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('delivery-agent')
@UseGuards(AuthGuard('jwt'))
export class DeliveryAgentController {
  constructor(private readonly deliveryAgentService: DeliveryAgentService) {}

  @Get('monitor-orders')
  getAllOrdertoMonitor(){
    return this.deliveryAgentService.findAllOrderstoMonitor();
  }

  @Get('available-orders')
  getAvailableOrders() {
    return this.deliveryAgentService.findAllPendingOrders();
  }

  @Patch('orders/:id')
  updateOrderStatus(
    @Param('id') id: number,
    @Body('status') status: string,
  ) {
    return this.deliveryAgentService.updateOrderStatus(id, status);
  }
}
