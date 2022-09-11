import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalUncheckedCreateInput> = z
  .object({
    SALEID: z.number().optional(),
    ANIMALID: z.number().optional(),
    SALEPRICE: z.number().optional().nullable(),
  })
  .strict();

export const saleanimalUncheckedCreateInputObjectSchema = Schema;
