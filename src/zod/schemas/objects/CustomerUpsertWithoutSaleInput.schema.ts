import { z } from 'zod';
import { CustomerUpdateWithoutSaleInputObjectSchema } from './CustomerUpdateWithoutSaleInput.schema';
import { CustomerUncheckedUpdateWithoutSaleInputObjectSchema } from './CustomerUncheckedUpdateWithoutSaleInput.schema';
import { CustomerCreateWithoutSaleInputObjectSchema } from './CustomerCreateWithoutSaleInput.schema';
import { CustomerUncheckedCreateWithoutSaleInputObjectSchema } from './CustomerUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUpsertWithoutSaleInput> = z
  .object({
    update: z.union([
      z.lazy(() => CustomerUpdateWithoutSaleInputObjectSchema),
      z.lazy(() => CustomerUncheckedUpdateWithoutSaleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CustomerCreateWithoutSaleInputObjectSchema),
      z.lazy(() => CustomerUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const CustomerUpsertWithoutSaleInputObjectSchema = Schema;
