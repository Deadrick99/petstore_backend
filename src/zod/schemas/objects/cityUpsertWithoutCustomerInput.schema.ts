import { z } from 'zod';
import { cityUpdateWithoutCustomerInputObjectSchema } from './cityUpdateWithoutCustomerInput.schema';
import { cityUncheckedUpdateWithoutCustomerInputObjectSchema } from './cityUncheckedUpdateWithoutCustomerInput.schema';
import { cityCreateWithoutCustomerInputObjectSchema } from './cityCreateWithoutCustomerInput.schema';
import { cityUncheckedCreateWithoutCustomerInputObjectSchema } from './cityUncheckedCreateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityUpsertWithoutCustomerInput> = z
  .object({
    update: z.union([
      z.lazy(() => cityUpdateWithoutCustomerInputObjectSchema),
      z.lazy(() => cityUncheckedUpdateWithoutCustomerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => cityCreateWithoutCustomerInputObjectSchema),
      z.lazy(() => cityUncheckedCreateWithoutCustomerInputObjectSchema),
    ]),
  })
  .strict();

export const cityUpsertWithoutCustomerInputObjectSchema = Schema;
