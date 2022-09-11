import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalUncheckedCreateWithoutSaleInput> = z
  .object({
    ANIMALID: z.number().optional(),
    SALEPRICE: z.number().optional().nullable(),
  })
  .strict();

export const saleanimalUncheckedCreateWithoutSaleInputObjectSchema = Schema;
