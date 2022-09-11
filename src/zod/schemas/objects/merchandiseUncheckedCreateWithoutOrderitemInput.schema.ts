import { z } from 'zod';
import { saleitemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema } from './saleitemUncheckedCreateNestedManyWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseUncheckedCreateWithoutOrderitemInput> =
  z
    .object({
      ITEMID: z.number(),
      DESCRIPTION: z.string().optional().nullable(),
      QUANTITYONHAND: z.number().optional().nullable(),
      LISTPRICE: z.number().optional().nullable(),
      CATEGORY: z.string().optional().nullable(),
      saleitem: z
        .lazy(
          () =>
            saleitemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const merchandiseUncheckedCreateWithoutOrderitemInputObjectSchema =
  Schema;
