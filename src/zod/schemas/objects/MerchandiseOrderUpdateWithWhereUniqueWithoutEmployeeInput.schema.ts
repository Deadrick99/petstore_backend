import { z } from 'zod';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './MerchandiseOrderWhereUniqueInput.schema';
import { MerchandiseOrderUpdateWithoutEmployeeInputObjectSchema } from './MerchandiseOrderUpdateWithoutEmployeeInput.schema';
import { MerchandiseOrderUncheckedUpdateWithoutEmployeeInputObjectSchema } from './MerchandiseOrderUncheckedUpdateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUpdateWithWhereUniqueWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MerchandiseOrderUpdateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => MerchandiseOrderUncheckedUpdateWithoutEmployeeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MerchandiseOrderUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema =
  Schema;
