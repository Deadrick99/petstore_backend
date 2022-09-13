import { z } from 'zod';
import { AnimalUpdateWithoutSaleAnimalInputObjectSchema } from './AnimalUpdateWithoutSaleAnimalInput.schema';
import { AnimalUncheckedUpdateWithoutSaleAnimalInputObjectSchema } from './AnimalUncheckedUpdateWithoutSaleAnimalInput.schema';
import { AnimalCreateWithoutSaleAnimalInputObjectSchema } from './AnimalCreateWithoutSaleAnimalInput.schema';
import { AnimalUncheckedCreateWithoutSaleAnimalInputObjectSchema } from './AnimalUncheckedCreateWithoutSaleAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalUpsertWithoutSaleAnimalInput> = z
  .object({
    update: z.union([
      z.lazy(() => AnimalUpdateWithoutSaleAnimalInputObjectSchema),
      z.lazy(() => AnimalUncheckedUpdateWithoutSaleAnimalInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AnimalCreateWithoutSaleAnimalInputObjectSchema),
      z.lazy(() => AnimalUncheckedCreateWithoutSaleAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const AnimalUpsertWithoutSaleAnimalInputObjectSchema = Schema;
