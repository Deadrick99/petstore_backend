import { z } from 'zod';
import { AnimalCreateWithoutBreedInputObjectSchema } from './AnimalCreateWithoutBreedInput.schema';
import { AnimalUncheckedCreateWithoutBreedInputObjectSchema } from './AnimalUncheckedCreateWithoutBreedInput.schema';
import { AnimalCreateOrConnectWithoutBreedInputObjectSchema } from './AnimalCreateOrConnectWithoutBreedInput.schema';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalUncheckedCreateNestedManyWithoutBreedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => AnimalCreateWithoutBreedInputObjectSchema),
            z.lazy(() => AnimalCreateWithoutBreedInputObjectSchema).array(),
            z.lazy(() => AnimalUncheckedCreateWithoutBreedInputObjectSchema),
            z
              .lazy(() => AnimalUncheckedCreateWithoutBreedInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => AnimalCreateOrConnectWithoutBreedInputObjectSchema),
            z
              .lazy(() => AnimalCreateOrConnectWithoutBreedInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => AnimalWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const AnimalUncheckedCreateNestedManyWithoutBreedInputObjectSchema =
  Schema;
