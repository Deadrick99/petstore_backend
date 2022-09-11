import { z } from 'zod';
import { merchandiseorderCreateNestedOneWithoutOrderitemInputObjectSchema } from './merchandiseorderCreateNestedOneWithoutOrderitemInput.schema';
import { merchandiseCreateNestedOneWithoutOrderitemInputObjectSchema } from './merchandiseCreateNestedOneWithoutOrderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemCreateInput> = z
  .object({
    QUANTITY: z.number().optional().nullable(),
    COST: z.number().optional().nullable(),
    merchandiseorder: z.lazy(
      () => merchandiseorderCreateNestedOneWithoutOrderitemInputObjectSchema,
    ),
    merchandise: z.lazy(
      () => merchandiseCreateNestedOneWithoutOrderitemInputObjectSchema,
    ),
  })
  .strict();

export const orderitemCreateInputObjectSchema = Schema;
