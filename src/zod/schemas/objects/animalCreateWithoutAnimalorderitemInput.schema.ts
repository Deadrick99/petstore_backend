import { z } from 'zod';
import { categoryCreateNestedOneWithoutAnimalInputObjectSchema } from './categoryCreateNestedOneWithoutAnimalInput.schema';
import { breedCreateNestedOneWithoutAnimalInputObjectSchema } from './breedCreateNestedOneWithoutAnimalInput.schema';
import { saleanimalCreateNestedManyWithoutAnimalInputObjectSchema } from './saleanimalCreateNestedManyWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalCreateWithoutAnimalorderitemInput> = z
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
    category: z
      .lazy(() => categoryCreateNestedOneWithoutAnimalInputObjectSchema)
      .optional(),
    breed: z
      .lazy(() => breedCreateNestedOneWithoutAnimalInputObjectSchema)
      .optional(),
    saleanimal: z
      .lazy(() => saleanimalCreateNestedManyWithoutAnimalInputObjectSchema)
      .optional(),
  })
  .strict();

export const animalCreateWithoutAnimalorderitemInputObjectSchema = Schema;
