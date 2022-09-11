import { z } from 'zod';
import { orderitemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema } from './orderitemUncheckedCreateNestedManyWithoutMerchandiseInput.schema';
import { saleitemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema } from './saleitemUncheckedCreateNestedManyWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseUncheckedCreateInput> = z
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
    saleitem: z
      .lazy(
        () =>
          saleitemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const merchandiseUncheckedCreateInputObjectSchema = Schema;
