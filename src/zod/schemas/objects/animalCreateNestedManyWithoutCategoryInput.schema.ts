import { z } from 'zod';
import { animalCreateWithoutCategoryInputObjectSchema } from './animalCreateWithoutCategoryInput.schema';
import { animalUncheckedCreateWithoutCategoryInputObjectSchema } from './animalUncheckedCreateWithoutCategoryInput.schema';
import { animalCreateOrConnectWithoutCategoryInputObjectSchema } from './animalCreateOrConnectWithoutCategoryInput.schema';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalCreateNestedManyWithoutCategoryInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => animalCreateWithoutCategoryInputObjectSchema),
            z.lazy(() => animalCreateWithoutCategoryInputObjectSchema).array(),
            z.lazy(() => animalUncheckedCreateWithoutCategoryInputObjectSchema),
            z
              .lazy(() => animalUncheckedCreateWithoutCategoryInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => animalCreateOrConnectWithoutCategoryInputObjectSchema),
            z
              .lazy(() => animalCreateOrConnectWithoutCategoryInputObjectSchema)
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

export const animalCreateNestedManyWithoutCategoryInputObjectSchema = Schema;
