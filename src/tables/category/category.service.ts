import prisma from "../../utils/prisma";
import { categorySchemas } from "./category.schema";

export const categoryService = {
  create: async (categoryDataInput: any) => {
    const categoryData = categorySchemas.SingleInput.parse(categoryDataInput);

    const category = await prisma.category.create({
      data: categoryData,
    });

    return categorySchemas.SingleOutput.parse(category);
  },

  getAll: async () => {
    const categoryList = await prisma.category.findMany();
    return categorySchemas.ManyOutput.parse(categoryList);
  },

  getById: async (IdInput: any) => {
    const idInput = categorySchemas.IdInput.parse(IdInput);

    const category = await prisma.category.findUniqueOrThrow({
      where: {
        Category: idInput.Category,
      },
    });

    return categorySchemas.SingleOutput.parse(category);
  },

  updateById: async (IdInput: any, categoryDataInput: any) => {
    const idInput = categorySchemas.IdInput.parse(IdInput);
    const categoryData = categorySchemas.SinglePartialInput.parse(categoryDataInput);

    const categoryNew = await prisma.category.update({
      where: {
        Category: idInput.Category,
      },
      data: categoryData,
    });

    return categorySchemas.SingleOutput.parse(categoryNew);
  },

  deleteById: async (IdInput: any) => {
    const idInput = categorySchemas.IdInput.parse(IdInput);

    const categoryOld = await prisma.category.delete({
      where: {
        Category: idInput.Category,
      },
    });

    return categorySchemas.SingleOutput.parse(categoryOld);
  },
};
