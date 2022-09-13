import { z } from 'zod';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalCreateWithoutCategoryInputObjectSchema } from './AnimalCreateWithoutCategoryInput.schema';
import { AnimalUncheckedCreateWithoutCategoryInputObjectSchema } from './AnimalUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalCreateOrConnectWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AnimalCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => AnimalUncheckedCreateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();

export const AnimalCreateOrConnectWithoutCategoryInputObjectSchema = Schema;
