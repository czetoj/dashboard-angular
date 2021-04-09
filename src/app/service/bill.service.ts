import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Bill } from '../models/Bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  list$: BehaviorSubject<Bill[]> = new BehaviorSubject<Bill[]>([]);
  apiUrl: string = 'http://localhost:3000/bills'

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll(): void {
    this.http.get<Bill[]>(this.apiUrl).subscribe(bills => this.list$.next(bills));
  }

  get(id: number): Observable<Bill> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    const bill: Bill | undefined = this.list$.value.find(item => item.id === id);
    if (bill) {
      return of(bill);
    }

    return of(new Bill());
  }

  update(bill: Bill): Observable<Bill> {
    return this.http.patch<Bill>(`${this.apiUrl}/${bill.id}`, bill)
  }

  create(bill: Bill): void {
    this.http.post<Bill>(this.apiUrl, bill).subscribe(() => this.getAll())
  }

  remove(bill: Bill): void {
    this.http.delete(`${this.apiUrl}/${bill.id}`).subscribe(() => this.getAll())
  }
}
