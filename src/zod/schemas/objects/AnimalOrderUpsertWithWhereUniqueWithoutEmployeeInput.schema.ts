import { z } from 'zod';
import { AnimalOrderWhereUniqueInputObjectSchema } from './AnimalOrderWhereUniqueInput.schema';
import { AnimalOrderUpdateWithoutEmployeeInputObjectSchema } from './AnimalOrderUpdateWithoutEmployeeInput.schema';
import { AnimalOrderUncheckedUpdateWithoutEmployeeInputObjectSchema } from './AnimalOrderUncheckedUpdateWithoutEmployeeInput.schema';
import { AnimalOrderCreateWithoutEmployeeInputObjectSchema } from './AnimalOrderCreateWithoutEmployeeInput.schema';
import { AnimalOrderUncheckedCreateWithoutEmployeeInputObjectSchema } from './AnimalOrderUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUpsertWithWhereUniqueWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AnimalOrderUpdateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => AnimalOrderUncheckedUpdateWithoutEmployeeInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => AnimalOrderCreateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => AnimalOrderUncheckedCreateWithoutEmployeeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema =
  Schema;
