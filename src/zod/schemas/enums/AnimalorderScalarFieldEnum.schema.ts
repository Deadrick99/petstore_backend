import { z } from 'zod';

export const AnimalorderScalarFieldEnumSchema = z.enum([
  'ORDERID',
  'ORDERDATE',
  'RECEIVEDATE',
  'SUPPLIERID',
  'SHIPPINGCOST',
  'EMPLOYEEID',
]);
