import { z } from 'zod';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';
import { saleCreateWithoutSaleanimalInputObjectSchema } from './saleCreateWithoutSaleanimalInput.schema';
import { saleUncheckedCreateWithoutSaleanimalInputObjectSchema } from './saleUncheckedCreateWithoutSaleanimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleCreateOrConnectWithoutSaleanimalInput> = z
  .object({
    where: z.lazy(() => saleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => saleCreateWithoutSaleanimalInputObjectSchema),
      z.lazy(() => saleUncheckedCreateWithoutSaleanimalInputObjectSchema),
    ]),
  })
  .strict();

export const saleCreateOrConnectWithoutSaleanimalInputObjectSchema = Schema;
