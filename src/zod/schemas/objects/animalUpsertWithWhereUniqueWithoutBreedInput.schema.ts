import { z } from 'zod';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';
import { animalUpdateWithoutBreedInputObjectSchema } from './animalUpdateWithoutBreedInput.schema';
import { animalUncheckedUpdateWithoutBreedInputObjectSchema } from './animalUncheckedUpdateWithoutBreedInput.schema';
import { animalCreateWithoutBreedInputObjectSchema } from './animalCreateWithoutBreedInput.schema';
import { animalUncheckedCreateWithoutBreedInputObjectSchema } from './animalUncheckedCreateWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUpsertWithWhereUniqueWithoutBreedInput> = z
  .object({
    where: z.lazy(() => animalWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => animalUpdateWithoutBreedInputObjectSchema),
      z.lazy(() => animalUncheckedUpdateWithoutBreedInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => animalCreateWithoutBreedInputObjectSchema),
      z.lazy(() => animalUncheckedCreateWithoutBreedInputObjectSchema),
    ]),
  })
  .strict();

export const animalUpsertWithWhereUniqueWithoutBreedInputObjectSchema = Schema;
