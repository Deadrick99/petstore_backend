import { z } from 'zod';
import { merchandiseorderCreateNestedOneWithoutOrderitemInputObjectSchema } from './merchandiseorderCreateNestedOneWithoutOrderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemCreateWithoutMerchandiseInput> = z
  .object({
    QUANTITY: z.number().optional().nullable(),
    COST: z.number().optional().nullable(),
    merchandiseorder: z.lazy(
      () => merchandiseorderCreateNestedOneWithoutOrderitemInputObjectSchema,
    ),
  })
  .strict();

export const orderitemCreateWithoutMerchandiseInputObjectSchema = Schema;
