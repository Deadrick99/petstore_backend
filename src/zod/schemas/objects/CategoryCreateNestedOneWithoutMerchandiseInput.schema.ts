import { z } from 'zod';
import { CategoryCreateWithoutMerchandiseInputObjectSchema } from './CategoryCreateWithoutMerchandiseInput.schema';
import { CategoryUncheckedCreateWithoutMerchandiseInputObjectSchema } from './CategoryUncheckedCreateWithoutMerchandiseInput.schema';
import { CategoryCreateOrConnectWithoutMerchandiseInputObjectSchema } from './CategoryCreateOrConnectWithoutMerchandiseInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutMerchandiseInput> =
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
        connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const CategoryCreateNestedOneWithoutMerchandiseInputObjectSchema =
  Schema;
