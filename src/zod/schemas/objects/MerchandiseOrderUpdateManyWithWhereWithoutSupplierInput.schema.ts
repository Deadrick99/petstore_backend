import { z } from 'zod';
import { MerchandiseOrderScalarWhereInputObjectSchema } from './MerchandiseOrderScalarWhereInput.schema';
import { MerchandiseOrderUpdateManyMutationInputObjectSchema } from './MerchandiseOrderUpdateManyMutationInput.schema';
import { MerchandiseOrderUncheckedUpdateManyWithoutMerchandiseOrderInputObjectSchema } from './MerchandiseOrderUncheckedUpdateManyWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUpdateManyWithWhereWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => MerchandiseOrderScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MerchandiseOrderUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            MerchandiseOrderUncheckedUpdateManyWithoutMerchandiseOrderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MerchandiseOrderUpdateManyWithWhereWithoutSupplierInputObjectSchema =
  Schema;
