import { z } from 'zod';
import { supplierUpdateWithoutAnimalorderInputObjectSchema } from './supplierUpdateWithoutAnimalorderInput.schema';
import { supplierUncheckedUpdateWithoutAnimalorderInputObjectSchema } from './supplierUncheckedUpdateWithoutAnimalorderInput.schema';
import { supplierCreateWithoutAnimalorderInputObjectSchema } from './supplierCreateWithoutAnimalorderInput.schema';
import { supplierUncheckedCreateWithoutAnimalorderInputObjectSchema } from './supplierUncheckedCreateWithoutAnimalorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierUpsertWithoutAnimalorderInput> = z
  .object({
    update: z.union([
      z.lazy(() => supplierUpdateWithoutAnimalorderInputObjectSchema),
      z.lazy(() => supplierUncheckedUpdateWithoutAnimalorderInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => supplierCreateWithoutAnimalorderInputObjectSchema),
      z.lazy(() => supplierUncheckedCreateWithoutAnimalorderInputObjectSchema),
    ]),
  })
  .strict();

export const supplierUpsertWithoutAnimalorderInputObjectSchema = Schema;
