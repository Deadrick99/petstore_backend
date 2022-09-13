import { z } from 'zod';
import { EmployeeWhereInputObjectSchema } from './objects/EmployeeWhereInput.schema';
import { EmployeeOrderByWithRelationInputObjectSchema } from './objects/EmployeeOrderByWithRelationInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './objects/EmployeeWhereUniqueInput.schema';
import { EmployeeScalarFieldEnumSchema } from './enums/EmployeeScalarFieldEnum.schema';

export const EmployeeFindManySchema = z.object({
  where: EmployeeWhereInputObjectSchema.optional(),
  orderBy: EmployeeOrderByWithRelationInputObjectSchema.optional(),
  cursor: EmployeeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(EmployeeScalarFieldEnumSchema).optional(),
});
