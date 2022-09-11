import { z } from 'zod';
import { animalorderitemCreateWithoutAnimalInputObjectSchema } from './animalorderitemCreateWithoutAnimalInput.schema';
import { animalorderitemUncheckedCreateWithoutAnimalInputObjectSchema } from './animalorderitemUncheckedCreateWithoutAnimalInput.schema';
import { animalorderitemCreateOrConnectWithoutAnimalInputObjectSchema } from './animalorderitemCreateOrConnectWithoutAnimalInput.schema';
import { animalorderitemWhereUniqueInputObjectSchema } from './animalorderitemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemUncheckedCreateNestedManyWithoutAnimalInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => animalorderitemCreateWithoutAnimalInputObjectSchema),
            z
              .lazy(() => animalorderitemCreateWithoutAnimalInputObjectSchema)
              .array(),
            z.lazy(
              () =>
                animalorderitemUncheckedCreateWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderitemUncheckedCreateWithoutAnimalInputObjectSchema,
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
                animalorderitemCreateOrConnectWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderitemCreateOrConnectWithoutAnimalInputObjectSchema,
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
            z.lazy(() => animalorderitemWhereUniqueInputObjectSchema),
            z.lazy(() => animalorderitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const animalorderitemUncheckedCreateNestedManyWithoutAnimalInputObjectSchema =
  Schema;
