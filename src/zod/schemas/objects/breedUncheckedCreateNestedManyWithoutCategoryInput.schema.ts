import { z } from 'zod';
import { breedCreateWithoutCategoryInputObjectSchema } from './breedCreateWithoutCategoryInput.schema';
import { breedUncheckedCreateWithoutCategoryInputObjectSchema } from './breedUncheckedCreateWithoutCategoryInput.schema';
import { breedCreateOrConnectWithoutCategoryInputObjectSchema } from './breedCreateOrConnectWithoutCategoryInput.schema';
import { breedWhereUniqueInputObjectSchema } from './breedWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedUncheckedCreateNestedManyWithoutCategoryInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => breedCreateWithoutCategoryInputObjectSchema),
            z.lazy(() => breedCreateWithoutCategoryInputObjectSchema).array(),
            z.lazy(() => breedUncheckedCreateWithoutCategoryInputObjectSchema),
            z
              .lazy(() => breedUncheckedCreateWithoutCategoryInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => breedCreateOrConnectWithoutCategoryInputObjectSchema),
            z
              .lazy(() => breedCreateOrConnectWithoutCategoryInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => breedWhereUniqueInputObjectSchema),
            z.lazy(() => breedWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const breedUncheckedCreateNestedManyWithoutCategoryInputObjectSchema =
  Schema;
