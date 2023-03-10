import { Controller, Get, Param, Query, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("contract-address")
  getContractAddress(): string {
    return this.appService.getContractAddress();
  }

  @Get("total-supply")
  async getTotalSupply(): Promise<number> {
    return await this.appService.getTotalSupply();
  }

  @Get("allowance")
  async getAllowance(
    @Query('from') from: string, 
    @Query('to') to: string
    ): Promise<number> {
    return await this.appService.getAllowance(from, to);
  }

  @Get("transaction-status")
  async getTransactionStatus(@Query('hash') hash: string): Promise<string> {
    return await this.appService.getTransactionStatus(hash);
  }

}
