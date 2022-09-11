import { z } from 'zod';
import { supplierWhereUniqueInputObjectSchema } from './supplierWhereUniqueInput.schema';
import { supplierCreateWithoutMerchandiseorderInputObjectSchema } from './supplierCreateWithoutMerchandiseorderInput.schema';
import { supplierUncheckedCreateWithoutMerchandiseorderInputObjectSchema } from './supplierUncheckedCreateWithoutMerchandiseorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierCreateOrConnectWithoutMerchandiseorderInput> =
  z
    .object({
      where: z.lazy(() => supplierWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => supplierCreateWithoutMerchandiseorderInputObjectSchema),
        z.lazy(
          () => supplierUncheckedCreateWithoutMerchandiseorderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const supplierCreateOrConnectWithoutMerchandiseorderInputObjectSchema =
  Schema;
