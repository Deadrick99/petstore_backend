import { z } from 'zod';
import { merchandiseWhereUniqueInputObjectSchema } from './merchandiseWhereUniqueInput.schema';
import { merchandiseUpdateWithoutCategoryInputObjectSchema } from './merchandiseUpdateWithoutCategoryInput.schema';
import { merchandiseUncheckedUpdateWithoutCategoryInputObjectSchema } from './merchandiseUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => merchandiseWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => merchandiseUpdateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => merchandiseUncheckedUpdateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const merchandiseUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
