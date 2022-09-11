import { z } from 'zod';
import { categoryCreateWithoutMerchandiseInputObjectSchema } from './categoryCreateWithoutMerchandiseInput.schema';
import { categoryUncheckedCreateWithoutMerchandiseInputObjectSchema } from './categoryUncheckedCreateWithoutMerchandiseInput.schema';
import { categoryCreateOrConnectWithoutMerchandiseInputObjectSchema } from './categoryCreateOrConnectWithoutMerchandiseInput.schema';
import { categoryUpsertWithoutMerchandiseInputObjectSchema } from './categoryUpsertWithoutMerchandiseInput.schema';
import { categoryWhereUniqueInputObjectSchema } from './categoryWhereUniqueInput.schema';
import { categoryUpdateWithoutMerchandiseInputObjectSchema } from './categoryUpdateWithoutMerchandiseInput.schema';
import { categoryUncheckedUpdateWithoutMerchandiseInputObjectSchema } from './categoryUncheckedUpdateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryUpdateOneWithoutMerchandiseNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => categoryCreateWithoutMerchandiseInputObjectSchema),
            z.lazy(
              () => categoryUncheckedCreateWithoutMerchandiseInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => categoryCreateOrConnectWithoutMerchandiseInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => categoryUpsertWithoutMerchandiseInputObjectSchema)
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
        connect: z.lazy(() => categoryWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => categoryUpdateWithoutMerchandiseInputObjectSchema),
            z.lazy(
              () => categoryUncheckedUpdateWithoutMerchandiseInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const categoryUpdateOneWithoutMerchandiseNestedInputObjectSchema =
  Schema;
