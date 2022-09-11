import { z } from 'zod';
import { customerUpdateWithoutSaleInputObjectSchema } from './customerUpdateWithoutSaleInput.schema';
import { customerUncheckedUpdateWithoutSaleInputObjectSchema } from './customerUncheckedUpdateWithoutSaleInput.schema';
import { customerCreateWithoutSaleInputObjectSchema } from './customerCreateWithoutSaleInput.schema';
import { customerUncheckedCreateWithoutSaleInputObjectSchema } from './customerUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerUpsertWithoutSaleInput> = z
  .object({
    update: z.union([
      z.lazy(() => customerUpdateWithoutSaleInputObjectSchema),
      z.lazy(() => customerUncheckedUpdateWithoutSaleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => customerCreateWithoutSaleInputObjectSchema),
      z.lazy(() => customerUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const customerUpsertWithoutSaleInputObjectSchema = Schema;
