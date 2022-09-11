import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { categoryOrderByWithRelationInputObjectSchema } from './categoryOrderByWithRelationInput.schema';
import { breedOrderByWithRelationInputObjectSchema } from './breedOrderByWithRelationInput.schema';
import { animalorderitemOrderByRelationAggregateInputObjectSchema } from './animalorderitemOrderByRelationAggregateInput.schema';
import { saleanimalOrderByRelationAggregateInputObjectSchema } from './saleanimalOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalOrderByWithRelationInput> = z
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
    category: z
      .lazy(() => categoryOrderByWithRelationInputObjectSchema)
      .optional(),
    breed: z.lazy(() => breedOrderByWithRelationInputObjectSchema).optional(),
    animalorderitem: z
      .lazy(() => animalorderitemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    saleanimal: z
      .lazy(() => saleanimalOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const animalOrderByWithRelationInputObjectSchema = Schema;
