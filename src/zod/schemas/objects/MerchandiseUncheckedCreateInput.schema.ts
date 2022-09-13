import { z } from 'zod';
import { OrderItemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutMerchandiseInput.schema';
import { SaleItemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema } from './SaleItemUncheckedCreateNestedManyWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseUncheckedCreateInput> = z
  .object({
    ITEMID: z.number().optional(),
    DESCRIPTION: z.string().optional().nullable(),
    QUANTITYONHAND: z.number().optional().nullable(),
    LISTPRICE: z.number().optional().nullable(),
    CATEGORY: z.string().optional().nullable(),
    OrderItem: z
      .lazy(
        () =>
          OrderItemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema,
      )
      .optional(),
    SaleItem: z
      .lazy(
        () =>
          SaleItemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MerchandiseUncheckedCreateInputObjectSchema = Schema;
