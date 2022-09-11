import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { BytesNullableFilterObjectSchema } from './BytesNullableFilter.schema';
import { CategoryRelationFilterObjectSchema } from './CategoryRelationFilter.schema';
import { categoryWhereInputObjectSchema } from './categoryWhereInput.schema';
import { BreedRelationFilterObjectSchema } from './BreedRelationFilter.schema';
import { breedWhereInputObjectSchema } from './breedWhereInput.schema';
import { AnimalorderitemListRelationFilterObjectSchema } from './AnimalorderitemListRelationFilter.schema';
import { SaleanimalListRelationFilterObjectSchema } from './SaleanimalListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => animalWhereInputObjectSchema),
        z.lazy(() => animalWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => animalWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => animalWhereInputObjectSchema),
        z.lazy(() => animalWhereInputObjectSchema).array(),
      ])
      .optional(),
    ANIMALID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    NAME: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    CATEGORY: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    BREED: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    DATEBORN: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    GENDER: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    REGISTERED: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    COLOR: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    LISTPRICE: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    PHOTO: z
      .lazy(() => BytesNullableFilterObjectSchema)
      .optional()
      .nullable(),
    IMAGEFILE: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    IMAGEHEIGHT: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    IMAGEWIDTH: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => categoryWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    breed: z
      .union([
        z.lazy(() => BreedRelationFilterObjectSchema),
        z.lazy(() => breedWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    animalorderitem: z
      .lazy(() => AnimalorderitemListRelationFilterObjectSchema)
      .optional(),
    saleanimal: z
      .lazy(() => SaleanimalListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const animalWhereInputObjectSchema = Schema;
