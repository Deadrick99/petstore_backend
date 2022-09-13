import { z } from 'zod';
import { SaleAnimalWhereUniqueInputObjectSchema } from './SaleAnimalWhereUniqueInput.schema';
import { SaleAnimalCreateWithoutSaleInputObjectSchema } from './SaleAnimalCreateWithoutSaleInput.schema';
import { SaleAnimalUncheckedCreateWithoutSaleInputObjectSchema } from './SaleAnimalUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalCreateOrConnectWithoutSaleInput> = z
  .object({
    where: z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SaleAnimalCreateWithoutSaleInputObjectSchema),
      z.lazy(() => SaleAnimalUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const SaleAnimalCreateOrConnectWithoutSaleInputObjectSchema = Schema;
