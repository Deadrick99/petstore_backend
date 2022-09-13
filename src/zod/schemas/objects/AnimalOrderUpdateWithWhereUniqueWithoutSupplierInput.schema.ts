import { z } from 'zod';
import { AnimalOrderWhereUniqueInputObjectSchema } from './AnimalOrderWhereUniqueInput.schema';
import { AnimalOrderUpdateWithoutSupplierInputObjectSchema } from './AnimalOrderUpdateWithoutSupplierInput.schema';
import { AnimalOrderUncheckedUpdateWithoutSupplierInputObjectSchema } from './AnimalOrderUncheckedUpdateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUpdateWithWhereUniqueWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AnimalOrderUpdateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => AnimalOrderUncheckedUpdateWithoutSupplierInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema =
  Schema;
