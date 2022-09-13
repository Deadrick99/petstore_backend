import { z } from 'zod';
import { OrderItemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseUncheckedCreateWithoutSaleItemInput> =
  z
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
    })
    .strict();

export const MerchandiseUncheckedCreateWithoutSaleItemInputObjectSchema =
  Schema;
