import { z } from 'zod';
import { saleanimalUncheckedCreateNestedManyWithoutAnimalInputObjectSchema } from './saleanimalUncheckedCreateNestedManyWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUncheckedCreateWithoutAnimalorderitemInput> =
  z
    .object({
      ANIMALID: z.number(),
      NAME: z.string().optional().nullable(),
      CATEGORY: z.string().optional().nullable(),
      BREED: z.string().optional().nullable(),
      DATEBORN: z.date().optional().nullable(),
      GENDER: z.string().optional().nullable(),
      REGISTERED: z.string().optional().nullable(),
      COLOR: z.string().optional().nullable(),
      LISTPRICE: z.number().optional().nullable(),
      IMAGEFILE: z.string().optional().nullable(),
      IMAGEHEIGHT: z.number().optional().nullable(),
      IMAGEWIDTH: z.number().optional().nullable(),
      saleanimal: z
        .lazy(
          () =>
            saleanimalUncheckedCreateNestedManyWithoutAnimalInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const animalUncheckedCreateWithoutAnimalorderitemInputObjectSchema =
  Schema;
