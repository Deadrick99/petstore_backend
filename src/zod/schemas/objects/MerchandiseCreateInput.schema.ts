import { z } from 'zod';
import { CategoryCreateNestedOneWithoutMerchandiseInputObjectSchema } from './CategoryCreateNestedOneWithoutMerchandiseInput.schema';
import { OrderItemCreateNestedManyWithoutMerchandiseInputObjectSchema } from './OrderItemCreateNestedManyWithoutMerchandiseInput.schema';
import { SaleItemCreateNestedManyWithoutMerchandiseInputObjectSchema } from './SaleItemCreateNestedManyWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseCreateInput> = z
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
    SaleItem: z
      .lazy(() => SaleItemCreateNestedManyWithoutMerchandiseInputObjectSchema)
      .optional(),
  })
  .strict();

export const MerchandiseCreateInputObjectSchema = Schema;
