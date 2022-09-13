import { z } from 'zod';

export const MerchandiseOrderScalarFieldEnumSchema = z.enum([
  'PONUMBER',
  'ORDERDATE',
  'RECEIVEDATE',
  'SUPPLIERID',
  'EMPLOYEEID',
  'SHIPPINGCOST',
]);
