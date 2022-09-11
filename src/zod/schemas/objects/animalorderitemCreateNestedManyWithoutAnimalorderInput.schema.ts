import { z } from 'zod';
import { animalorderitemCreateWithoutAnimalorderInputObjectSchema } from './animalorderitemCreateWithoutAnimalorderInput.schema';
import { animalorderitemUncheckedCreateWithoutAnimalorderInputObjectSchema } from './animalorderitemUncheckedCreateWithoutAnimalorderInput.schema';
import { animalorderitemCreateOrConnectWithoutAnimalorderInputObjectSchema } from './animalorderitemCreateOrConnectWithoutAnimalorderInput.schema';
import { animalorderitemWhereUniqueInputObjectSchema } from './animalorderitemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemCreateNestedManyWithoutAnimalorderInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => animalorderitemCreateWithoutAnimalorderInputObjectSchema,
            ),
            z
              .lazy(
                () => animalorderitemCreateWithoutAnimalorderInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                animalorderitemUncheckedCreateWithoutAnimalorderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderitemUncheckedCreateWithoutAnimalorderInputObjectSchema,
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
                animalorderitemCreateOrConnectWithoutAnimalorderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderitemCreateOrConnectWithoutAnimalorderInputObjectSchema,
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

export const animalorderitemCreateNestedManyWithoutAnimalorderInputObjectSchema =
  Schema;
