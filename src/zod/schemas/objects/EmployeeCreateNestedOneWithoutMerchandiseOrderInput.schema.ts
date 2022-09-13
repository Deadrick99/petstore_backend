import { z } from 'zod';
import { EmployeeCreateWithoutMerchandiseOrderInputObjectSchema } from './EmployeeCreateWithoutMerchandiseOrderInput.schema';
import { EmployeeUncheckedCreateWithoutMerchandiseOrderInputObjectSchema } from './EmployeeUncheckedCreateWithoutMerchandiseOrderInput.schema';
import { EmployeeCreateOrConnectWithoutMerchandiseOrderInputObjectSchema } from './EmployeeCreateOrConnectWithoutMerchandiseOrderInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateNestedOneWithoutMerchandiseOrderInput> =
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
        connect: z.lazy(() => EmployeeWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const EmployeeCreateNestedOneWithoutMerchandiseOrderInputObjectSchema =
  Schema;
