import { z } from 'zod';
import { MerchandiseWhereInputObjectSchema } from './objects/MerchandiseWhereInput.schema';

export const MerchandiseDeleteManySchema = z.object({
  where: MerchandiseWhereInputObjectSchema.optional(),
});
