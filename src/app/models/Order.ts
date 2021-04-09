export class Order {
  id = 0;
  customerID = 0;
  productID = 0;
  amount = 0;
  status: string = 'new' || 'shipped' || 'paid';
}
