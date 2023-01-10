import {makeAutoObservable} from 'mobx';

class Basket {
  constructor() {
    this._basket = [];
    makeAutoObservable(this);
  };

  setBasket(product, count) {
    this._basket.push(Object.assign({ count }, product));
  }

  get basket() {
    return this._basket;
  }
}

export default new Basket();