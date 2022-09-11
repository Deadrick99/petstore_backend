import { z } from 'zod';
import { animalorderitemWhereUniqueInputObjectSchema } from './animalorderitemWhereUniqueInput.schema';
import { animalorderitemUpdateWithoutAnimalorderInputObjectSchema } from './animalorderitemUpdateWithoutAnimalorderInput.schema';
import { animalorderitemUncheckedUpdateWithoutAnimalorderInputObjectSchema } from './animalorderitemUncheckedUpdateWithoutAnimalorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemUpdateWithWhereUniqueWithoutAnimalorderInput> =
  z
    .object({
      where: z.lazy(() => animalorderitemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => animalorderitemUpdateWithoutAnimalorderInputObjectSchema),
        z.lazy(
          () =>
            animalorderitemUncheckedUpdateWithoutAnimalorderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderitemUpdateWithWhereUniqueWithoutAnimalorderInputObjectSchema =
  Schema;
