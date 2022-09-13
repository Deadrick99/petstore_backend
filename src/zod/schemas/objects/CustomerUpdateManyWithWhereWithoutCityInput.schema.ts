import { z } from 'zod';
import { CustomerScalarWhereInputObjectSchema } from './CustomerScalarWhereInput.schema';
import { CustomerUpdateManyMutationInputObjectSchema } from './CustomerUpdateManyMutationInput.schema';
import { CustomerUncheckedUpdateManyWithoutCustomerInputObjectSchema } from './CustomerUncheckedUpdateManyWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUpdateManyWithWhereWithoutCityInput> = z
  .object({
    where: z.lazy(() => CustomerScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => CustomerUpdateManyMutationInputObjectSchema),
      z.lazy(() => CustomerUncheckedUpdateManyWithoutCustomerInputObjectSchema),
    ]),
  })
  .strict();

export const CustomerUpdateManyWithWhereWithoutCityInputObjectSchema = Schema;
