import { z } from 'zod';
import { saleCreateWithoutSaleanimalInputObjectSchema } from './saleCreateWithoutSaleanimalInput.schema';
import { saleUncheckedCreateWithoutSaleanimalInputObjectSchema } from './saleUncheckedCreateWithoutSaleanimalInput.schema';
import { saleCreateOrConnectWithoutSaleanimalInputObjectSchema } from './saleCreateOrConnectWithoutSaleanimalInput.schema';
import { saleUpsertWithoutSaleanimalInputObjectSchema } from './saleUpsertWithoutSaleanimalInput.schema';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';
import { saleUpdateWithoutSaleanimalInputObjectSchema } from './saleUpdateWithoutSaleanimalInput.schema';
import { saleUncheckedUpdateWithoutSaleanimalInputObjectSchema } from './saleUncheckedUpdateWithoutSaleanimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUpdateOneRequiredWithoutSaleanimalNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => saleCreateWithoutSaleanimalInputObjectSchema),
            z.lazy(() => saleUncheckedCreateWithoutSaleanimalInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => saleCreateOrConnectWithoutSaleanimalInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => saleUpsertWithoutSaleanimalInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => saleWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => saleUpdateWithoutSaleanimalInputObjectSchema),
            z.lazy(() => saleUncheckedUpdateWithoutSaleanimalInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const saleUpdateOneRequiredWithoutSaleanimalNestedInputObjectSchema =
  Schema;
