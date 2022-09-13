import { z } from 'zod';
import { BreedWhereUniqueInputObjectSchema } from './BreedWhereUniqueInput.schema';
import { BreedUpdateWithoutCategoryInputObjectSchema } from './BreedUpdateWithoutCategoryInput.schema';
import { BreedUncheckedUpdateWithoutCategoryInputObjectSchema } from './BreedUncheckedUpdateWithoutCategoryInput.schema';
import { BreedCreateWithoutCategoryInputObjectSchema } from './BreedCreateWithoutCategoryInput.schema';
import { BreedUncheckedCreateWithoutCategoryInputObjectSchema } from './BreedUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => BreedWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BreedUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => BreedUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BreedCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => BreedUncheckedCreateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const BreedUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
