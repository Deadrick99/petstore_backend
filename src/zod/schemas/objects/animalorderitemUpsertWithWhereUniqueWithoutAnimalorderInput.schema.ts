import { z } from 'zod';
import { animalorderitemWhereUniqueInputObjectSchema } from './animalorderitemWhereUniqueInput.schema';
import { animalorderitemUpdateWithoutAnimalorderInputObjectSchema } from './animalorderitemUpdateWithoutAnimalorderInput.schema';
import { animalorderitemUncheckedUpdateWithoutAnimalorderInputObjectSchema } from './animalorderitemUncheckedUpdateWithoutAnimalorderInput.schema';
import { animalorderitemCreateWithoutAnimalorderInputObjectSchema } from './animalorderitemCreateWithoutAnimalorderInput.schema';
import { animalorderitemUncheckedCreateWithoutAnimalorderInputObjectSchema } from './animalorderitemUncheckedCreateWithoutAnimalorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemUpsertWithWhereUniqueWithoutAnimalorderInput> =
  z
    .object({
      where: z.lazy(() => animalorderitemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => animalorderitemUpdateWithoutAnimalorderInputObjectSchema),
        z.lazy(
          () =>
            animalorderitemUncheckedUpdateWithoutAnimalorderInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => animalorderitemCreateWithoutAnimalorderInputObjectSchema),
        z.lazy(
          () =>
            animalorderitemUncheckedCreateWithoutAnimalorderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderitemUpsertWithWhereUniqueWithoutAnimalorderInputObjectSchema =
  Schema;
