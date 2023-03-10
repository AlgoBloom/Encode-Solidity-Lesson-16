import { ethers } from 'ethers';
export declare class AppService {
    provider: ethers.providers.Provider;
    contract: ethers.Contract;
    constructor();
    getContractAddress(): string;
    getTotalSupply(): Promise<number>;
    getAllowance(from: string, to: string): Promise<number>;
    getTransactionStatus(hash: string): Promise<string>;
}
