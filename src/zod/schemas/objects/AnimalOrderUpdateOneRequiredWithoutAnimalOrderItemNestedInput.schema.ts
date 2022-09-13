import { z } from 'zod';
import { AnimalOrderCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderCreateWithoutAnimalOrderItemInput.schema';
import { AnimalOrderUncheckedCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderUncheckedCreateWithoutAnimalOrderItemInput.schema';
import { AnimalOrderCreateOrConnectWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderCreateOrConnectWithoutAnimalOrderItemInput.schema';
import { AnimalOrderUpsertWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderUpsertWithoutAnimalOrderItemInput.schema';
import { AnimalOrderWhereUniqueInputObjectSchema } from './AnimalOrderWhereUniqueInput.schema';
import { AnimalOrderUpdateWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderUpdateWithoutAnimalOrderItemInput.schema';
import { AnimalOrderUncheckedUpdateWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderUncheckedUpdateWithoutAnimalOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUpdateOneRequiredWithoutAnimalOrderItemNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => AnimalOrderCreateWithoutAnimalOrderItemInputObjectSchema,
            ),
            z.lazy(
              () =>
                AnimalOrderUncheckedCreateWithoutAnimalOrderItemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () =>
              AnimalOrderCreateOrConnectWithoutAnimalOrderItemInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => AnimalOrderUpsertWithoutAnimalOrderItemInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .lazy(() => AnimalOrderWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => AnimalOrderUpdateWithoutAnimalOrderItemInputObjectSchema,
            ),
            z.lazy(
              () =>
                AnimalOrderUncheckedUpdateWithoutAnimalOrderItemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const AnimalOrderUpdateOneRequiredWithoutAnimalOrderItemNestedInputObjectSchema =
  Schema;
