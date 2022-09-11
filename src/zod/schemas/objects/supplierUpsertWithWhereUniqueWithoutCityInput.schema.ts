import { z } from 'zod';
import { supplierWhereUniqueInputObjectSchema } from './supplierWhereUniqueInput.schema';
import { supplierUpdateWithoutCityInputObjectSchema } from './supplierUpdateWithoutCityInput.schema';
import { supplierUncheckedUpdateWithoutCityInputObjectSchema } from './supplierUncheckedUpdateWithoutCityInput.schema';
import { supplierCreateWithoutCityInputObjectSchema } from './supplierCreateWithoutCityInput.schema';
import { supplierUncheckedCreateWithoutCityInputObjectSchema } from './supplierUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierUpsertWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => supplierWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => supplierUpdateWithoutCityInputObjectSchema),
        z.lazy(() => supplierUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => supplierCreateWithoutCityInputObjectSchema),
        z.lazy(() => supplierUncheckedCreateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const supplierUpsertWithWhereUniqueWithoutCityInputObjectSchema = Schema;
