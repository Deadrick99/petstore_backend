import { z } from 'zod';
import { AnimalOrderWhereUniqueInputObjectSchema } from './AnimalOrderWhereUniqueInput.schema';
import { AnimalOrderCreateWithoutEmployeeInputObjectSchema } from './AnimalOrderCreateWithoutEmployeeInput.schema';
import { AnimalOrderUncheckedCreateWithoutEmployeeInputObjectSchema } from './AnimalOrderUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderCreateOrConnectWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AnimalOrderCreateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => AnimalOrderUncheckedCreateWithoutEmployeeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderCreateOrConnectWithoutEmployeeInputObjectSchema =
  Schema;
