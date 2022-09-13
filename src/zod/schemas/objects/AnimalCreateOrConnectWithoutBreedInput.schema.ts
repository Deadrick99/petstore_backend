import { z } from 'zod';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalCreateWithoutBreedInputObjectSchema } from './AnimalCreateWithoutBreedInput.schema';
import { AnimalUncheckedCreateWithoutBreedInputObjectSchema } from './AnimalUncheckedCreateWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalCreateOrConnectWithoutBreedInput> = z
  .object({
    where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AnimalCreateWithoutBreedInputObjectSchema),
      z.lazy(() => AnimalUncheckedCreateWithoutBreedInputObjectSchema),
    ]),
  })
  .strict();

export const AnimalCreateOrConnectWithoutBreedInputObjectSchema = Schema;
