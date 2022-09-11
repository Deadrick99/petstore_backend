import { z } from 'zod';
import { saleitemScalarWhereInputObjectSchema } from './saleitemScalarWhereInput.schema';
import { saleitemUpdateManyMutationInputObjectSchema } from './saleitemUpdateManyMutationInput.schema';
import { saleitemUncheckedUpdateManyWithoutSaleitemInputObjectSchema } from './saleitemUncheckedUpdateManyWithoutSaleitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemUpdateManyWithWhereWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => saleitemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => saleitemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => saleitemUncheckedUpdateManyWithoutSaleitemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const saleitemUpdateManyWithWhereWithoutMerchandiseInputObjectSchema =
  Schema;
