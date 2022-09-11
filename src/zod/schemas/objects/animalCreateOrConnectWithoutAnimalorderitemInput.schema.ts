import { z } from 'zod';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';
import { animalCreateWithoutAnimalorderitemInputObjectSchema } from './animalCreateWithoutAnimalorderitemInput.schema';
import { animalUncheckedCreateWithoutAnimalorderitemInputObjectSchema } from './animalUncheckedCreateWithoutAnimalorderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalCreateOrConnectWithoutAnimalorderitemInput> =
  z
    .object({
      where: z.lazy(() => animalWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => animalCreateWithoutAnimalorderitemInputObjectSchema),
        z.lazy(
          () => animalUncheckedCreateWithoutAnimalorderitemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalCreateOrConnectWithoutAnimalorderitemInputObjectSchema =
  Schema;
