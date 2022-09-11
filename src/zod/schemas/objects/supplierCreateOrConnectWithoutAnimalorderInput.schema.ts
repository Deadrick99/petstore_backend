import { z } from 'zod';
import { supplierWhereUniqueInputObjectSchema } from './supplierWhereUniqueInput.schema';
import { supplierCreateWithoutAnimalorderInputObjectSchema } from './supplierCreateWithoutAnimalorderInput.schema';
import { supplierUncheckedCreateWithoutAnimalorderInputObjectSchema } from './supplierUncheckedCreateWithoutAnimalorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierCreateOrConnectWithoutAnimalorderInput> =
  z
    .object({
      where: z.lazy(() => supplierWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => supplierCreateWithoutAnimalorderInputObjectSchema),
        z.lazy(
          () => supplierUncheckedCreateWithoutAnimalorderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const supplierCreateOrConnectWithoutAnimalorderInputObjectSchema =
  Schema;
