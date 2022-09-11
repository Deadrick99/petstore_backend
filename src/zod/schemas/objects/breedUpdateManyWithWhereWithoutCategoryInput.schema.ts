import { z } from 'zod';
import { breedScalarWhereInputObjectSchema } from './breedScalarWhereInput.schema';
import { breedUpdateManyMutationInputObjectSchema } from './breedUpdateManyMutationInput.schema';
import { breedUncheckedUpdateManyWithoutBreedInputObjectSchema } from './breedUncheckedUpdateManyWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedUpdateManyWithWhereWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => breedScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => breedUpdateManyMutationInputObjectSchema),
      z.lazy(() => breedUncheckedUpdateManyWithoutBreedInputObjectSchema),
    ]),
  })
  .strict();

export const breedUpdateManyWithWhereWithoutCategoryInputObjectSchema = Schema;
