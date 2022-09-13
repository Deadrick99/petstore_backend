import { z } from 'zod';
import { BreedWhereUniqueInputObjectSchema } from './BreedWhereUniqueInput.schema';
import { BreedCreateWithoutCategoryInputObjectSchema } from './BreedCreateWithoutCategoryInput.schema';
import { BreedUncheckedCreateWithoutCategoryInputObjectSchema } from './BreedUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedCreateOrConnectWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => BreedWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BreedCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => BreedUncheckedCreateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();

export const BreedCreateOrConnectWithoutCategoryInputObjectSchema = Schema;
