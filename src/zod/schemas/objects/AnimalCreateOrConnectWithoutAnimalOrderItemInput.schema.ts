import { z } from 'zod';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalCreateWithoutAnimalOrderItemInput.schema';
import { AnimalUncheckedCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalUncheckedCreateWithoutAnimalOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalCreateOrConnectWithoutAnimalOrderItemInput> =
  z
    .object({
      where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AnimalCreateWithoutAnimalOrderItemInputObjectSchema),
        z.lazy(
          () => AnimalUncheckedCreateWithoutAnimalOrderItemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalCreateOrConnectWithoutAnimalOrderItemInputObjectSchema =
  Schema;
