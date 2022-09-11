import { z } from 'zod';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';
import { animalUpdateWithoutCategoryInputObjectSchema } from './animalUpdateWithoutCategoryInput.schema';
import { animalUncheckedUpdateWithoutCategoryInputObjectSchema } from './animalUncheckedUpdateWithoutCategoryInput.schema';
import { animalCreateWithoutCategoryInputObjectSchema } from './animalCreateWithoutCategoryInput.schema';
import { animalUncheckedCreateWithoutCategoryInputObjectSchema } from './animalUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => animalWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => animalUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => animalUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => animalCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => animalUncheckedCreateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const animalUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
