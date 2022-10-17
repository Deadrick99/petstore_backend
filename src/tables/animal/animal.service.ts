import prisma from "../../utils/prisma";
import { animalSchemas } from "./animal.schema";

export const animalService = {
  create: async (animalDataInput: any) => {
    const animalData = animalSchemas.SingleInput.parse(animalDataInput);

    const animal = await prisma.animal.create({
      data: animalData,
    });

    return animalSchemas.SingleOutput.parse(animal);
  },

  getAll: async () => {
    const animalList = await prisma.animal.findMany();
    return animalSchemas.ManyOutput.parse(animalList);
  },

  getById: async (IdInput: any) => {
    const idInput = animalSchemas.IdInput.parse(IdInput);

    const animal = await prisma.animal.findUniqueOrThrow({
      where: {
        Id: idInput.Id,
      },
    });

    return animalSchemas.SingleOutput.parse(animal);
  },

  updateById: async (IdInput: any, animalDataInput: any) => {
    const idInput = animalSchemas.IdInput.parse(IdInput);
    const animalData = animalSchemas.SinglePartialInput.parse(animalDataInput);

    const animalNew = await prisma.animal.update({
      where: {
        Id: idInput.Id,
      },
      data: animalData,
    });

    return animalSchemas.SingleOutput.parse(animalNew);
  },

  deleteById: async (IdInput: any) => {
    const idInput = animalSchemas.IdInput.parse(IdInput);

    const animalOld = await prisma.animal.delete({
      where: {
        Id: idInput.Id,
      },
    });

    return animalSchemas.SingleOutput.parse(animalOld);
  },
};
