import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as tokenJson from './assets/MyToken.json';

const CONTRACT_ADDRESS = "0xC9284c151C922B5BB2EB5fe0c1E603d551C55e94";

@Injectable()
export class AppService {

  provider: ethers.providers.Provider;
  contract: ethers.Contract;

  constructor() {
    this.provider = ethers.getDefaultProvider('goerli');
    this.contract = new ethers.Contract(CONTRACT_ADDRESS, tokenJson.abi, this.provider);
  }

  getContractAddress(): string {
    return this.contract.address;
  }

  async getTotalSupply(): Promise<number> {
    const totalSupplyBN = await this.contract.totalSupply();
    const totalSupplyString = ethers.utils.formatEther(totalSupplyBN);
    const totalSupplyNumber = parseFloat(totalSupplyString);
    return totalSupplyNumber;
  }

  async getAllowance(from: string, to: string): Promise<number> {
    const totalAllowanceBN = await this.contract.allowance(from, to);
    const totalAllowanceString = ethers.utils.formatEther(totalAllowanceBN);
    const totalAllowanceNumber = parseFloat(totalAllowanceString);
    return totalAllowanceNumber;
  }

  async getTransactionStatus(hash: string): Promise<string> {
    const tx = await this.provider.getTransaction(hash);
    const txReceipt = await tx.wait();
    return txReceipt.status == 1 ? "Completed" : "Reverted";
  }

}
