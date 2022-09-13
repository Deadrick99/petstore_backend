import { z } from 'zod';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutMerchandiseInputObjectSchema } from './CategoryCreateWithoutMerchandiseInput.schema';
import { CategoryUncheckedCreateWithoutMerchandiseInputObjectSchema } from './CategoryUncheckedCreateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CategoryCreateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => CategoryUncheckedCreateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CategoryCreateOrConnectWithoutMerchandiseInputObjectSchema =
  Schema;
