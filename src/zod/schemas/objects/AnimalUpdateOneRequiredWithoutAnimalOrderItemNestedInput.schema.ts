import { z } from 'zod';
import { AnimalCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalCreateWithoutAnimalOrderItemInput.schema';
import { AnimalUncheckedCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalUncheckedCreateWithoutAnimalOrderItemInput.schema';
import { AnimalCreateOrConnectWithoutAnimalOrderItemInputObjectSchema } from './AnimalCreateOrConnectWithoutAnimalOrderItemInput.schema';
import { AnimalUpsertWithoutAnimalOrderItemInputObjectSchema } from './AnimalUpsertWithoutAnimalOrderItemInput.schema';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateWithoutAnimalOrderItemInputObjectSchema } from './AnimalUpdateWithoutAnimalOrderItemInput.schema';
import { AnimalUncheckedUpdateWithoutAnimalOrderItemInputObjectSchema } from './AnimalUncheckedUpdateWithoutAnimalOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalUpdateOneRequiredWithoutAnimalOrderItemNestedInput> =
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
        upsert: z
          .lazy(() => AnimalUpsertWithoutAnimalOrderItemInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => AnimalWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => AnimalUpdateWithoutAnimalOrderItemInputObjectSchema),
            z.lazy(
              () =>
                AnimalUncheckedUpdateWithoutAnimalOrderItemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const AnimalUpdateOneRequiredWithoutAnimalOrderItemNestedInputObjectSchema =
  Schema;
