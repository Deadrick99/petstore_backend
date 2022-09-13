import { z } from 'zod';
import { OrderItemCreateNestedManyWithoutMerchandiseInputObjectSchema } from './OrderItemCreateNestedManyWithoutMerchandiseInput.schema';
import { SaleItemCreateNestedManyWithoutMerchandiseInputObjectSchema } from './SaleItemCreateNestedManyWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseCreateWithoutCategoryInput> = z
  .object({
    ITEMID: z.number(),
    DESCRIPTION: z.string().optional().nullable(),
    QUANTITYONHAND: z.number().optional().nullable(),
    LISTPRICE: z.number().optional().nullable(),
    OrderItem: z
      .lazy(() => OrderItemCreateNestedManyWithoutMerchandiseInputObjectSchema)
      .optional(),
    SaleItem: z
      .lazy(() => SaleItemCreateNestedManyWithoutMerchandiseInputObjectSchema)
      .optional(),
  })
  .strict();

export const MerchandiseCreateWithoutCategoryInputObjectSchema = Schema;
