import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CityOrderByWithRelationInputObjectSchema } from './CityOrderByWithRelationInput.schema';
import { AnimalOrderOrderByRelationAggregateInputObjectSchema } from './AnimalOrderOrderByRelationAggregateInput.schema';
import { MerchandiseOrderOrderByRelationAggregateInputObjectSchema } from './MerchandiseOrderOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierOrderByWithRelationInput> = z
  .object({
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    NAME: z.lazy(() => SortOrderSchema).optional(),
    CONTACTNAME: z.lazy(() => SortOrderSchema).optional(),
    PHONE: z.lazy(() => SortOrderSchema).optional(),
    ADDRESS: z.lazy(() => SortOrderSchema).optional(),
    ZIPCODE: z.lazy(() => SortOrderSchema).optional(),
    CITYID: z.lazy(() => SortOrderSchema).optional(),
    City: z.lazy(() => CityOrderByWithRelationInputObjectSchema).optional(),
    AnimalOrder: z
      .lazy(() => AnimalOrderOrderByRelationAggregateInputObjectSchema)
      .optional(),
    MerchandiseOrder: z
      .lazy(() => MerchandiseOrderOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SupplierOrderByWithRelationInputObjectSchema = Schema;
