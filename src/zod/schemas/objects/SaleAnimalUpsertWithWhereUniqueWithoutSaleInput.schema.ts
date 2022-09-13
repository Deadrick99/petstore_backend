import { z } from 'zod';
import { SaleAnimalWhereUniqueInputObjectSchema } from './SaleAnimalWhereUniqueInput.schema';
import { SaleAnimalUpdateWithoutSaleInputObjectSchema } from './SaleAnimalUpdateWithoutSaleInput.schema';
import { SaleAnimalUncheckedUpdateWithoutSaleInputObjectSchema } from './SaleAnimalUncheckedUpdateWithoutSaleInput.schema';
import { SaleAnimalCreateWithoutSaleInputObjectSchema } from './SaleAnimalCreateWithoutSaleInput.schema';
import { SaleAnimalUncheckedCreateWithoutSaleInputObjectSchema } from './SaleAnimalUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalUpsertWithWhereUniqueWithoutSaleInput> =
  z
    .object({
      where: z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SaleAnimalUpdateWithoutSaleInputObjectSchema),
        z.lazy(() => SaleAnimalUncheckedUpdateWithoutSaleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SaleAnimalCreateWithoutSaleInputObjectSchema),
        z.lazy(() => SaleAnimalUncheckedCreateWithoutSaleInputObjectSchema),
      ]),
    })
    .strict();

export const SaleAnimalUpsertWithWhereUniqueWithoutSaleInputObjectSchema =
  Schema;
