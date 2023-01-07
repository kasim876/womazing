import {makeAutoObservable} from 'mobx';

class ProductStore {
  constructor() {
    this._loading = false;
    this._currentType = {};
    this._products = [];
    this._totalCount = 0;
    this._page = 1;
    this._limit = 9;
    makeAutoObservable(this);
  }

  setLoading(bool) {
    this._loading = bool;
  }

  setCurrentType(type) {
    if (this.currentType === type) {
      return;
    } else {
      this._page = 1;
      this._currentType = type;
    }
  }

  setProducts(products) {
    this._products = products;
  }

  setTotalCount(count) {
    this._totalCount = count;
  }

  setPage(page) {
    this._page = page;
  }

  setLimit(limit) {
    this._limit = limit;
  }

  get loading() {
    return this._loading;
  }

  get currentType() {
    return this._currentType;
  }

  get products() {
    return this._products;
  }

  get totalCount() {
    return this._totalCount;
  }

  get page() {
    return this._page;
  }

  get limit() {
    return this._limit;
  }
}

export default new ProductStore();