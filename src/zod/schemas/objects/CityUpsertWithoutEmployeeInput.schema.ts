import { z } from 'zod';
import { CityUpdateWithoutEmployeeInputObjectSchema } from './CityUpdateWithoutEmployeeInput.schema';
import { CityUncheckedUpdateWithoutEmployeeInputObjectSchema } from './CityUncheckedUpdateWithoutEmployeeInput.schema';
import { CityCreateWithoutEmployeeInputObjectSchema } from './CityCreateWithoutEmployeeInput.schema';
import { CityUncheckedCreateWithoutEmployeeInputObjectSchema } from './CityUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityUpsertWithoutEmployeeInput> = z
  .object({
    update: z.union([
      z.lazy(() => CityUpdateWithoutEmployeeInputObjectSchema),
      z.lazy(() => CityUncheckedUpdateWithoutEmployeeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CityCreateWithoutEmployeeInputObjectSchema),
      z.lazy(() => CityUncheckedCreateWithoutEmployeeInputObjectSchema),
    ]),
  })
  .strict();

export const CityUpsertWithoutEmployeeInputObjectSchema = Schema;
