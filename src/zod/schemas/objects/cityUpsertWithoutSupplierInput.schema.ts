import { z } from 'zod';
import { cityUpdateWithoutSupplierInputObjectSchema } from './cityUpdateWithoutSupplierInput.schema';
import { cityUncheckedUpdateWithoutSupplierInputObjectSchema } from './cityUncheckedUpdateWithoutSupplierInput.schema';
import { cityCreateWithoutSupplierInputObjectSchema } from './cityCreateWithoutSupplierInput.schema';
import { cityUncheckedCreateWithoutSupplierInputObjectSchema } from './cityUncheckedCreateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityUpsertWithoutSupplierInput> = z
  .object({
    update: z.union([
      z.lazy(() => cityUpdateWithoutSupplierInputObjectSchema),
      z.lazy(() => cityUncheckedUpdateWithoutSupplierInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => cityCreateWithoutSupplierInputObjectSchema),
      z.lazy(() => cityUncheckedCreateWithoutSupplierInputObjectSchema),
    ]),
  })
  .strict();

export const cityUpsertWithoutSupplierInputObjectSchema = Schema;
