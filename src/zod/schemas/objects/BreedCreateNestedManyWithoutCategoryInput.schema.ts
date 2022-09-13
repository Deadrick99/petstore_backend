import { z } from 'zod';
import { BreedCreateWithoutCategoryInputObjectSchema } from './BreedCreateWithoutCategoryInput.schema';
import { BreedUncheckedCreateWithoutCategoryInputObjectSchema } from './BreedUncheckedCreateWithoutCategoryInput.schema';
import { BreedCreateOrConnectWithoutCategoryInputObjectSchema } from './BreedCreateOrConnectWithoutCategoryInput.schema';
import { BreedWhereUniqueInputObjectSchema } from './BreedWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedCreateNestedManyWithoutCategoryInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => BreedCreateWithoutCategoryInputObjectSchema),
            z.lazy(() => BreedCreateWithoutCategoryInputObjectSchema).array(),
            z.lazy(() => BreedUncheckedCreateWithoutCategoryInputObjectSchema),
            z
              .lazy(() => BreedUncheckedCreateWithoutCategoryInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => BreedCreateOrConnectWithoutCategoryInputObjectSchema),
            z
              .lazy(() => BreedCreateOrConnectWithoutCategoryInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => BreedWhereUniqueInputObjectSchema),
            z.lazy(() => BreedWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const BreedCreateNestedManyWithoutCategoryInputObjectSchema = Schema;
