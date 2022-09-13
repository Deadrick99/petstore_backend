import { z } from 'zod';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';
import { CityCreateWithoutEmployeeInputObjectSchema } from './CityCreateWithoutEmployeeInput.schema';
import { CityUncheckedCreateWithoutEmployeeInputObjectSchema } from './CityUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateOrConnectWithoutEmployeeInput> = z
  .object({
    where: z.lazy(() => CityWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CityCreateWithoutEmployeeInputObjectSchema),
      z.lazy(() => CityUncheckedCreateWithoutEmployeeInputObjectSchema),
    ]),
  })
  .strict();

export const CityCreateOrConnectWithoutEmployeeInputObjectSchema = Schema;
