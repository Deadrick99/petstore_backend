import { z } from 'zod';
import { SupplierUpdateWithoutAnimalOrderInputObjectSchema } from './SupplierUpdateWithoutAnimalOrderInput.schema';
import { SupplierUncheckedUpdateWithoutAnimalOrderInputObjectSchema } from './SupplierUncheckedUpdateWithoutAnimalOrderInput.schema';
import { SupplierCreateWithoutAnimalOrderInputObjectSchema } from './SupplierCreateWithoutAnimalOrderInput.schema';
import { SupplierUncheckedCreateWithoutAnimalOrderInputObjectSchema } from './SupplierUncheckedCreateWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUpsertWithoutAnimalOrderInput> = z
  .object({
    update: z.union([
      z.lazy(() => SupplierUpdateWithoutAnimalOrderInputObjectSchema),
      z.lazy(() => SupplierUncheckedUpdateWithoutAnimalOrderInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SupplierCreateWithoutAnimalOrderInputObjectSchema),
      z.lazy(() => SupplierUncheckedCreateWithoutAnimalOrderInputObjectSchema),
    ]),
  })
  .strict();

export const SupplierUpsertWithoutAnimalOrderInputObjectSchema = Schema;
