import { z } from 'zod';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './AnimalOrderItemWhereUniqueInput.schema';
import { AnimalOrderItemCreateWithoutAnimalInputObjectSchema } from './AnimalOrderItemCreateWithoutAnimalInput.schema';
import { AnimalOrderItemUncheckedCreateWithoutAnimalInputObjectSchema } from './AnimalOrderItemUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemCreateOrConnectWithoutAnimalInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AnimalOrderItemCreateWithoutAnimalInputObjectSchema),
        z.lazy(
          () => AnimalOrderItemUncheckedCreateWithoutAnimalInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderItemCreateOrConnectWithoutAnimalInputObjectSchema =
  Schema;
