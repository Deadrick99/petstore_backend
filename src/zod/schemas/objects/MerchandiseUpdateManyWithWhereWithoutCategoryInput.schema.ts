import { z } from 'zod';
import { MerchandiseScalarWhereInputObjectSchema } from './MerchandiseScalarWhereInput.schema';
import { MerchandiseUpdateManyMutationInputObjectSchema } from './MerchandiseUpdateManyMutationInput.schema';
import { MerchandiseUncheckedUpdateManyWithoutMerchandiseInputObjectSchema } from './MerchandiseUncheckedUpdateManyWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseUpdateManyWithWhereWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => MerchandiseScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MerchandiseUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            MerchandiseUncheckedUpdateManyWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MerchandiseUpdateManyWithWhereWithoutCategoryInputObjectSchema =
  Schema;
