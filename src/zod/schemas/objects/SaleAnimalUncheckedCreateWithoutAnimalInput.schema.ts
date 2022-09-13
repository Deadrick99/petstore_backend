import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalUncheckedCreateWithoutAnimalInput> = z
  .object({
    SALEID: z.number().optional(),
    SALEPRICE: z.number().optional().nullable(),
  })
  .strict();

export const SaleAnimalUncheckedCreateWithoutAnimalInputObjectSchema = Schema;
