import { z } from 'zod';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateWithoutCategoryInputObjectSchema } from './AnimalUpdateWithoutCategoryInput.schema';
import { AnimalUncheckedUpdateWithoutCategoryInputObjectSchema } from './AnimalUncheckedUpdateWithoutCategoryInput.schema';
import { AnimalCreateWithoutCategoryInputObjectSchema } from './AnimalCreateWithoutCategoryInput.schema';
import { AnimalUncheckedCreateWithoutCategoryInputObjectSchema } from './AnimalUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AnimalUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => AnimalUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => AnimalCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => AnimalUncheckedCreateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const AnimalUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
