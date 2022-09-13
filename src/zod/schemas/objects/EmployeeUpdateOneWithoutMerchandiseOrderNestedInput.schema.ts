import { z } from 'zod';
import { EmployeeCreateWithoutMerchandiseOrderInputObjectSchema } from './EmployeeCreateWithoutMerchandiseOrderInput.schema';
import { EmployeeUncheckedCreateWithoutMerchandiseOrderInputObjectSchema } from './EmployeeUncheckedCreateWithoutMerchandiseOrderInput.schema';
import { EmployeeCreateOrConnectWithoutMerchandiseOrderInputObjectSchema } from './EmployeeCreateOrConnectWithoutMerchandiseOrderInput.schema';
import { EmployeeUpsertWithoutMerchandiseOrderInputObjectSchema } from './EmployeeUpsertWithoutMerchandiseOrderInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithoutMerchandiseOrderInputObjectSchema } from './EmployeeUpdateWithoutMerchandiseOrderInput.schema';
import { EmployeeUncheckedUpdateWithoutMerchandiseOrderInputObjectSchema } from './EmployeeUncheckedUpdateWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpdateOneWithoutMerchandiseOrderNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => EmployeeCreateWithoutMerchandiseOrderInputObjectSchema,
            ),
            z.lazy(
              () =>
                EmployeeUncheckedCreateWithoutMerchandiseOrderInputObjectSchema,
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
              EmployeeCreateOrConnectWithoutMerchandiseOrderInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => EmployeeUpsertWithoutMerchandiseOrderInputObjectSchema)
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
        connect: z.lazy(() => EmployeeWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => EmployeeUpdateWithoutMerchandiseOrderInputObjectSchema,
            ),
            z.lazy(
              () =>
                EmployeeUncheckedUpdateWithoutMerchandiseOrderInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const EmployeeUpdateOneWithoutMerchandiseOrderNestedInputObjectSchema =
  Schema;
