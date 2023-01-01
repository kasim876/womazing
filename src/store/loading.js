import {makeAutoObservable} from "mobx"

class Loading {
  constructor() {
    this._isLoading = true;
    makeAutoObservable(this);
  }

  setIsLoading(bool) {
    this._isLoading = bool;
  }

  get isLoading() {
    return this._isLoading;
  }
}

export default new Loading()