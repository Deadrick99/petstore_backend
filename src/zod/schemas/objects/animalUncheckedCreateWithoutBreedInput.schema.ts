import { z } from 'zod';
import { animalorderitemUncheckedCreateNestedManyWithoutAnimalInputObjectSchema } from './animalorderitemUncheckedCreateNestedManyWithoutAnimalInput.schema';
import { saleanimalUncheckedCreateNestedManyWithoutAnimalInputObjectSchema } from './saleanimalUncheckedCreateNestedManyWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUncheckedCreateWithoutBreedInput> = z
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
    animalorderitem: z
      .lazy(
        () =>
          animalorderitemUncheckedCreateNestedManyWithoutAnimalInputObjectSchema,
      )
      .optional(),
    saleanimal: z
      .lazy(
        () => saleanimalUncheckedCreateNestedManyWithoutAnimalInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const animalUncheckedCreateWithoutBreedInputObjectSchema = Schema;
