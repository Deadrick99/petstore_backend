import { z } from 'zod';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierCreateWithoutCityInputObjectSchema } from './SupplierCreateWithoutCityInput.schema';
import { SupplierUncheckedCreateWithoutCityInputObjectSchema } from './SupplierUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierCreateOrConnectWithoutCityInput> = z
  .object({
    where: z.lazy(() => SupplierWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SupplierCreateWithoutCityInputObjectSchema),
      z.lazy(() => SupplierUncheckedCreateWithoutCityInputObjectSchema),
    ]),
  })
  .strict();

export const SupplierCreateOrConnectWithoutCityInputObjectSchema = Schema;
