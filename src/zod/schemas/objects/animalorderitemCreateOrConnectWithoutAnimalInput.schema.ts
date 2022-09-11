import { z } from 'zod';
import { animalorderitemWhereUniqueInputObjectSchema } from './animalorderitemWhereUniqueInput.schema';
import { animalorderitemCreateWithoutAnimalInputObjectSchema } from './animalorderitemCreateWithoutAnimalInput.schema';
import { animalorderitemUncheckedCreateWithoutAnimalInputObjectSchema } from './animalorderitemUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemCreateOrConnectWithoutAnimalInput> =
  z
    .object({
      where: z.lazy(() => animalorderitemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => animalorderitemCreateWithoutAnimalInputObjectSchema),
        z.lazy(
          () => animalorderitemUncheckedCreateWithoutAnimalInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderitemCreateOrConnectWithoutAnimalInputObjectSchema =
  Schema;
