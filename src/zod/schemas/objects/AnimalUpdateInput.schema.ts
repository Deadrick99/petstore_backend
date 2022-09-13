import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { NullableBytesFieldUpdateOperationsInputObjectSchema } from './NullableBytesFieldUpdateOperationsInput.schema';
import { BreedUpdateOneWithoutAnimalNestedInputObjectSchema } from './BreedUpdateOneWithoutAnimalNestedInput.schema';
import { CategoryUpdateOneWithoutAnimalNestedInputObjectSchema } from './CategoryUpdateOneWithoutAnimalNestedInput.schema';
import { AnimalOrderItemUpdateManyWithoutAnimalNestedInputObjectSchema } from './AnimalOrderItemUpdateManyWithoutAnimalNestedInput.schema';
import { SaleAnimalUpdateManyWithoutAnimalNestedInputObjectSchema } from './SaleAnimalUpdateManyWithoutAnimalNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalUpdateInput> = z
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
    Breed: z
      .lazy(() => BreedUpdateOneWithoutAnimalNestedInputObjectSchema)
      .optional(),
    Category: z
      .lazy(() => CategoryUpdateOneWithoutAnimalNestedInputObjectSchema)
      .optional(),
    AnimalOrderItem: z
      .lazy(() => AnimalOrderItemUpdateManyWithoutAnimalNestedInputObjectSchema)
      .optional(),
    SaleAnimal: z
      .lazy(() => SaleAnimalUpdateManyWithoutAnimalNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const AnimalUpdateInputObjectSchema = Schema;
