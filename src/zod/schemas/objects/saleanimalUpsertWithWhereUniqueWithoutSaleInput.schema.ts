import { z } from 'zod';
import { saleanimalWhereUniqueInputObjectSchema } from './saleanimalWhereUniqueInput.schema';
import { saleanimalUpdateWithoutSaleInputObjectSchema } from './saleanimalUpdateWithoutSaleInput.schema';
import { saleanimalUncheckedUpdateWithoutSaleInputObjectSchema } from './saleanimalUncheckedUpdateWithoutSaleInput.schema';
import { saleanimalCreateWithoutSaleInputObjectSchema } from './saleanimalCreateWithoutSaleInput.schema';
import { saleanimalUncheckedCreateWithoutSaleInputObjectSchema } from './saleanimalUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalUpsertWithWhereUniqueWithoutSaleInput> =
  z
    .object({
      where: z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => saleanimalUpdateWithoutSaleInputObjectSchema),
        z.lazy(() => saleanimalUncheckedUpdateWithoutSaleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => saleanimalCreateWithoutSaleInputObjectSchema),
        z.lazy(() => saleanimalUncheckedCreateWithoutSaleInputObjectSchema),
      ]),
    })
    .strict();

export const saleanimalUpsertWithWhereUniqueWithoutSaleInputObjectSchema =
  Schema;
