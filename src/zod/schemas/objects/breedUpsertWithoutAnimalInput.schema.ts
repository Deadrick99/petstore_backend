import { z } from 'zod';
import { breedUpdateWithoutAnimalInputObjectSchema } from './breedUpdateWithoutAnimalInput.schema';
import { breedUncheckedUpdateWithoutAnimalInputObjectSchema } from './breedUncheckedUpdateWithoutAnimalInput.schema';
import { breedCreateWithoutAnimalInputObjectSchema } from './breedCreateWithoutAnimalInput.schema';
import { breedUncheckedCreateWithoutAnimalInputObjectSchema } from './breedUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedUpsertWithoutAnimalInput> = z
  .object({
    update: z.union([
      z.lazy(() => breedUpdateWithoutAnimalInputObjectSchema),
      z.lazy(() => breedUncheckedUpdateWithoutAnimalInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => breedCreateWithoutAnimalInputObjectSchema),
      z.lazy(() => breedUncheckedCreateWithoutAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const breedUpsertWithoutAnimalInputObjectSchema = Schema;
