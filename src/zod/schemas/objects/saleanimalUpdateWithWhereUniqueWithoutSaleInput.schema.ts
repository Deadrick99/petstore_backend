import { z } from 'zod';
import { saleanimalWhereUniqueInputObjectSchema } from './saleanimalWhereUniqueInput.schema';
import { saleanimalUpdateWithoutSaleInputObjectSchema } from './saleanimalUpdateWithoutSaleInput.schema';
import { saleanimalUncheckedUpdateWithoutSaleInputObjectSchema } from './saleanimalUncheckedUpdateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalUpdateWithWhereUniqueWithoutSaleInput> =
  z
    .object({
      where: z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => saleanimalUpdateWithoutSaleInputObjectSchema),
        z.lazy(() => saleanimalUncheckedUpdateWithoutSaleInputObjectSchema),
      ]),
    })
    .strict();

export const saleanimalUpdateWithWhereUniqueWithoutSaleInputObjectSchema =
  Schema;
