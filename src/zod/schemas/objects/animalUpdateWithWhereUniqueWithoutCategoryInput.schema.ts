import { z } from 'zod';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';
import { animalUpdateWithoutCategoryInputObjectSchema } from './animalUpdateWithoutCategoryInput.schema';
import { animalUncheckedUpdateWithoutCategoryInputObjectSchema } from './animalUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => animalWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => animalUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => animalUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const animalUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
