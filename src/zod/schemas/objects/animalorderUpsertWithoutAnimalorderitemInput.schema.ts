import { z } from 'zod';
import { animalorderUpdateWithoutAnimalorderitemInputObjectSchema } from './animalorderUpdateWithoutAnimalorderitemInput.schema';
import { animalorderUncheckedUpdateWithoutAnimalorderitemInputObjectSchema } from './animalorderUncheckedUpdateWithoutAnimalorderitemInput.schema';
import { animalorderCreateWithoutAnimalorderitemInputObjectSchema } from './animalorderCreateWithoutAnimalorderitemInput.schema';
import { animalorderUncheckedCreateWithoutAnimalorderitemInputObjectSchema } from './animalorderUncheckedCreateWithoutAnimalorderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderUpsertWithoutAnimalorderitemInput> = z
  .object({
    update: z.union([
      z.lazy(() => animalorderUpdateWithoutAnimalorderitemInputObjectSchema),
      z.lazy(
        () => animalorderUncheckedUpdateWithoutAnimalorderitemInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => animalorderCreateWithoutAnimalorderitemInputObjectSchema),
      z.lazy(
        () => animalorderUncheckedCreateWithoutAnimalorderitemInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const animalorderUpsertWithoutAnimalorderitemInputObjectSchema = Schema;
