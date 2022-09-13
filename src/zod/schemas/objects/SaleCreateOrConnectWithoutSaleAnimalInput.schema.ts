import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutSaleAnimalInputObjectSchema } from './SaleCreateWithoutSaleAnimalInput.schema';
import { SaleUncheckedCreateWithoutSaleAnimalInputObjectSchema } from './SaleUncheckedCreateWithoutSaleAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateOrConnectWithoutSaleAnimalInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SaleCreateWithoutSaleAnimalInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutSaleAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const SaleCreateOrConnectWithoutSaleAnimalInputObjectSchema = Schema;
