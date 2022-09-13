import { z } from 'zod';
import { CityUpdateWithoutSupplierInputObjectSchema } from './CityUpdateWithoutSupplierInput.schema';
import { CityUncheckedUpdateWithoutSupplierInputObjectSchema } from './CityUncheckedUpdateWithoutSupplierInput.schema';
import { CityCreateWithoutSupplierInputObjectSchema } from './CityCreateWithoutSupplierInput.schema';
import { CityUncheckedCreateWithoutSupplierInputObjectSchema } from './CityUncheckedCreateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityUpsertWithoutSupplierInput> = z
  .object({
    update: z.union([
      z.lazy(() => CityUpdateWithoutSupplierInputObjectSchema),
      z.lazy(() => CityUncheckedUpdateWithoutSupplierInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CityCreateWithoutSupplierInputObjectSchema),
      z.lazy(() => CityUncheckedCreateWithoutSupplierInputObjectSchema),
    ]),
  })
  .strict();

export const CityUpsertWithoutSupplierInputObjectSchema = Schema;
