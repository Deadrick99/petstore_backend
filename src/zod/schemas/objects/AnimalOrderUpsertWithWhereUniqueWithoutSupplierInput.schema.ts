import { z } from 'zod';
import { AnimalOrderWhereUniqueInputObjectSchema } from './AnimalOrderWhereUniqueInput.schema';
import { AnimalOrderUpdateWithoutSupplierInputObjectSchema } from './AnimalOrderUpdateWithoutSupplierInput.schema';
import { AnimalOrderUncheckedUpdateWithoutSupplierInputObjectSchema } from './AnimalOrderUncheckedUpdateWithoutSupplierInput.schema';
import { AnimalOrderCreateWithoutSupplierInputObjectSchema } from './AnimalOrderCreateWithoutSupplierInput.schema';
import { AnimalOrderUncheckedCreateWithoutSupplierInputObjectSchema } from './AnimalOrderUncheckedCreateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUpsertWithWhereUniqueWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AnimalOrderUpdateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => AnimalOrderUncheckedUpdateWithoutSupplierInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => AnimalOrderCreateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => AnimalOrderUncheckedCreateWithoutSupplierInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema =
  Schema;
