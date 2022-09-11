import { z } from 'zod';
import { merchandiseCreateWithoutCategoryInputObjectSchema } from './merchandiseCreateWithoutCategoryInput.schema';
import { merchandiseUncheckedCreateWithoutCategoryInputObjectSchema } from './merchandiseUncheckedCreateWithoutCategoryInput.schema';
import { merchandiseCreateOrConnectWithoutCategoryInputObjectSchema } from './merchandiseCreateOrConnectWithoutCategoryInput.schema';
import { merchandiseWhereUniqueInputObjectSchema } from './merchandiseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseCreateNestedManyWithoutCategoryInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => merchandiseCreateWithoutCategoryInputObjectSchema),
            z
              .lazy(() => merchandiseCreateWithoutCategoryInputObjectSchema)
              .array(),
            z.lazy(
              () => merchandiseUncheckedCreateWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseUncheckedCreateWithoutCategoryInputObjectSchema,
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
              () => merchandiseCreateOrConnectWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseCreateOrConnectWithoutCategoryInputObjectSchema,
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
            z.lazy(() => merchandiseWhereUniqueInputObjectSchema),
            z.lazy(() => merchandiseWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const merchandiseCreateNestedManyWithoutCategoryInputObjectSchema =
  Schema;
