import { z } from 'zod';
import { BreedWhereUniqueInputObjectSchema } from './BreedWhereUniqueInput.schema';
import { BreedUpdateWithoutCategoryInputObjectSchema } from './BreedUpdateWithoutCategoryInput.schema';
import { BreedUncheckedUpdateWithoutCategoryInputObjectSchema } from './BreedUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => BreedWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BreedUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => BreedUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const BreedUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
