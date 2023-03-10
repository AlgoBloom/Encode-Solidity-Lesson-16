import { Component } from '@angular/core';
import { ethers, Wallet } from 'ethers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  blockNumber: number | string | undefined;
  provider: ethers.providers.BaseProvider;
  userWallet: Wallet | undefined;
  // constructor function
  constructor() {
    this.provider = ethers.getDefaultProvider('goerli');
  }

  syncBlock() {
    // here we are listenting to the promise and when it is completed then receiving the block object
    this.blockNumber = "loading...";
    this.provider.getBlock('latest').then((block) => {
      this.blockNumber = block.number;
    });
  }

  clearBlock() {
    this.blockNumber = 0;
  }
}
