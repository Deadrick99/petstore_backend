import { z } from 'zod';
import { orderitemCreateNestedManyWithoutMerchandiseInputObjectSchema } from './orderitemCreateNestedManyWithoutMerchandiseInput.schema';
import { saleitemCreateNestedManyWithoutMerchandiseInputObjectSchema } from './saleitemCreateNestedManyWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseCreateWithoutCategoryInput> = z
  .object({
    ITEMID: z.number(),
    DESCRIPTION: z.string().optional().nullable(),
    QUANTITYONHAND: z.number().optional().nullable(),
    LISTPRICE: z.number().optional().nullable(),
    orderitem: z
      .lazy(() => orderitemCreateNestedManyWithoutMerchandiseInputObjectSchema)
      .optional(),
    saleitem: z
      .lazy(() => saleitemCreateNestedManyWithoutMerchandiseInputObjectSchema)
      .optional(),
  })
  .strict();

export const merchandiseCreateWithoutCategoryInputObjectSchema = Schema;
