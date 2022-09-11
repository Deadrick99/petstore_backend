import { z } from 'zod';
import { saleCreateWithoutSaleanimalInputObjectSchema } from './saleCreateWithoutSaleanimalInput.schema';
import { saleUncheckedCreateWithoutSaleanimalInputObjectSchema } from './saleUncheckedCreateWithoutSaleanimalInput.schema';
import { saleCreateOrConnectWithoutSaleanimalInputObjectSchema } from './saleCreateOrConnectWithoutSaleanimalInput.schema';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleCreateNestedOneWithoutSaleanimalInput> =
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
        connect: z.lazy(() => saleWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const saleCreateNestedOneWithoutSaleanimalInputObjectSchema = Schema;
