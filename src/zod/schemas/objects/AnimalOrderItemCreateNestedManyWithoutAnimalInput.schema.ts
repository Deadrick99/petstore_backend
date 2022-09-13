import { z } from 'zod';
import { AnimalOrderItemCreateWithoutAnimalInputObjectSchema } from './AnimalOrderItemCreateWithoutAnimalInput.schema';
import { AnimalOrderItemUncheckedCreateWithoutAnimalInputObjectSchema } from './AnimalOrderItemUncheckedCreateWithoutAnimalInput.schema';
import { AnimalOrderItemCreateOrConnectWithoutAnimalInputObjectSchema } from './AnimalOrderItemCreateOrConnectWithoutAnimalInput.schema';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './AnimalOrderItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemCreateNestedManyWithoutAnimalInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => AnimalOrderItemCreateWithoutAnimalInputObjectSchema),
            z
              .lazy(() => AnimalOrderItemCreateWithoutAnimalInputObjectSchema)
              .array(),
            z.lazy(
              () =>
                AnimalOrderItemUncheckedCreateWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderItemUncheckedCreateWithoutAnimalInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(
              () =>
                AnimalOrderItemCreateOrConnectWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderItemCreateOrConnectWithoutAnimalInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const AnimalOrderItemCreateNestedManyWithoutAnimalInputObjectSchema =
  Schema;
