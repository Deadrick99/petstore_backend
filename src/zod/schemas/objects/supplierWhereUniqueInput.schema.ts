import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierWhereUniqueInput> = z
  .object({
    SUPPLIERID: z.number().optional(),
  })
  .strict();

export const supplierWhereUniqueInputObjectSchema = Schema;
