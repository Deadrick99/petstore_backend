import { z } from 'zod';
import { SaleAnimalWhereUniqueInputObjectSchema } from './SaleAnimalWhereUniqueInput.schema';
import { SaleAnimalCreateWithoutAnimalInputObjectSchema } from './SaleAnimalCreateWithoutAnimalInput.schema';
import { SaleAnimalUncheckedCreateWithoutAnimalInputObjectSchema } from './SaleAnimalUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalCreateOrConnectWithoutAnimalInput> = z
  .object({
    where: z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SaleAnimalCreateWithoutAnimalInputObjectSchema),
      z.lazy(() => SaleAnimalUncheckedCreateWithoutAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const SaleAnimalCreateOrConnectWithoutAnimalInputObjectSchema = Schema;
