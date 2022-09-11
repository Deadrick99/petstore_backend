import { z } from 'zod';
import { merchandiseCreateNestedOneWithoutOrderitemInputObjectSchema } from './merchandiseCreateNestedOneWithoutOrderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemCreateWithoutMerchandiseorderInput> = z
  .object({
    QUANTITY: z.number().optional().nullable(),
    COST: z.number().optional().nullable(),
    merchandise: z.lazy(
      () => merchandiseCreateNestedOneWithoutOrderitemInputObjectSchema,
    ),
  })
  .strict();

export const orderitemCreateWithoutMerchandiseorderInputObjectSchema = Schema;
