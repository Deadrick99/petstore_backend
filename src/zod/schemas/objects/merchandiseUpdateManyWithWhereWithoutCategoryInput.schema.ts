import { z } from 'zod';
import { merchandiseScalarWhereInputObjectSchema } from './merchandiseScalarWhereInput.schema';
import { merchandiseUpdateManyMutationInputObjectSchema } from './merchandiseUpdateManyMutationInput.schema';
import { merchandiseUncheckedUpdateManyWithoutMerchandiseInputObjectSchema } from './merchandiseUncheckedUpdateManyWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseUpdateManyWithWhereWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => merchandiseScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => merchandiseUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            merchandiseUncheckedUpdateManyWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const merchandiseUpdateManyWithWhereWithoutCategoryInputObjectSchema =
  Schema;
