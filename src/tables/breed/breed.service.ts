import prisma from "../../utils/prisma";
import { breedSchemas } from "./breed.schema";

export const breedService = {
  create: async (breedDataInput: any) => {
    const breedData = breedSchemas.SingleInput.parse(breedDataInput);

    const breed = await prisma.breed.create({
      data: breedData,
    });

    return breedSchemas.SingleOutput.parse(breed);
  },

  getAll: async () => {
    const breedList = await prisma.breed.findMany();
    return breedSchemas.ManyOutput.parse(breedList);
  },

  getById: async (IdInput: any) => {
    const idInput = breedSchemas.IdInput.parse(IdInput);

    const breed = await prisma.breed.findUniqueOrThrow({
      where: {
        Category_Breed: idInput,
      },
    });

    return breedSchemas.SingleOutput.parse(breed);
  },

  updateById: async (IdInput: any, breedDataInput: any) => {
    const idInput = breedSchemas.IdInput.parse(IdInput);
    const breedData = breedSchemas.SinglePartialInput.parse(breedDataInput);

    const breedNew = await prisma.breed.update({
      where: {
        Category_Breed: idInput,
      },
      data: breedData,
    });

    return breedSchemas.SingleOutput.parse(breedNew);
  },

  deleteById: async (IdInput: any) => {
    const idInput = breedSchemas.IdInput.parse(IdInput);

    const breedOld = await prisma.breed.delete({
      where: {
        Category_Breed: idInput,
      },
    });

    return breedSchemas.SingleOutput.parse(breedOld);
  },
};
