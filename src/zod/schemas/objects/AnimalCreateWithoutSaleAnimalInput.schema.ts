import { z } from 'zod';
import { BreedCreateNestedOneWithoutAnimalInputObjectSchema } from './BreedCreateNestedOneWithoutAnimalInput.schema';
import { CategoryCreateNestedOneWithoutAnimalInputObjectSchema } from './CategoryCreateNestedOneWithoutAnimalInput.schema';
import { AnimalOrderItemCreateNestedManyWithoutAnimalInputObjectSchema } from './AnimalOrderItemCreateNestedManyWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalCreateWithoutSaleAnimalInput> = z
  .object({
    NAME: z.string().optional().nullable(),
    DATEBORN: z.date().optional().nullable(),
    GENDER: z.string().optional().nullable(),
    REGISTERED: z.string().optional().nullable(),
    COLOR: z.string().optional().nullable(),
    LISTPRICE: z.number().optional().nullable(),
    IMAGEFILE: z.string().optional().nullable(),
    IMAGEHEIGHT: z.number().optional().nullable(),
    IMAGEWIDTH: z.number().optional().nullable(),
    Breed: z
      .lazy(() => BreedCreateNestedOneWithoutAnimalInputObjectSchema)
      .optional(),
    Category: z
      .lazy(() => CategoryCreateNestedOneWithoutAnimalInputObjectSchema)
      .optional(),
    AnimalOrderItem: z
      .lazy(() => AnimalOrderItemCreateNestedManyWithoutAnimalInputObjectSchema)
      .optional(),
  })
  .strict();

export const AnimalCreateWithoutSaleAnimalInputObjectSchema = Schema;
