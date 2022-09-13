import { z } from 'zod';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateWithoutBreedInputObjectSchema } from './AnimalUpdateWithoutBreedInput.schema';
import { AnimalUncheckedUpdateWithoutBreedInputObjectSchema } from './AnimalUncheckedUpdateWithoutBreedInput.schema';
import { AnimalCreateWithoutBreedInputObjectSchema } from './AnimalCreateWithoutBreedInput.schema';
import { AnimalUncheckedCreateWithoutBreedInputObjectSchema } from './AnimalUncheckedCreateWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalUpsertWithWhereUniqueWithoutBreedInput> = z
  .object({
    where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => AnimalUpdateWithoutBreedInputObjectSchema),
      z.lazy(() => AnimalUncheckedUpdateWithoutBreedInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AnimalCreateWithoutBreedInputObjectSchema),
      z.lazy(() => AnimalUncheckedCreateWithoutBreedInputObjectSchema),
    ]),
  })
  .strict();

export const AnimalUpsertWithWhereUniqueWithoutBreedInputObjectSchema = Schema;
