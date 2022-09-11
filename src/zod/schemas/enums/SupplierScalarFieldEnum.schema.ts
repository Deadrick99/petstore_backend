import { z } from 'zod';

export const SupplierScalarFieldEnumSchema = z.enum([
  'SUPPLIERID',
  'NAME',
  'CONTACTNAME',
  'PHONE',
  'ADDRESS',
  'ZIPCODE',
  'CITYID',
]);
