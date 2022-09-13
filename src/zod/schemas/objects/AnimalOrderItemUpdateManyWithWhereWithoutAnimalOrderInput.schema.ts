import { z } from 'zod';
import { AnimalOrderItemScalarWhereInputObjectSchema } from './AnimalOrderItemScalarWhereInput.schema';
import { AnimalOrderItemUpdateManyMutationInputObjectSchema } from './AnimalOrderItemUpdateManyMutationInput.schema';
import { AnimalOrderItemUncheckedUpdateManyWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderItemUncheckedUpdateManyWithoutAnimalOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUpdateManyWithWhereWithoutAnimalOrderInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AnimalOrderItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            AnimalOrderItemUncheckedUpdateManyWithoutAnimalOrderItemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderItemUpdateManyWithWhereWithoutAnimalOrderInputObjectSchema =
  Schema;
