import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { CartItem } from "../models/cart-item.model";

@Injectable()
export class CommunicatorService {
  private channel = new Subject<Array<CartItem>>();
  channel$ = this.channel.asObservable();

  publishData(data: Array<CartItem>) {
    this.channel.next(data);
  }
}