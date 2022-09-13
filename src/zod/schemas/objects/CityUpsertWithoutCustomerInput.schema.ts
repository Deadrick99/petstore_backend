import { z } from 'zod';
import { CityUpdateWithoutCustomerInputObjectSchema } from './CityUpdateWithoutCustomerInput.schema';
import { CityUncheckedUpdateWithoutCustomerInputObjectSchema } from './CityUncheckedUpdateWithoutCustomerInput.schema';
import { CityCreateWithoutCustomerInputObjectSchema } from './CityCreateWithoutCustomerInput.schema';
import { CityUncheckedCreateWithoutCustomerInputObjectSchema } from './CityUncheckedCreateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityUpsertWithoutCustomerInput> = z
  .object({
    update: z.union([
      z.lazy(() => CityUpdateWithoutCustomerInputObjectSchema),
      z.lazy(() => CityUncheckedUpdateWithoutCustomerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CityCreateWithoutCustomerInputObjectSchema),
      z.lazy(() => CityUncheckedCreateWithoutCustomerInputObjectSchema),
    ]),
  })
  .strict();

export const CityUpsertWithoutCustomerInputObjectSchema = Schema;
