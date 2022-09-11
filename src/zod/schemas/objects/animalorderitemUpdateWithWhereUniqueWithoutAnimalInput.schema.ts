import { z } from 'zod';
import { animalorderitemWhereUniqueInputObjectSchema } from './animalorderitemWhereUniqueInput.schema';
import { animalorderitemUpdateWithoutAnimalInputObjectSchema } from './animalorderitemUpdateWithoutAnimalInput.schema';
import { animalorderitemUncheckedUpdateWithoutAnimalInputObjectSchema } from './animalorderitemUncheckedUpdateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemUpdateWithWhereUniqueWithoutAnimalInput> =
  z
    .object({
      where: z.lazy(() => animalorderitemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => animalorderitemUpdateWithoutAnimalInputObjectSchema),
        z.lazy(
          () => animalorderitemUncheckedUpdateWithoutAnimalInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderitemUpdateWithWhereUniqueWithoutAnimalInputObjectSchema =
  Schema;
