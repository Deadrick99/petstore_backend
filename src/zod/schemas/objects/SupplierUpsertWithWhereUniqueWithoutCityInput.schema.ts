import { z } from 'zod';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierUpdateWithoutCityInputObjectSchema } from './SupplierUpdateWithoutCityInput.schema';
import { SupplierUncheckedUpdateWithoutCityInputObjectSchema } from './SupplierUncheckedUpdateWithoutCityInput.schema';
import { SupplierCreateWithoutCityInputObjectSchema } from './SupplierCreateWithoutCityInput.schema';
import { SupplierUncheckedCreateWithoutCityInputObjectSchema } from './SupplierUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUpsertWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => SupplierWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SupplierUpdateWithoutCityInputObjectSchema),
        z.lazy(() => SupplierUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SupplierCreateWithoutCityInputObjectSchema),
        z.lazy(() => SupplierUncheckedCreateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const SupplierUpsertWithWhereUniqueWithoutCityInputObjectSchema = Schema;
