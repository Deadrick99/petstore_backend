import { z } from 'zod';
import { EmployeeUpdateWithoutMerchandiseOrderInputObjectSchema } from './EmployeeUpdateWithoutMerchandiseOrderInput.schema';
import { EmployeeUncheckedUpdateWithoutMerchandiseOrderInputObjectSchema } from './EmployeeUncheckedUpdateWithoutMerchandiseOrderInput.schema';
import { EmployeeCreateWithoutMerchandiseOrderInputObjectSchema } from './EmployeeCreateWithoutMerchandiseOrderInput.schema';
import { EmployeeUncheckedCreateWithoutMerchandiseOrderInputObjectSchema } from './EmployeeUncheckedCreateWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpsertWithoutMerchandiseOrderInput> = z
  .object({
    update: z.union([
      z.lazy(() => EmployeeUpdateWithoutMerchandiseOrderInputObjectSchema),
      z.lazy(
        () => EmployeeUncheckedUpdateWithoutMerchandiseOrderInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => EmployeeCreateWithoutMerchandiseOrderInputObjectSchema),
      z.lazy(
        () => EmployeeUncheckedCreateWithoutMerchandiseOrderInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const EmployeeUpsertWithoutMerchandiseOrderInputObjectSchema = Schema;
