import { z } from 'zod';
import { employeeWhereUniqueInputObjectSchema } from './employeeWhereUniqueInput.schema';
import { employeeCreateWithoutMerchandiseorderInputObjectSchema } from './employeeCreateWithoutMerchandiseorderInput.schema';
import { employeeUncheckedCreateWithoutMerchandiseorderInputObjectSchema } from './employeeUncheckedCreateWithoutMerchandiseorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeCreateOrConnectWithoutMerchandiseorderInput> =
  z
    .object({
      where: z.lazy(() => employeeWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => employeeCreateWithoutMerchandiseorderInputObjectSchema),
        z.lazy(
          () => employeeUncheckedCreateWithoutMerchandiseorderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const employeeCreateOrConnectWithoutMerchandiseorderInputObjectSchema =
  Schema;
