import { z } from 'zod';
import { MerchandiseWhereUniqueInputObjectSchema } from './objects/MerchandiseWhereUniqueInput.schema';

export const MerchandiseDeleteOneSchema = z.object({
  where: MerchandiseWhereUniqueInputObjectSchema,
});
