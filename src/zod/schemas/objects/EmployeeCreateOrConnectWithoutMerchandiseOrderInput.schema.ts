import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeCreateWithoutMerchandiseOrderInputObjectSchema } from './EmployeeCreateWithoutMerchandiseOrderInput.schema';
import { EmployeeUncheckedCreateWithoutMerchandiseOrderInputObjectSchema } from './EmployeeUncheckedCreateWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateOrConnectWithoutMerchandiseOrderInput> =
  z
    .object({
      where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => EmployeeCreateWithoutMerchandiseOrderInputObjectSchema),
        z.lazy(
          () => EmployeeUncheckedCreateWithoutMerchandiseOrderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EmployeeCreateOrConnectWithoutMerchandiseOrderInputObjectSchema =
  Schema;
