import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalCountOrderByAggregateInput> = z
  .object({
    ANIMALID: z.lazy(() => SortOrderSchema).optional(),
    NAME: z.lazy(() => SortOrderSchema).optional(),
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    BREED: z.lazy(() => SortOrderSchema).optional(),
    DATEBORN: z.lazy(() => SortOrderSchema).optional(),
    GENDER: z.lazy(() => SortOrderSchema).optional(),
    REGISTERED: z.lazy(() => SortOrderSchema).optional(),
    COLOR: z.lazy(() => SortOrderSchema).optional(),
    LISTPRICE: z.lazy(() => SortOrderSchema).optional(),
    PHOTO: z.lazy(() => SortOrderSchema).optional(),
    IMAGEFILE: z.lazy(() => SortOrderSchema).optional(),
    IMAGEHEIGHT: z.lazy(() => SortOrderSchema).optional(),
    IMAGEWIDTH: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AnimalCountOrderByAggregateInputObjectSchema = Schema;
