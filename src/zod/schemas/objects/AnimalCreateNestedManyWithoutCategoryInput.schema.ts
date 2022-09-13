import { z } from 'zod';
import { AnimalCreateWithoutCategoryInputObjectSchema } from './AnimalCreateWithoutCategoryInput.schema';
import { AnimalUncheckedCreateWithoutCategoryInputObjectSchema } from './AnimalUncheckedCreateWithoutCategoryInput.schema';
import { AnimalCreateOrConnectWithoutCategoryInputObjectSchema } from './AnimalCreateOrConnectWithoutCategoryInput.schema';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalCreateNestedManyWithoutCategoryInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => AnimalCreateWithoutCategoryInputObjectSchema),
            z.lazy(() => AnimalCreateWithoutCategoryInputObjectSchema).array(),
            z.lazy(() => AnimalUncheckedCreateWithoutCategoryInputObjectSchema),
            z
              .lazy(() => AnimalUncheckedCreateWithoutCategoryInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => AnimalCreateOrConnectWithoutCategoryInputObjectSchema),
            z
              .lazy(() => AnimalCreateOrConnectWithoutCategoryInputObjectSchema)
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

export const AnimalCreateNestedManyWithoutCategoryInputObjectSchema = Schema;
