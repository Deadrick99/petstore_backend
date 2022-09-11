import { z } from 'zod';
import { merchandiseorderScalarWhereInputObjectSchema } from './merchandiseorderScalarWhereInput.schema';
import { merchandiseorderUpdateManyMutationInputObjectSchema } from './merchandiseorderUpdateManyMutationInput.schema';
import { merchandiseorderUncheckedUpdateManyWithoutMerchandiseorderInputObjectSchema } from './merchandiseorderUncheckedUpdateManyWithoutMerchandiseorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderUpdateManyWithWhereWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => merchandiseorderScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => merchandiseorderUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            merchandiseorderUncheckedUpdateManyWithoutMerchandiseorderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const merchandiseorderUpdateManyWithWhereWithoutEmployeeInputObjectSchema =
  Schema;
