import { z } from 'zod';
import { breedWhereUniqueInputObjectSchema } from './breedWhereUniqueInput.schema';
import { breedCreateWithoutCategoryInputObjectSchema } from './breedCreateWithoutCategoryInput.schema';
import { breedUncheckedCreateWithoutCategoryInputObjectSchema } from './breedUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedCreateOrConnectWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => breedWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => breedCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => breedUncheckedCreateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();

export const breedCreateOrConnectWithoutCategoryInputObjectSchema = Schema;
