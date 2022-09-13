import { z } from 'zod';
import { MerchandiseWhereInputObjectSchema } from './MerchandiseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseRelationFilter> = z
  .object({
    is: z.lazy(() => MerchandiseWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => MerchandiseWhereInputObjectSchema).optional(),
  })
  .strict();

export const MerchandiseRelationFilterObjectSchema = Schema;
