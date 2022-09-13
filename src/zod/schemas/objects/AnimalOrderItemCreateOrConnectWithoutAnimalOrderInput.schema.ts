import { z } from 'zod';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './AnimalOrderItemWhereUniqueInput.schema';
import { AnimalOrderItemCreateWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemCreateWithoutAnimalOrderInput.schema';
import { AnimalOrderItemUncheckedCreateWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemUncheckedCreateWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemCreateOrConnectWithoutAnimalOrderInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AnimalOrderItemCreateWithoutAnimalOrderInputObjectSchema),
        z.lazy(
          () =>
            AnimalOrderItemUncheckedCreateWithoutAnimalOrderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderItemCreateOrConnectWithoutAnimalOrderInputObjectSchema =
  Schema;
