import { z } from 'zod';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';
import { animalCreateWithoutBreedInputObjectSchema } from './animalCreateWithoutBreedInput.schema';
import { animalUncheckedCreateWithoutBreedInputObjectSchema } from './animalUncheckedCreateWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalCreateOrConnectWithoutBreedInput> = z
  .object({
    where: z.lazy(() => animalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => animalCreateWithoutBreedInputObjectSchema),
      z.lazy(() => animalUncheckedCreateWithoutBreedInputObjectSchema),
    ]),
  })
  .strict();

export const animalCreateOrConnectWithoutBreedInputObjectSchema = Schema;
