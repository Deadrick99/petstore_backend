import { z } from 'zod';
import { supplierWhereUniqueInputObjectSchema } from './supplierWhereUniqueInput.schema';
import { supplierCreateWithoutCityInputObjectSchema } from './supplierCreateWithoutCityInput.schema';
import { supplierUncheckedCreateWithoutCityInputObjectSchema } from './supplierUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierCreateOrConnectWithoutCityInput> = z
  .object({
    where: z.lazy(() => supplierWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => supplierCreateWithoutCityInputObjectSchema),
      z.lazy(() => supplierUncheckedCreateWithoutCityInputObjectSchema),
    ]),
  })
  .strict();

export const supplierCreateOrConnectWithoutCityInputObjectSchema = Schema;
