import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { NullableBytesFieldUpdateOperationsInputObjectSchema } from './NullableBytesFieldUpdateOperationsInput.schema';
import { breedUpdateOneWithoutAnimalNestedInputObjectSchema } from './breedUpdateOneWithoutAnimalNestedInput.schema';
import { animalorderitemUpdateManyWithoutAnimalNestedInputObjectSchema } from './animalorderitemUpdateManyWithoutAnimalNestedInput.schema';
import { saleanimalUpdateManyWithoutAnimalNestedInputObjectSchema } from './saleanimalUpdateManyWithoutAnimalNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUpdateWithoutCategoryInput> = z
  .object({
    ANIMALID: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    NAME: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    DATEBORN: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    GENDER: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    REGISTERED: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    COLOR: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    LISTPRICE: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    PHOTO: z
      .lazy(() => NullableBytesFieldUpdateOperationsInputObjectSchema)
      .optional()
      .nullable(),
    IMAGEFILE: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    IMAGEHEIGHT: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    IMAGEWIDTH: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    breed: z
      .lazy(() => breedUpdateOneWithoutAnimalNestedInputObjectSchema)
      .optional(),
    animalorderitem: z
      .lazy(() => animalorderitemUpdateManyWithoutAnimalNestedInputObjectSchema)
      .optional(),
    saleanimal: z
      .lazy(() => saleanimalUpdateManyWithoutAnimalNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const animalUpdateWithoutCategoryInputObjectSchema = Schema;
