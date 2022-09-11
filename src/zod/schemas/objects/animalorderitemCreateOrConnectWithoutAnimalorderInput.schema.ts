import { z } from 'zod';
import { animalorderitemWhereUniqueInputObjectSchema } from './animalorderitemWhereUniqueInput.schema';
import { animalorderitemCreateWithoutAnimalorderInputObjectSchema } from './animalorderitemCreateWithoutAnimalorderInput.schema';
import { animalorderitemUncheckedCreateWithoutAnimalorderInputObjectSchema } from './animalorderitemUncheckedCreateWithoutAnimalorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemCreateOrConnectWithoutAnimalorderInput> =
  z
    .object({
      where: z.lazy(() => animalorderitemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => animalorderitemCreateWithoutAnimalorderInputObjectSchema),
        z.lazy(
          () =>
            animalorderitemUncheckedCreateWithoutAnimalorderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderitemCreateOrConnectWithoutAnimalorderInputObjectSchema =
  Schema;
