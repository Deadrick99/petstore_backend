import { z } from 'zod';
import { employeeCreateWithoutMerchandiseorderInputObjectSchema } from './employeeCreateWithoutMerchandiseorderInput.schema';
import { employeeUncheckedCreateWithoutMerchandiseorderInputObjectSchema } from './employeeUncheckedCreateWithoutMerchandiseorderInput.schema';
import { employeeCreateOrConnectWithoutMerchandiseorderInputObjectSchema } from './employeeCreateOrConnectWithoutMerchandiseorderInput.schema';
import { employeeWhereUniqueInputObjectSchema } from './employeeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeCreateNestedOneWithoutMerchandiseorderInput> =
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
        connect: z.lazy(() => employeeWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const employeeCreateNestedOneWithoutMerchandiseorderInputObjectSchema =
  Schema;
