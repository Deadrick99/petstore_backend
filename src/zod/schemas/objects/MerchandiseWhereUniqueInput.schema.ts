import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseWhereUniqueInput> = z
  .object({
    ITEMID: z.number().optional(),
  })
  .strict();

export const MerchandiseWhereUniqueInputObjectSchema = Schema;
