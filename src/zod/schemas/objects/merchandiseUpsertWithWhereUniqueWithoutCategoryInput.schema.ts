import { z } from 'zod';
import { merchandiseWhereUniqueInputObjectSchema } from './merchandiseWhereUniqueInput.schema';
import { merchandiseUpdateWithoutCategoryInputObjectSchema } from './merchandiseUpdateWithoutCategoryInput.schema';
import { merchandiseUncheckedUpdateWithoutCategoryInputObjectSchema } from './merchandiseUncheckedUpdateWithoutCategoryInput.schema';
import { merchandiseCreateWithoutCategoryInputObjectSchema } from './merchandiseCreateWithoutCategoryInput.schema';
import { merchandiseUncheckedCreateWithoutCategoryInputObjectSchema } from './merchandiseUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => merchandiseWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => merchandiseUpdateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => merchandiseUncheckedUpdateWithoutCategoryInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => merchandiseCreateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => merchandiseUncheckedCreateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const merchandiseUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
