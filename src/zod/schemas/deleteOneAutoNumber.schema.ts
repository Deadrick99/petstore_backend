import { z } from 'zod';
import { AutoNumberWhereUniqueInputObjectSchema } from './objects/AutoNumberWhereUniqueInput.schema';

export const AutoNumberDeleteOneSchema = z.object({
  where: AutoNumberWhereUniqueInputObjectSchema,
});
