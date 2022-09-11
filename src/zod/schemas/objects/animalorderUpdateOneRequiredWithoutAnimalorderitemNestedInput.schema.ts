import { z } from 'zod';
import { animalorderCreateWithoutAnimalorderitemInputObjectSchema } from './animalorderCreateWithoutAnimalorderitemInput.schema';
import { animalorderUncheckedCreateWithoutAnimalorderitemInputObjectSchema } from './animalorderUncheckedCreateWithoutAnimalorderitemInput.schema';
import { animalorderCreateOrConnectWithoutAnimalorderitemInputObjectSchema } from './animalorderCreateOrConnectWithoutAnimalorderitemInput.schema';
import { animalorderUpsertWithoutAnimalorderitemInputObjectSchema } from './animalorderUpsertWithoutAnimalorderitemInput.schema';
import { animalorderWhereUniqueInputObjectSchema } from './animalorderWhereUniqueInput.schema';
import { animalorderUpdateWithoutAnimalorderitemInputObjectSchema } from './animalorderUpdateWithoutAnimalorderitemInput.schema';
import { animalorderUncheckedUpdateWithoutAnimalorderitemInputObjectSchema } from './animalorderUncheckedUpdateWithoutAnimalorderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderUpdateOneRequiredWithoutAnimalorderitemNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => animalorderCreateWithoutAnimalorderitemInputObjectSchema,
            ),
            z.lazy(
              () =>
                animalorderUncheckedCreateWithoutAnimalorderitemInputObjectSchema,
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
              animalorderCreateOrConnectWithoutAnimalorderitemInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => animalorderUpsertWithoutAnimalorderitemInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .lazy(() => animalorderWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => animalorderUpdateWithoutAnimalorderitemInputObjectSchema,
            ),
            z.lazy(
              () =>
                animalorderUncheckedUpdateWithoutAnimalorderitemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const animalorderUpdateOneRequiredWithoutAnimalorderitemNestedInputObjectSchema =
  Schema;
