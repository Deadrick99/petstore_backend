import { z } from 'zod';
import { animalScalarWhereInputObjectSchema } from './animalScalarWhereInput.schema';
import { animalUpdateManyMutationInputObjectSchema } from './animalUpdateManyMutationInput.schema';
import { animalUncheckedUpdateManyWithoutAnimalInputObjectSchema } from './animalUncheckedUpdateManyWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUpdateManyWithWhereWithoutBreedInput> = z
  .object({
    where: z.lazy(() => animalScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => animalUpdateManyMutationInputObjectSchema),
      z.lazy(() => animalUncheckedUpdateManyWithoutAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const animalUpdateManyWithWhereWithoutBreedInputObjectSchema = Schema;
