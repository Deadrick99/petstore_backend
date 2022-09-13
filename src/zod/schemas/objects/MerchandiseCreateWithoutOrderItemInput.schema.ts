import { z } from 'zod';
import { CategoryCreateNestedOneWithoutMerchandiseInputObjectSchema } from './CategoryCreateNestedOneWithoutMerchandiseInput.schema';
import { SaleItemCreateNestedManyWithoutMerchandiseInputObjectSchema } from './SaleItemCreateNestedManyWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseCreateWithoutOrderItemInput> = z
  .object({
    DESCRIPTION: z.string().optional().nullable(),
    QUANTITYONHAND: z.number().optional().nullable(),
    LISTPRICE: z.number().optional().nullable(),
    Category: z
      .lazy(() => CategoryCreateNestedOneWithoutMerchandiseInputObjectSchema)
      .optional(),
    SaleItem: z
      .lazy(() => SaleItemCreateNestedManyWithoutMerchandiseInputObjectSchema)
      .optional(),
  })
  .strict();

export const MerchandiseCreateWithoutOrderItemInputObjectSchema = Schema;
