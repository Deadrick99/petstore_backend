import { z } from 'zod';
import { animalorderitemWhereUniqueInputObjectSchema } from './animalorderitemWhereUniqueInput.schema';
import { animalorderitemUpdateWithoutAnimalInputObjectSchema } from './animalorderitemUpdateWithoutAnimalInput.schema';
import { animalorderitemUncheckedUpdateWithoutAnimalInputObjectSchema } from './animalorderitemUncheckedUpdateWithoutAnimalInput.schema';
import { animalorderitemCreateWithoutAnimalInputObjectSchema } from './animalorderitemCreateWithoutAnimalInput.schema';
import { animalorderitemUncheckedCreateWithoutAnimalInputObjectSchema } from './animalorderitemUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemUpsertWithWhereUniqueWithoutAnimalInput> =
  z
    .object({
      where: z.lazy(() => animalorderitemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => animalorderitemUpdateWithoutAnimalInputObjectSchema),
        z.lazy(
          () => animalorderitemUncheckedUpdateWithoutAnimalInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => animalorderitemCreateWithoutAnimalInputObjectSchema),
        z.lazy(
          () => animalorderitemUncheckedCreateWithoutAnimalInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderitemUpsertWithWhereUniqueWithoutAnimalInputObjectSchema =
  Schema;
