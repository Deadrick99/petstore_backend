import { z } from 'zod';
import { animalUpdateWithoutAnimalorderitemInputObjectSchema } from './animalUpdateWithoutAnimalorderitemInput.schema';
import { animalUncheckedUpdateWithoutAnimalorderitemInputObjectSchema } from './animalUncheckedUpdateWithoutAnimalorderitemInput.schema';
import { animalCreateWithoutAnimalorderitemInputObjectSchema } from './animalCreateWithoutAnimalorderitemInput.schema';
import { animalUncheckedCreateWithoutAnimalorderitemInputObjectSchema } from './animalUncheckedCreateWithoutAnimalorderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUpsertWithoutAnimalorderitemInput> = z
  .object({
    update: z.union([
      z.lazy(() => animalUpdateWithoutAnimalorderitemInputObjectSchema),
      z.lazy(
        () => animalUncheckedUpdateWithoutAnimalorderitemInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => animalCreateWithoutAnimalorderitemInputObjectSchema),
      z.lazy(
        () => animalUncheckedCreateWithoutAnimalorderitemInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const animalUpsertWithoutAnimalorderitemInputObjectSchema = Schema;
