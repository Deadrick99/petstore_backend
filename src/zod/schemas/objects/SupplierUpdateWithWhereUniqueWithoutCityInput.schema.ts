import { z } from 'zod';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierUpdateWithoutCityInputObjectSchema } from './SupplierUpdateWithoutCityInput.schema';
import { SupplierUncheckedUpdateWithoutCityInputObjectSchema } from './SupplierUncheckedUpdateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUpdateWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => SupplierWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SupplierUpdateWithoutCityInputObjectSchema),
        z.lazy(() => SupplierUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const SupplierUpdateWithWhereUniqueWithoutCityInputObjectSchema = Schema;
