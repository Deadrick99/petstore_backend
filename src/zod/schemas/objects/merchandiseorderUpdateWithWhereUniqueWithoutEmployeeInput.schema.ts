import { z } from 'zod';
import { merchandiseorderWhereUniqueInputObjectSchema } from './merchandiseorderWhereUniqueInput.schema';
import { merchandiseorderUpdateWithoutEmployeeInputObjectSchema } from './merchandiseorderUpdateWithoutEmployeeInput.schema';
import { merchandiseorderUncheckedUpdateWithoutEmployeeInputObjectSchema } from './merchandiseorderUncheckedUpdateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderUpdateWithWhereUniqueWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => merchandiseorderUpdateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => merchandiseorderUncheckedUpdateWithoutEmployeeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const merchandiseorderUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema =
  Schema;
