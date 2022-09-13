import { z } from 'zod';
import { MerchandiseOrderUpdateManyMutationInputObjectSchema } from './objects/MerchandiseOrderUpdateManyMutationInput.schema';
import { MerchandiseOrderWhereInputObjectSchema } from './objects/MerchandiseOrderWhereInput.schema';

export const MerchandiseOrderUpdateManySchema = z.object({
  data: MerchandiseOrderUpdateManyMutationInputObjectSchema,
  where: MerchandiseOrderWhereInputObjectSchema.optional(),
});
