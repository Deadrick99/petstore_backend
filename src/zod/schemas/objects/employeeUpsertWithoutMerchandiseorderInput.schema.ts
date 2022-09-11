import { z } from 'zod';
import { employeeUpdateWithoutMerchandiseorderInputObjectSchema } from './employeeUpdateWithoutMerchandiseorderInput.schema';
import { employeeUncheckedUpdateWithoutMerchandiseorderInputObjectSchema } from './employeeUncheckedUpdateWithoutMerchandiseorderInput.schema';
import { employeeCreateWithoutMerchandiseorderInputObjectSchema } from './employeeCreateWithoutMerchandiseorderInput.schema';
import { employeeUncheckedCreateWithoutMerchandiseorderInputObjectSchema } from './employeeUncheckedCreateWithoutMerchandiseorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeUpsertWithoutMerchandiseorderInput> = z
  .object({
    update: z.union([
      z.lazy(() => employeeUpdateWithoutMerchandiseorderInputObjectSchema),
      z.lazy(
        () => employeeUncheckedUpdateWithoutMerchandiseorderInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => employeeCreateWithoutMerchandiseorderInputObjectSchema),
      z.lazy(
        () => employeeUncheckedCreateWithoutMerchandiseorderInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const employeeUpsertWithoutMerchandiseorderInputObjectSchema = Schema;
