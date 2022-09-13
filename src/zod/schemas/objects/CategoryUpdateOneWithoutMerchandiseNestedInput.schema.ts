import { z } from 'zod';
import { CategoryCreateWithoutMerchandiseInputObjectSchema } from './CategoryCreateWithoutMerchandiseInput.schema';
import { CategoryUncheckedCreateWithoutMerchandiseInputObjectSchema } from './CategoryUncheckedCreateWithoutMerchandiseInput.schema';
import { CategoryCreateOrConnectWithoutMerchandiseInputObjectSchema } from './CategoryCreateOrConnectWithoutMerchandiseInput.schema';
import { CategoryUpsertWithoutMerchandiseInputObjectSchema } from './CategoryUpsertWithoutMerchandiseInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutMerchandiseInputObjectSchema } from './CategoryUpdateWithoutMerchandiseInput.schema';
import { CategoryUncheckedUpdateWithoutMerchandiseInputObjectSchema } from './CategoryUncheckedUpdateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateOneWithoutMerchandiseNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => CategoryCreateWithoutMerchandiseInputObjectSchema),
            z.lazy(
              () => CategoryUncheckedCreateWithoutMerchandiseInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => CategoryCreateOrConnectWithoutMerchandiseInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => CategoryUpsertWithoutMerchandiseInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => CategoryUpdateWithoutMerchandiseInputObjectSchema),
            z.lazy(
              () => CategoryUncheckedUpdateWithoutMerchandiseInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const CategoryUpdateOneWithoutMerchandiseNestedInputObjectSchema =
  Schema;
