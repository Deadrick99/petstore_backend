import { z } from 'zod';
import { BreedScalarWhereInputObjectSchema } from './BreedScalarWhereInput.schema';
import { BreedUpdateManyMutationInputObjectSchema } from './BreedUpdateManyMutationInput.schema';
import { BreedUncheckedUpdateManyWithoutBreedInputObjectSchema } from './BreedUncheckedUpdateManyWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedUpdateManyWithWhereWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => BreedScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => BreedUpdateManyMutationInputObjectSchema),
      z.lazy(() => BreedUncheckedUpdateManyWithoutBreedInputObjectSchema),
    ]),
  })
  .strict();

export const BreedUpdateManyWithWhereWithoutCategoryInputObjectSchema = Schema;
