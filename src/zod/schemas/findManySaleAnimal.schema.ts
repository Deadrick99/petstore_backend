import { z } from 'zod';
import { SaleAnimalWhereInputObjectSchema } from './objects/SaleAnimalWhereInput.schema';
import { SaleAnimalOrderByWithRelationInputObjectSchema } from './objects/SaleAnimalOrderByWithRelationInput.schema';
import { SaleAnimalWhereUniqueInputObjectSchema } from './objects/SaleAnimalWhereUniqueInput.schema';
import { SaleAnimalScalarFieldEnumSchema } from './enums/SaleAnimalScalarFieldEnum.schema';

export const SaleAnimalFindManySchema = z.object({
  where: SaleAnimalWhereInputObjectSchema.optional(),
  orderBy: SaleAnimalOrderByWithRelationInputObjectSchema.optional(),
  cursor: SaleAnimalWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SaleAnimalScalarFieldEnumSchema).optional(),
});
