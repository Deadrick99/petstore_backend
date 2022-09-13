import { z } from 'zod';
import { SaleUpdateWithoutSaleAnimalInputObjectSchema } from './SaleUpdateWithoutSaleAnimalInput.schema';
import { SaleUncheckedUpdateWithoutSaleAnimalInputObjectSchema } from './SaleUncheckedUpdateWithoutSaleAnimalInput.schema';
import { SaleCreateWithoutSaleAnimalInputObjectSchema } from './SaleCreateWithoutSaleAnimalInput.schema';
import { SaleUncheckedCreateWithoutSaleAnimalInputObjectSchema } from './SaleUncheckedCreateWithoutSaleAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpsertWithoutSaleAnimalInput> = z
  .object({
    update: z.union([
      z.lazy(() => SaleUpdateWithoutSaleAnimalInputObjectSchema),
      z.lazy(() => SaleUncheckedUpdateWithoutSaleAnimalInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SaleCreateWithoutSaleAnimalInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutSaleAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const SaleUpsertWithoutSaleAnimalInputObjectSchema = Schema;
