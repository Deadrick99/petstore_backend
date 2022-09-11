import { z } from 'zod';
import { customerUpdateInputObjectSchema } from './objects/customerUpdateInput.schema';
import { customerWhereUniqueInputObjectSchema } from './objects/customerWhereUniqueInput.schema';

export const customerUpdateOneSchema = z.object({
  data: customerUpdateInputObjectSchema,
  where: customerWhereUniqueInputObjectSchema,
});
