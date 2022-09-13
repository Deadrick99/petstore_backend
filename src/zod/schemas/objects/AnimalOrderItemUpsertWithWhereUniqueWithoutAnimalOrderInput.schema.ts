import { z } from 'zod';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './AnimalOrderItemWhereUniqueInput.schema';
import { AnimalOrderItemUpdateWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemUpdateWithoutAnimalOrderInput.schema';
import { AnimalOrderItemUncheckedUpdateWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemUncheckedUpdateWithoutAnimalOrderInput.schema';
import { AnimalOrderItemCreateWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemCreateWithoutAnimalOrderInput.schema';
import { AnimalOrderItemUncheckedCreateWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemUncheckedCreateWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUpsertWithWhereUniqueWithoutAnimalOrderInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AnimalOrderItemUpdateWithoutAnimalOrderInputObjectSchema),
        z.lazy(
          () =>
            AnimalOrderItemUncheckedUpdateWithoutAnimalOrderInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => AnimalOrderItemCreateWithoutAnimalOrderInputObjectSchema),
        z.lazy(
          () =>
            AnimalOrderItemUncheckedCreateWithoutAnimalOrderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderItemUpsertWithWhereUniqueWithoutAnimalOrderInputObjectSchema =
  Schema;
