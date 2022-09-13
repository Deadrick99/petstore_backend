import { z } from 'zod';
import { AnimalCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalCreateWithoutAnimalOrderItemInput.schema';
import { AnimalUncheckedCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalUncheckedCreateWithoutAnimalOrderItemInput.schema';
import { AnimalCreateOrConnectWithoutAnimalOrderItemInputObjectSchema } from './AnimalCreateOrConnectWithoutAnimalOrderItemInput.schema';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalCreateNestedOneWithoutAnimalOrderItemInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => AnimalCreateWithoutAnimalOrderItemInputObjectSchema),
            z.lazy(
              () =>
                AnimalUncheckedCreateWithoutAnimalOrderItemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => AnimalCreateOrConnectWithoutAnimalOrderItemInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => AnimalWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const AnimalCreateNestedOneWithoutAnimalOrderItemInputObjectSchema =
  Schema;
