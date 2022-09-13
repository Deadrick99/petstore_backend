import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderWhereUniqueInput> = z
  .object({
    PONUMBER: z.number().optional(),
  })
  .strict();

export const MerchandiseOrderWhereUniqueInputObjectSchema = Schema;
