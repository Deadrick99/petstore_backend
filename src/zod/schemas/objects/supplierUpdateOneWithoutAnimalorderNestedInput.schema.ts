import { z } from 'zod';
import { supplierCreateWithoutAnimalorderInputObjectSchema } from './supplierCreateWithoutAnimalorderInput.schema';
import { supplierUncheckedCreateWithoutAnimalorderInputObjectSchema } from './supplierUncheckedCreateWithoutAnimalorderInput.schema';
import { supplierCreateOrConnectWithoutAnimalorderInputObjectSchema } from './supplierCreateOrConnectWithoutAnimalorderInput.schema';
import { supplierUpsertWithoutAnimalorderInputObjectSchema } from './supplierUpsertWithoutAnimalorderInput.schema';
import { supplierWhereUniqueInputObjectSchema } from './supplierWhereUniqueInput.schema';
import { supplierUpdateWithoutAnimalorderInputObjectSchema } from './supplierUpdateWithoutAnimalorderInput.schema';
import { supplierUncheckedUpdateWithoutAnimalorderInputObjectSchema } from './supplierUncheckedUpdateWithoutAnimalorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierUpdateOneWithoutAnimalorderNestedInput> =
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
        upsert: z
          .lazy(() => supplierUpsertWithoutAnimalorderInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => supplierWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => supplierUpdateWithoutAnimalorderInputObjectSchema),
            z.lazy(
              () => supplierUncheckedUpdateWithoutAnimalorderInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const supplierUpdateOneWithoutAnimalorderNestedInputObjectSchema =
  Schema;
