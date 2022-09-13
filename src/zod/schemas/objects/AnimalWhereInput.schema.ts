import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { BytesNullableFilterObjectSchema } from './BytesNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BreedRelationFilterObjectSchema } from './BreedRelationFilter.schema';
import { BreedWhereInputObjectSchema } from './BreedWhereInput.schema';
import { CategoryRelationFilterObjectSchema } from './CategoryRelationFilter.schema';
import { CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { AnimalOrderItemListRelationFilterObjectSchema } from './AnimalOrderItemListRelationFilter.schema';
import { SaleAnimalListRelationFilterObjectSchema } from './SaleAnimalListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AnimalWhereInputObjectSchema),
        z.lazy(() => AnimalWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AnimalWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AnimalWhereInputObjectSchema),
        z.lazy(() => AnimalWhereInputObjectSchema).array(),
      ])
      .optional(),
    ANIMALID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
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
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    IMAGEWIDTH: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    Breed: z
      .union([
        z.lazy(() => BreedRelationFilterObjectSchema),
        z.lazy(() => BreedWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    AnimalOrderItem: z
      .lazy(() => AnimalOrderItemListRelationFilterObjectSchema)
      .optional(),
    SaleAnimal: z
      .lazy(() => SaleAnimalListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const AnimalWhereInputObjectSchema = Schema;
