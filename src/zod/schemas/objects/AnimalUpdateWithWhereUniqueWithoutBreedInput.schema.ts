import { z } from 'zod';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateWithoutBreedInputObjectSchema } from './AnimalUpdateWithoutBreedInput.schema';
import { AnimalUncheckedUpdateWithoutBreedInputObjectSchema } from './AnimalUncheckedUpdateWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalUpdateWithWhereUniqueWithoutBreedInput> = z
  .object({
    where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => AnimalUpdateWithoutBreedInputObjectSchema),
      z.lazy(() => AnimalUncheckedUpdateWithoutBreedInputObjectSchema),
    ]),
  })
  .strict();

export const AnimalUpdateWithWhereUniqueWithoutBreedInputObjectSchema = Schema;
