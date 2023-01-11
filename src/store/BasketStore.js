import {makeAutoObservable} from 'mobx';

class Basket {
  constructor() {
    this.products = [];
    makeAutoObservable(this);
  };

  updateCount(id, count) {
    const found = this.products.find(el => id === el.id);

    if (found) {
      count < 0 ?
        found.count = 1
        :
        found.count = count;
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

    if (productIndex) {
      this.products.splice(productIndex, 1);
    }
  };
}

export default new Basket();