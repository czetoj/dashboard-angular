import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  apiUrl = 'http://localhost:3000/orders';
  orderList$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  constructor(
    private http: HttpClient
  ) {
    this.getAll();
   }

  getAll(): void {
    this.http.get<Order[]>(this.apiUrl).subscribe(
      order => this.orderList$.next(order)
    );
  }

  get(id: number): Observable<Order> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    const order: Order | undefined = this.orderList$.value.find(
      item => item.id === id);
    if (order) {
      return of(order);
    }

    return of(new Order());
  }

  create(order: Order): void {
    this.http.post<Order>(this.apiUrl, order).subscribe(
      () => this.getAll()
    );
  }

  update(order: Order): Observable<Order> {
    return this.http.patch<Order>(`${this.apiUrl}/${order.id}`, order);
  }

  remove(order: Order): void {
    this.http.delete<Order>(`${this.apiUrl}/${order.id}`).subscribe(
      () => this.getAll()
    );
  }

}

