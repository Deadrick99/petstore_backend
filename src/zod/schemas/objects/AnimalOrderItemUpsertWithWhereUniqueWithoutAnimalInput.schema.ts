import { z } from 'zod';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './AnimalOrderItemWhereUniqueInput.schema';
import { AnimalOrderItemUpdateWithoutAnimalInputObjectSchema } from './AnimalOrderItemUpdateWithoutAnimalInput.schema';
import { AnimalOrderItemUncheckedUpdateWithoutAnimalInputObjectSchema } from './AnimalOrderItemUncheckedUpdateWithoutAnimalInput.schema';
import { AnimalOrderItemCreateWithoutAnimalInputObjectSchema } from './AnimalOrderItemCreateWithoutAnimalInput.schema';
import { AnimalOrderItemUncheckedCreateWithoutAnimalInputObjectSchema } from './AnimalOrderItemUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUpsertWithWhereUniqueWithoutAnimalInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AnimalOrderItemUpdateWithoutAnimalInputObjectSchema),
        z.lazy(
          () => AnimalOrderItemUncheckedUpdateWithoutAnimalInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => AnimalOrderItemCreateWithoutAnimalInputObjectSchema),
        z.lazy(
          () => AnimalOrderItemUncheckedCreateWithoutAnimalInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderItemUpsertWithWhereUniqueWithoutAnimalInputObjectSchema =
  Schema;
