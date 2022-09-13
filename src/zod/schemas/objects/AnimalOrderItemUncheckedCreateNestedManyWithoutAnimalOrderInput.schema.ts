import { z } from 'zod';
import { AnimalOrderItemCreateWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemCreateWithoutAnimalOrderInput.schema';
import { AnimalOrderItemUncheckedCreateWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemUncheckedCreateWithoutAnimalOrderInput.schema';
import { AnimalOrderItemCreateOrConnectWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemCreateOrConnectWithoutAnimalOrderInput.schema';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './AnimalOrderItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUncheckedCreateNestedManyWithoutAnimalOrderInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => AnimalOrderItemCreateWithoutAnimalOrderInputObjectSchema,
            ),
            z
              .lazy(
                () => AnimalOrderItemCreateWithoutAnimalOrderInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                AnimalOrderItemUncheckedCreateWithoutAnimalOrderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderItemUncheckedCreateWithoutAnimalOrderInputObjectSchema,
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
                AnimalOrderItemCreateOrConnectWithoutAnimalOrderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderItemCreateOrConnectWithoutAnimalOrderInputObjectSchema,
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

export const AnimalOrderItemUncheckedCreateNestedManyWithoutAnimalOrderInputObjectSchema =
  Schema;
