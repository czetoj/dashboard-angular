export class Bill {
  id = 0;
  orderID = 0;
  amount = 0;
  country = '';
  status: string = 'new' || 'paid';

  constructor(properties?: Bill) {
    if (properties) {
      this.id = properties.id || 0;
      this.orderID = properties.orderID || 0;
      this.amount = properties.amount || 0;
      this.country = properties.country || '';
      this.status = properties.status || 'new' || 'paid';
    }
  }
}
