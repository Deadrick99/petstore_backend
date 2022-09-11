import { z } from 'zod';
import { categoryWhereUniqueInputObjectSchema } from './categoryWhereUniqueInput.schema';
import { categoryCreateWithoutMerchandiseInputObjectSchema } from './categoryCreateWithoutMerchandiseInput.schema';
import { categoryUncheckedCreateWithoutMerchandiseInputObjectSchema } from './categoryUncheckedCreateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryCreateOrConnectWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => categoryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => categoryCreateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => categoryUncheckedCreateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const categoryCreateOrConnectWithoutMerchandiseInputObjectSchema =
  Schema;
