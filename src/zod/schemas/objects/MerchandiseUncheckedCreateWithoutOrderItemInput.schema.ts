import { z } from 'zod';
import { SaleItemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema } from './SaleItemUncheckedCreateNestedManyWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseUncheckedCreateWithoutOrderItemInput> =
  z
    .object({
      ITEMID: z.number(),
      DESCRIPTION: z.string().optional().nullable(),
      QUANTITYONHAND: z.number().optional().nullable(),
      LISTPRICE: z.number().optional().nullable(),
      CATEGORY: z.string().optional().nullable(),
      SaleItem: z
        .lazy(
          () =>
            SaleItemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MerchandiseUncheckedCreateWithoutOrderItemInputObjectSchema =
  Schema;
