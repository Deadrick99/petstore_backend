import { z } from 'zod';
import { categoryCreateNestedOneWithoutMerchandiseInputObjectSchema } from './categoryCreateNestedOneWithoutMerchandiseInput.schema';
import { saleitemCreateNestedManyWithoutMerchandiseInputObjectSchema } from './saleitemCreateNestedManyWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseCreateWithoutOrderitemInput> = z
  .object({
    ITEMID: z.number(),
    DESCRIPTION: z.string().optional().nullable(),
    QUANTITYONHAND: z.number().optional().nullable(),
    LISTPRICE: z.number().optional().nullable(),
    category: z
      .lazy(() => categoryCreateNestedOneWithoutMerchandiseInputObjectSchema)
      .optional(),
    saleitem: z
      .lazy(() => saleitemCreateNestedManyWithoutMerchandiseInputObjectSchema)
      .optional(),
  })
  .strict();

export const merchandiseCreateWithoutOrderitemInputObjectSchema = Schema;
