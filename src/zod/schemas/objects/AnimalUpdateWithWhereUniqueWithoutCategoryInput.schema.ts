import { z } from 'zod';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateWithoutCategoryInputObjectSchema } from './AnimalUpdateWithoutCategoryInput.schema';
import { AnimalUncheckedUpdateWithoutCategoryInputObjectSchema } from './AnimalUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AnimalUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => AnimalUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const AnimalUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
