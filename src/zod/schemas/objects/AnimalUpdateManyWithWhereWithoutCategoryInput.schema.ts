import { z } from 'zod';
import { AnimalScalarWhereInputObjectSchema } from './AnimalScalarWhereInput.schema';
import { AnimalUpdateManyMutationInputObjectSchema } from './AnimalUpdateManyMutationInput.schema';
import { AnimalUncheckedUpdateManyWithoutAnimalInputObjectSchema } from './AnimalUncheckedUpdateManyWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalUpdateManyWithWhereWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => AnimalScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AnimalUpdateManyMutationInputObjectSchema),
        z.lazy(() => AnimalUncheckedUpdateManyWithoutAnimalInputObjectSchema),
      ]),
    })
    .strict();

export const AnimalUpdateManyWithWhereWithoutCategoryInputObjectSchema = Schema;
