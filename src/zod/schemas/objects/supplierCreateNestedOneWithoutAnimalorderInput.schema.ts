import { z } from 'zod';
import { supplierCreateWithoutAnimalorderInputObjectSchema } from './supplierCreateWithoutAnimalorderInput.schema';
import { supplierUncheckedCreateWithoutAnimalorderInputObjectSchema } from './supplierUncheckedCreateWithoutAnimalorderInput.schema';
import { supplierCreateOrConnectWithoutAnimalorderInputObjectSchema } from './supplierCreateOrConnectWithoutAnimalorderInput.schema';
import { supplierWhereUniqueInputObjectSchema } from './supplierWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierCreateNestedOneWithoutAnimalorderInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => supplierCreateWithoutAnimalorderInputObjectSchema),
            z.lazy(
              () => supplierUncheckedCreateWithoutAnimalorderInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => supplierCreateOrConnectWithoutAnimalorderInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => supplierWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const supplierCreateNestedOneWithoutAnimalorderInputObjectSchema =
  Schema;
