import { z } from 'zod';
import { AnimalOrderScalarWhereInputObjectSchema } from './AnimalOrderScalarWhereInput.schema';
import { AnimalOrderUpdateManyMutationInputObjectSchema } from './AnimalOrderUpdateManyMutationInput.schema';
import { AnimalOrderUncheckedUpdateManyWithoutAnimalOrderInputObjectSchema } from './AnimalOrderUncheckedUpdateManyWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUpdateManyWithWhereWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AnimalOrderUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            AnimalOrderUncheckedUpdateManyWithoutAnimalOrderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderUpdateManyWithWhereWithoutEmployeeInputObjectSchema =
  Schema;
