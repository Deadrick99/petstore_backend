import { z } from 'zod';
import { animalCreateWithoutBreedInputObjectSchema } from './animalCreateWithoutBreedInput.schema';
import { animalUncheckedCreateWithoutBreedInputObjectSchema } from './animalUncheckedCreateWithoutBreedInput.schema';
import { animalCreateOrConnectWithoutBreedInputObjectSchema } from './animalCreateOrConnectWithoutBreedInput.schema';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUncheckedCreateNestedManyWithoutBreedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => animalCreateWithoutBreedInputObjectSchema),
            z.lazy(() => animalCreateWithoutBreedInputObjectSchema).array(),
            z.lazy(() => animalUncheckedCreateWithoutBreedInputObjectSchema),
            z
              .lazy(() => animalUncheckedCreateWithoutBreedInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => animalCreateOrConnectWithoutBreedInputObjectSchema),
            z
              .lazy(() => animalCreateOrConnectWithoutBreedInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => animalWhereUniqueInputObjectSchema),
            z.lazy(() => animalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const animalUncheckedCreateNestedManyWithoutBreedInputObjectSchema =
  Schema;
