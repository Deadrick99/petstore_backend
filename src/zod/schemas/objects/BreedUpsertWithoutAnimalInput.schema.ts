import { z } from 'zod';
import { BreedUpdateWithoutAnimalInputObjectSchema } from './BreedUpdateWithoutAnimalInput.schema';
import { BreedUncheckedUpdateWithoutAnimalInputObjectSchema } from './BreedUncheckedUpdateWithoutAnimalInput.schema';
import { BreedCreateWithoutAnimalInputObjectSchema } from './BreedCreateWithoutAnimalInput.schema';
import { BreedUncheckedCreateWithoutAnimalInputObjectSchema } from './BreedUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedUpsertWithoutAnimalInput> = z
  .object({
    update: z.union([
      z.lazy(() => BreedUpdateWithoutAnimalInputObjectSchema),
      z.lazy(() => BreedUncheckedUpdateWithoutAnimalInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BreedCreateWithoutAnimalInputObjectSchema),
      z.lazy(() => BreedUncheckedCreateWithoutAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const BreedUpsertWithoutAnimalInputObjectSchema = Schema;
