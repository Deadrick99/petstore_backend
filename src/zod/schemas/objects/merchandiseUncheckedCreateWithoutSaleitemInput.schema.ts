import { z } from 'zod';
import { orderitemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema } from './orderitemUncheckedCreateNestedManyWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseUncheckedCreateWithoutSaleitemInput> =
  z
    .object({
      ITEMID: z.number(),
      DESCRIPTION: z.string().optional().nullable(),
      QUANTITYONHAND: z.number().optional().nullable(),
      LISTPRICE: z.number().optional().nullable(),
      CATEGORY: z.string().optional().nullable(),
      orderitem: z
        .lazy(
          () =>
            orderitemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const merchandiseUncheckedCreateWithoutSaleitemInputObjectSchema =
  Schema;
