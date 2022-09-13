import { z } from 'zod';
import { AnimalOrderWhereUniqueInputObjectSchema } from './AnimalOrderWhereUniqueInput.schema';
import { AnimalOrderUpdateWithoutEmployeeInputObjectSchema } from './AnimalOrderUpdateWithoutEmployeeInput.schema';
import { AnimalOrderUncheckedUpdateWithoutEmployeeInputObjectSchema } from './AnimalOrderUncheckedUpdateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUpdateWithWhereUniqueWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AnimalOrderUpdateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => AnimalOrderUncheckedUpdateWithoutEmployeeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema =
  Schema;
