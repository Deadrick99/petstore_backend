import { z } from 'zod';
import { CategoryCreateNestedOneWithoutAnimalInputObjectSchema } from './CategoryCreateNestedOneWithoutAnimalInput.schema';
import { AnimalOrderItemCreateNestedManyWithoutAnimalInputObjectSchema } from './AnimalOrderItemCreateNestedManyWithoutAnimalInput.schema';
import { SaleAnimalCreateNestedManyWithoutAnimalInputObjectSchema } from './SaleAnimalCreateNestedManyWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalCreateWithoutBreedInput> = z
  .object({
    ANIMALID: z.number(),
    NAME: z.string().optional().nullable(),
    DATEBORN: z.date().optional().nullable(),
    GENDER: z.string().optional().nullable(),
    REGISTERED: z.string().optional().nullable(),
    COLOR: z.string().optional().nullable(),
    LISTPRICE: z.number().optional().nullable(),
    IMAGEFILE: z.string().optional().nullable(),
    IMAGEHEIGHT: z.number().optional().nullable(),
    IMAGEWIDTH: z.number().optional().nullable(),
    Category: z
      .lazy(() => CategoryCreateNestedOneWithoutAnimalInputObjectSchema)
      .optional(),
    AnimalOrderItem: z
      .lazy(() => AnimalOrderItemCreateNestedManyWithoutAnimalInputObjectSchema)
      .optional(),
    SaleAnimal: z
      .lazy(() => SaleAnimalCreateNestedManyWithoutAnimalInputObjectSchema)
      .optional(),
  })
  .strict();

export const AnimalCreateWithoutBreedInputObjectSchema = Schema;
