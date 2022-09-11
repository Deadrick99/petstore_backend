import { z } from 'zod';
import { animalorderWhereInputObjectSchema } from './objects/animalorderWhereInput.schema';
import { animalorderOrderByWithRelationInputObjectSchema } from './objects/animalorderOrderByWithRelationInput.schema';
import { animalorderWhereUniqueInputObjectSchema } from './objects/animalorderWhereUniqueInput.schema';
import { animalorderScalarFieldEnumSchema } from './enums/animalorderScalarFieldEnum.schema';

export const animalorderFindManySchema = z.object({
  where: animalorderWhereInputObjectSchema.optional(),
  orderBy: animalorderOrderByWithRelationInputObjectSchema.optional(),
  cursor: animalorderWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(animalorderScalarFieldEnumSchema).optional(),
});
