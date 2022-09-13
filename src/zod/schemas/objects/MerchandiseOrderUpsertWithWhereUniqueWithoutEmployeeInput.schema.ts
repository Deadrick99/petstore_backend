import { z } from 'zod';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './MerchandiseOrderWhereUniqueInput.schema';
import { MerchandiseOrderUpdateWithoutEmployeeInputObjectSchema } from './MerchandiseOrderUpdateWithoutEmployeeInput.schema';
import { MerchandiseOrderUncheckedUpdateWithoutEmployeeInputObjectSchema } from './MerchandiseOrderUncheckedUpdateWithoutEmployeeInput.schema';
import { MerchandiseOrderCreateWithoutEmployeeInputObjectSchema } from './MerchandiseOrderCreateWithoutEmployeeInput.schema';
import { MerchandiseOrderUncheckedCreateWithoutEmployeeInputObjectSchema } from './MerchandiseOrderUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUpsertWithWhereUniqueWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MerchandiseOrderUpdateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => MerchandiseOrderUncheckedUpdateWithoutEmployeeInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MerchandiseOrderCreateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => MerchandiseOrderUncheckedCreateWithoutEmployeeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MerchandiseOrderUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema =
  Schema;
