import { z } from 'zod';
import { employeeCreateWithoutMerchandiseorderInputObjectSchema } from './employeeCreateWithoutMerchandiseorderInput.schema';
import { employeeUncheckedCreateWithoutMerchandiseorderInputObjectSchema } from './employeeUncheckedCreateWithoutMerchandiseorderInput.schema';
import { employeeCreateOrConnectWithoutMerchandiseorderInputObjectSchema } from './employeeCreateOrConnectWithoutMerchandiseorderInput.schema';
import { employeeUpsertWithoutMerchandiseorderInputObjectSchema } from './employeeUpsertWithoutMerchandiseorderInput.schema';
import { employeeWhereUniqueInputObjectSchema } from './employeeWhereUniqueInput.schema';
import { employeeUpdateWithoutMerchandiseorderInputObjectSchema } from './employeeUpdateWithoutMerchandiseorderInput.schema';
import { employeeUncheckedUpdateWithoutMerchandiseorderInputObjectSchema } from './employeeUncheckedUpdateWithoutMerchandiseorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeUpdateOneWithoutMerchandiseorderNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => employeeCreateWithoutMerchandiseorderInputObjectSchema,
            ),
            z.lazy(
              () =>
                employeeUncheckedCreateWithoutMerchandiseorderInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () =>
              employeeCreateOrConnectWithoutMerchandiseorderInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => employeeUpsertWithoutMerchandiseorderInputObjectSchema)
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
        connect: z.lazy(() => employeeWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => employeeUpdateWithoutMerchandiseorderInputObjectSchema,
            ),
            z.lazy(
              () =>
                employeeUncheckedUpdateWithoutMerchandiseorderInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const employeeUpdateOneWithoutMerchandiseorderNestedInputObjectSchema =
  Schema;
