import { z } from 'zod';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalCreateWithoutSaleAnimalInputObjectSchema } from './AnimalCreateWithoutSaleAnimalInput.schema';
import { AnimalUncheckedCreateWithoutSaleAnimalInputObjectSchema } from './AnimalUncheckedCreateWithoutSaleAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalCreateOrConnectWithoutSaleAnimalInput> = z
  .object({
    where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AnimalCreateWithoutSaleAnimalInputObjectSchema),
      z.lazy(() => AnimalUncheckedCreateWithoutSaleAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const AnimalCreateOrConnectWithoutSaleAnimalInputObjectSchema = Schema;
