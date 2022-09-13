import { z } from 'zod';
import { AnimalOrderWhereUniqueInputObjectSchema } from './AnimalOrderWhereUniqueInput.schema';
import { AnimalOrderCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderCreateWithoutAnimalOrderItemInput.schema';
import { AnimalOrderUncheckedCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderUncheckedCreateWithoutAnimalOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderCreateOrConnectWithoutAnimalOrderItemInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AnimalOrderCreateWithoutAnimalOrderItemInputObjectSchema),
        z.lazy(
          () =>
            AnimalOrderUncheckedCreateWithoutAnimalOrderItemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderCreateOrConnectWithoutAnimalOrderItemInputObjectSchema =
  Schema;
