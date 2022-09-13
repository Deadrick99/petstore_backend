import { z } from 'zod';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './objects/MerchandiseOrderWhereUniqueInput.schema';

export const MerchandiseOrderFindUniqueSchema = z.object({
  where: MerchandiseOrderWhereUniqueInputObjectSchema,
});
