import { z } from 'zod';
import { customerScalarWhereInputObjectSchema } from './customerScalarWhereInput.schema';
import { customerUpdateManyMutationInputObjectSchema } from './customerUpdateManyMutationInput.schema';
import { customerUncheckedUpdateManyWithoutCustomerInputObjectSchema } from './customerUncheckedUpdateManyWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerUpdateManyWithWhereWithoutCityInput> = z
  .object({
    where: z.lazy(() => customerScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => customerUpdateManyMutationInputObjectSchema),
      z.lazy(() => customerUncheckedUpdateManyWithoutCustomerInputObjectSchema),
    ]),
  })
  .strict();

export const customerUpdateManyWithWhereWithoutCityInputObjectSchema = Schema;
