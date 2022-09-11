import { z } from 'zod';
import { animalUpdateWithoutSaleanimalInputObjectSchema } from './animalUpdateWithoutSaleanimalInput.schema';
import { animalUncheckedUpdateWithoutSaleanimalInputObjectSchema } from './animalUncheckedUpdateWithoutSaleanimalInput.schema';
import { animalCreateWithoutSaleanimalInputObjectSchema } from './animalCreateWithoutSaleanimalInput.schema';
import { animalUncheckedCreateWithoutSaleanimalInputObjectSchema } from './animalUncheckedCreateWithoutSaleanimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUpsertWithoutSaleanimalInput> = z
  .object({
    update: z.union([
      z.lazy(() => animalUpdateWithoutSaleanimalInputObjectSchema),
      z.lazy(() => animalUncheckedUpdateWithoutSaleanimalInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => animalCreateWithoutSaleanimalInputObjectSchema),
      z.lazy(() => animalUncheckedCreateWithoutSaleanimalInputObjectSchema),
    ]),
  })
  .strict();

export const animalUpsertWithoutSaleanimalInputObjectSchema = Schema;
