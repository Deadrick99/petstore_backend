import { z } from 'zod';
import { merchandiseWhereUniqueInputObjectSchema } from './merchandiseWhereUniqueInput.schema';
import { merchandiseCreateWithoutCategoryInputObjectSchema } from './merchandiseCreateWithoutCategoryInput.schema';
import { merchandiseUncheckedCreateWithoutCategoryInputObjectSchema } from './merchandiseUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseCreateOrConnectWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => merchandiseWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => merchandiseCreateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => merchandiseUncheckedCreateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const merchandiseCreateOrConnectWithoutCategoryInputObjectSchema =
  Schema;
