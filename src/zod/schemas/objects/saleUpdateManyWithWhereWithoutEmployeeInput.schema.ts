import { z } from 'zod';
import { saleScalarWhereInputObjectSchema } from './saleScalarWhereInput.schema';
import { saleUpdateManyMutationInputObjectSchema } from './saleUpdateManyMutationInput.schema';
import { saleUncheckedUpdateManyWithoutSaleInputObjectSchema } from './saleUncheckedUpdateManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUpdateManyWithWhereWithoutEmployeeInput> = z
  .object({
    where: z.lazy(() => saleScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => saleUpdateManyMutationInputObjectSchema),
      z.lazy(() => saleUncheckedUpdateManyWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const saleUpdateManyWithWhereWithoutEmployeeInputObjectSchema = Schema;
