import { z } from 'zod';

export const MerchandiseScalarFieldEnumSchema = z.enum([
  'ITEMID',
  'DESCRIPTION',
  'QUANTITYONHAND',
  'LISTPRICE',
  'CATEGORY',
]);
