import { z } from 'zod';
import { breedWhereUniqueInputObjectSchema } from './breedWhereUniqueInput.schema';
import { breedUpdateWithoutCategoryInputObjectSchema } from './breedUpdateWithoutCategoryInput.schema';
import { breedUncheckedUpdateWithoutCategoryInputObjectSchema } from './breedUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => breedWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => breedUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => breedUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const breedUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
