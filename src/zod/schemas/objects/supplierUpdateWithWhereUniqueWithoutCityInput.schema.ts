import { z } from 'zod';
import { supplierWhereUniqueInputObjectSchema } from './supplierWhereUniqueInput.schema';
import { supplierUpdateWithoutCityInputObjectSchema } from './supplierUpdateWithoutCityInput.schema';
import { supplierUncheckedUpdateWithoutCityInputObjectSchema } from './supplierUncheckedUpdateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierUpdateWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => supplierWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => supplierUpdateWithoutCityInputObjectSchema),
        z.lazy(() => supplierUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const supplierUpdateWithWhereUniqueWithoutCityInputObjectSchema = Schema;
