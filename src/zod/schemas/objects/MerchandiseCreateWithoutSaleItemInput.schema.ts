import { z } from 'zod';
import { CategoryCreateNestedOneWithoutMerchandiseInputObjectSchema } from './CategoryCreateNestedOneWithoutMerchandiseInput.schema';
import { OrderItemCreateNestedManyWithoutMerchandiseInputObjectSchema } from './OrderItemCreateNestedManyWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseCreateWithoutSaleItemInput> = z
  .object({
    ITEMID: z.number(),
    DESCRIPTION: z.string().optional().nullable(),
    QUANTITYONHAND: z.number().optional().nullable(),
    LISTPRICE: z.number().optional().nullable(),
    Category: z
      .lazy(() => CategoryCreateNestedOneWithoutMerchandiseInputObjectSchema)
      .optional(),
    OrderItem: z
      .lazy(() => OrderItemCreateNestedManyWithoutMerchandiseInputObjectSchema)
      .optional(),
  })
  .strict();

export const MerchandiseCreateWithoutSaleItemInputObjectSchema = Schema;
