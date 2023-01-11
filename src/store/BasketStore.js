import {makeAutoObservable} from 'mobx';

import validateCount from '../helpers/validateCount';

class Basket {
  constructor() {
    this.products = [];
    makeAutoObservable(this);
  };

  updateCount(id, count) {
    const found = this.products.find(el => id === el.id);

    if (found) {
      found.count = validateCount(count);
    }
  };

  addProduct(product) {
    const found = this.products.find(el => el.id === product.id);
    
    if (!found) {
      this.products.push(product);
    } else {
      this.deleteProduct(found);
      this.products.push(product);
    }
  };

  deleteProduct(product) {
    const productIndex = this.products.indexOf(product);

    this.products.splice(productIndex, 1);
  };
}

export default new Basket();