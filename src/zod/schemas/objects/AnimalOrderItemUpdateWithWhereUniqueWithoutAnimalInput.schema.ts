import { z } from 'zod';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './AnimalOrderItemWhereUniqueInput.schema';
import { AnimalOrderItemUpdateWithoutAnimalInputObjectSchema } from './AnimalOrderItemUpdateWithoutAnimalInput.schema';
import { AnimalOrderItemUncheckedUpdateWithoutAnimalInputObjectSchema } from './AnimalOrderItemUncheckedUpdateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUpdateWithWhereUniqueWithoutAnimalInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AnimalOrderItemUpdateWithoutAnimalInputObjectSchema),
        z.lazy(
          () => AnimalOrderItemUncheckedUpdateWithoutAnimalInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderItemUpdateWithWhereUniqueWithoutAnimalInputObjectSchema =
  Schema;
