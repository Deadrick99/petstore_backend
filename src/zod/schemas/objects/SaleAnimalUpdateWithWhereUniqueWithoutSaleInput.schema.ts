import { z } from 'zod';
import { SaleAnimalWhereUniqueInputObjectSchema } from './SaleAnimalWhereUniqueInput.schema';
import { SaleAnimalUpdateWithoutSaleInputObjectSchema } from './SaleAnimalUpdateWithoutSaleInput.schema';
import { SaleAnimalUncheckedUpdateWithoutSaleInputObjectSchema } from './SaleAnimalUncheckedUpdateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalUpdateWithWhereUniqueWithoutSaleInput> =
  z
    .object({
      where: z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SaleAnimalUpdateWithoutSaleInputObjectSchema),
        z.lazy(() => SaleAnimalUncheckedUpdateWithoutSaleInputObjectSchema),
      ]),
    })
    .strict();

export const SaleAnimalUpdateWithWhereUniqueWithoutSaleInputObjectSchema =
  Schema;
