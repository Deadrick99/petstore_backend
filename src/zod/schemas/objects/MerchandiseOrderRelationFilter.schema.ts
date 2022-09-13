import { z } from 'zod';
import { MerchandiseOrderWhereInputObjectSchema } from './MerchandiseOrderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderRelationFilter> = z
  .object({
    is: z.lazy(() => MerchandiseOrderWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => MerchandiseOrderWhereInputObjectSchema).optional(),
  })
  .strict();

export const MerchandiseOrderRelationFilterObjectSchema = Schema;
