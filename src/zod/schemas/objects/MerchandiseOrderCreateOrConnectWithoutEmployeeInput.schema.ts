import { z } from 'zod';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './MerchandiseOrderWhereUniqueInput.schema';
import { MerchandiseOrderCreateWithoutEmployeeInputObjectSchema } from './MerchandiseOrderCreateWithoutEmployeeInput.schema';
import { MerchandiseOrderUncheckedCreateWithoutEmployeeInputObjectSchema } from './MerchandiseOrderUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderCreateOrConnectWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MerchandiseOrderCreateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => MerchandiseOrderUncheckedCreateWithoutEmployeeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MerchandiseOrderCreateOrConnectWithoutEmployeeInputObjectSchema =
  Schema;
