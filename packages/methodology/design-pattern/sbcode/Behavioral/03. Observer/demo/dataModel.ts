import {
  IDataController,
  DataController
} from './dataController';
import { IDataView } from './dataView';

export interface IDataModel {
  subscribe(observer: IDataView): number;
  unsubscribe(observerId: number): void;
  notify(data: number[]): void;
}

export class DataModel implements IDataModel {
  $observers: { [id: number]: IDataView } = {};
  $dataController: IDataController;
  $counter: number;

  constructor() {
    this.$counter = 0;
    this.$dataController = new DataController();
    this.$dataController.subscribe(this);
  }

  subscribe(observer: IDataView): number {
    this.$counter++;
    this.$observers[this.$counter] = observer;
    return this.$counter;
  }

  unsubscribe(observerId: number): void {
    delete this.$observers[observerId];
  }

  notify(data: number[]): void {
    Object.keys(this.$observers).forEach((observer) => {
      this.$observers[parseInt(observer)].notify(data);
    });
  }
}
