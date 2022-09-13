import { z } from 'zod';

export const AnimalOrderScalarFieldEnumSchema = z.enum([
  'ORDERID',
  'ORDERDATE',
  'RECEIVEDATE',
  'SUPPLIERID',
  'SHIPPINGCOST',
  'EMPLOYEEID',
]);
