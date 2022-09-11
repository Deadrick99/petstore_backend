import { z } from 'zod';
import { animalCreateWithoutAnimalorderitemInputObjectSchema } from './animalCreateWithoutAnimalorderitemInput.schema';
import { animalUncheckedCreateWithoutAnimalorderitemInputObjectSchema } from './animalUncheckedCreateWithoutAnimalorderitemInput.schema';
import { animalCreateOrConnectWithoutAnimalorderitemInputObjectSchema } from './animalCreateOrConnectWithoutAnimalorderitemInput.schema';
import { animalUpsertWithoutAnimalorderitemInputObjectSchema } from './animalUpsertWithoutAnimalorderitemInput.schema';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';
import { animalUpdateWithoutAnimalorderitemInputObjectSchema } from './animalUpdateWithoutAnimalorderitemInput.schema';
import { animalUncheckedUpdateWithoutAnimalorderitemInputObjectSchema } from './animalUncheckedUpdateWithoutAnimalorderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUpdateOneRequiredWithoutAnimalorderitemNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => animalCreateWithoutAnimalorderitemInputObjectSchema),
            z.lazy(
              () =>
                animalUncheckedCreateWithoutAnimalorderitemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => animalCreateOrConnectWithoutAnimalorderitemInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => animalUpsertWithoutAnimalorderitemInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => animalWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => animalUpdateWithoutAnimalorderitemInputObjectSchema),
            z.lazy(
              () =>
                animalUncheckedUpdateWithoutAnimalorderitemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const animalUpdateOneRequiredWithoutAnimalorderitemNestedInputObjectSchema =
  Schema;
