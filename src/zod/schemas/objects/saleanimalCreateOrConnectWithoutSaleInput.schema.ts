import { z } from 'zod';
import { saleanimalWhereUniqueInputObjectSchema } from './saleanimalWhereUniqueInput.schema';
import { saleanimalCreateWithoutSaleInputObjectSchema } from './saleanimalCreateWithoutSaleInput.schema';
import { saleanimalUncheckedCreateWithoutSaleInputObjectSchema } from './saleanimalUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalCreateOrConnectWithoutSaleInput> = z
  .object({
    where: z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => saleanimalCreateWithoutSaleInputObjectSchema),
      z.lazy(() => saleanimalUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const saleanimalCreateOrConnectWithoutSaleInputObjectSchema = Schema;
