import { z } from 'zod';
import { cityWhereUniqueInputObjectSchema } from './cityWhereUniqueInput.schema';
import { cityCreateWithoutEmployeeInputObjectSchema } from './cityCreateWithoutEmployeeInput.schema';
import { cityUncheckedCreateWithoutEmployeeInputObjectSchema } from './cityUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityCreateOrConnectWithoutEmployeeInput> = z
  .object({
    where: z.lazy(() => cityWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => cityCreateWithoutEmployeeInputObjectSchema),
      z.lazy(() => cityUncheckedCreateWithoutEmployeeInputObjectSchema),
    ]),
  })
  .strict();

export const cityCreateOrConnectWithoutEmployeeInputObjectSchema = Schema;
