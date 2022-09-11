import { z } from 'zod';
import { animalorderCreateWithoutAnimalorderitemInputObjectSchema } from './animalorderCreateWithoutAnimalorderitemInput.schema';
import { animalorderUncheckedCreateWithoutAnimalorderitemInputObjectSchema } from './animalorderUncheckedCreateWithoutAnimalorderitemInput.schema';
import { animalorderCreateOrConnectWithoutAnimalorderitemInputObjectSchema } from './animalorderCreateOrConnectWithoutAnimalorderitemInput.schema';
import { animalorderWhereUniqueInputObjectSchema } from './animalorderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderCreateNestedOneWithoutAnimalorderitemInput> =
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
        connect: z
          .lazy(() => animalorderWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict(),
  ]);

export const animalorderCreateNestedOneWithoutAnimalorderitemInputObjectSchema =
  Schema;
