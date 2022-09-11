import { z } from 'zod';
import { animalorderWhereUniqueInputObjectSchema } from './animalorderWhereUniqueInput.schema';
import { animalorderCreateWithoutAnimalorderitemInputObjectSchema } from './animalorderCreateWithoutAnimalorderitemInput.schema';
import { animalorderUncheckedCreateWithoutAnimalorderitemInputObjectSchema } from './animalorderUncheckedCreateWithoutAnimalorderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderCreateOrConnectWithoutAnimalorderitemInput> =
  z
    .object({
      where: z.lazy(() => animalorderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => animalorderCreateWithoutAnimalorderitemInputObjectSchema),
        z.lazy(
          () =>
            animalorderUncheckedCreateWithoutAnimalorderitemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderCreateOrConnectWithoutAnimalorderitemInputObjectSchema =
  Schema;
