import { z } from 'zod';
import { breedWhereUniqueInputObjectSchema } from './breedWhereUniqueInput.schema';
import { breedUpdateWithoutCategoryInputObjectSchema } from './breedUpdateWithoutCategoryInput.schema';
import { breedUncheckedUpdateWithoutCategoryInputObjectSchema } from './breedUncheckedUpdateWithoutCategoryInput.schema';
import { breedCreateWithoutCategoryInputObjectSchema } from './breedCreateWithoutCategoryInput.schema';
import { breedUncheckedCreateWithoutCategoryInputObjectSchema } from './breedUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => breedWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => breedUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => breedUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => breedCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => breedUncheckedCreateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const breedUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
