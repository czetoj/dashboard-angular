import { Address } from './Address';

export class Customer {

  id = 0;
  firstName = '';
  lastName = '';
  email = '';
  address: Address = new Address();
  active = false;
}
