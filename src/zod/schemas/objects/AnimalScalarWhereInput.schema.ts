import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { BytesNullableFilterObjectSchema } from './BytesNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AnimalScalarWhereInputObjectSchema),
        z.lazy(() => AnimalScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AnimalScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AnimalScalarWhereInputObjectSchema),
        z.lazy(() => AnimalScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const AnimalScalarWhereInputObjectSchema = Schema;
