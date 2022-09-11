import { z } from 'zod';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';
import { animalCreateWithoutCategoryInputObjectSchema } from './animalCreateWithoutCategoryInput.schema';
import { animalUncheckedCreateWithoutCategoryInputObjectSchema } from './animalUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalCreateOrConnectWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => animalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => animalCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => animalUncheckedCreateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();

export const animalCreateOrConnectWithoutCategoryInputObjectSchema = Schema;
