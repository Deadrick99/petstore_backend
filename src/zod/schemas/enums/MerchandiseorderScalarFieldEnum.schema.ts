import { z } from 'zod';

export const MerchandiseorderScalarFieldEnumSchema = z.enum([
  'PONUMBER',
  'ORDERDATE',
  'RECEIVEDATE',
  'SUPPLIERID',
  'EMPLOYEEID',
  'SHIPPINGCOST',
]);
