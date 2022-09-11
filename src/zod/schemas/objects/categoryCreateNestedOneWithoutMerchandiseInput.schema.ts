import { z } from 'zod';
import { categoryCreateWithoutMerchandiseInputObjectSchema } from './categoryCreateWithoutMerchandiseInput.schema';
import { categoryUncheckedCreateWithoutMerchandiseInputObjectSchema } from './categoryUncheckedCreateWithoutMerchandiseInput.schema';
import { categoryCreateOrConnectWithoutMerchandiseInputObjectSchema } from './categoryCreateOrConnectWithoutMerchandiseInput.schema';
import { categoryWhereUniqueInputObjectSchema } from './categoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryCreateNestedOneWithoutMerchandiseInput> =
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
        connect: z.lazy(() => categoryWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const categoryCreateNestedOneWithoutMerchandiseInputObjectSchema =
  Schema;
