import { z } from 'zod';
import { saleUpdateWithoutSaleanimalInputObjectSchema } from './saleUpdateWithoutSaleanimalInput.schema';
import { saleUncheckedUpdateWithoutSaleanimalInputObjectSchema } from './saleUncheckedUpdateWithoutSaleanimalInput.schema';
import { saleCreateWithoutSaleanimalInputObjectSchema } from './saleCreateWithoutSaleanimalInput.schema';
import { saleUncheckedCreateWithoutSaleanimalInputObjectSchema } from './saleUncheckedCreateWithoutSaleanimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUpsertWithoutSaleanimalInput> = z
  .object({
    update: z.union([
      z.lazy(() => saleUpdateWithoutSaleanimalInputObjectSchema),
      z.lazy(() => saleUncheckedUpdateWithoutSaleanimalInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => saleCreateWithoutSaleanimalInputObjectSchema),
      z.lazy(() => saleUncheckedCreateWithoutSaleanimalInputObjectSchema),
    ]),
  })
  .strict();

export const saleUpsertWithoutSaleanimalInputObjectSchema = Schema;
