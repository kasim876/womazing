import {makeAutoObservable} from 'mobx';

class Basket {
  constructor() {
    this._basket = [];
    makeAutoObservable(this);
  };

  setBasket(count, size, color, price, totalPrice) {
    this._basket.push({
      count,
      size,
      color,
      price,
      totalPrice,
    });
  }

  get basket() {
    return this._basket;
  }
}

export default new Basket();