import { z } from 'zod';
import { cityUpdateWithoutEmployeeInputObjectSchema } from './cityUpdateWithoutEmployeeInput.schema';
import { cityUncheckedUpdateWithoutEmployeeInputObjectSchema } from './cityUncheckedUpdateWithoutEmployeeInput.schema';
import { cityCreateWithoutEmployeeInputObjectSchema } from './cityCreateWithoutEmployeeInput.schema';
import { cityUncheckedCreateWithoutEmployeeInputObjectSchema } from './cityUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityUpsertWithoutEmployeeInput> = z
  .object({
    update: z.union([
      z.lazy(() => cityUpdateWithoutEmployeeInputObjectSchema),
      z.lazy(() => cityUncheckedUpdateWithoutEmployeeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => cityCreateWithoutEmployeeInputObjectSchema),
      z.lazy(() => cityUncheckedCreateWithoutEmployeeInputObjectSchema),
    ]),
  })
  .strict();

export const cityUpsertWithoutEmployeeInputObjectSchema = Schema;
