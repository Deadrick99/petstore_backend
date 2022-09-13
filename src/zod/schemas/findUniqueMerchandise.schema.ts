import { z } from 'zod';
import { MerchandiseWhereUniqueInputObjectSchema } from './objects/MerchandiseWhereUniqueInput.schema';

export const MerchandiseFindUniqueSchema = z.object({
  where: MerchandiseWhereUniqueInputObjectSchema,
});
