import { z } from 'zod';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './AnimalOrderItemWhereUniqueInput.schema';
import { AnimalOrderItemUpdateWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemUpdateWithoutAnimalOrderInput.schema';
import { AnimalOrderItemUncheckedUpdateWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemUncheckedUpdateWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUpdateWithWhereUniqueWithoutAnimalOrderInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AnimalOrderItemUpdateWithoutAnimalOrderInputObjectSchema),
        z.lazy(
          () =>
            AnimalOrderItemUncheckedUpdateWithoutAnimalOrderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderItemUpdateWithWhereUniqueWithoutAnimalOrderInputObjectSchema =
  Schema;
