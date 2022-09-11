import { z } from 'zod';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';
import { animalUpdateWithoutBreedInputObjectSchema } from './animalUpdateWithoutBreedInput.schema';
import { animalUncheckedUpdateWithoutBreedInputObjectSchema } from './animalUncheckedUpdateWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUpdateWithWhereUniqueWithoutBreedInput> = z
  .object({
    where: z.lazy(() => animalWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => animalUpdateWithoutBreedInputObjectSchema),
      z.lazy(() => animalUncheckedUpdateWithoutBreedInputObjectSchema),
    ]),
  })
  .strict();

export const animalUpdateWithWhereUniqueWithoutBreedInputObjectSchema = Schema;
