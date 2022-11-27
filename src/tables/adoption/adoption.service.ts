import prisma from "../../utils/prisma";
import { adoptionSchemas } from "./adoption.schema";

export const adoptionService = {
  create: async (adoptionDataInput: any) => {
    const adoptionData = adoptionSchemas.SingleInput.parse(adoptionDataInput);

    const adoption = await prisma.adoption.create({
      data: adoptionData,
    });

    return adoptionSchemas.SingleOutput.parse(adoption);
  },

  getAll: async () => {
    const adoptionList = await prisma.adoption.findMany();
    return adoptionSchemas.ManyOutput.parse(adoptionList);
  },

  getById: async (IdInput: any) => {
    const idInput = adoptionSchemas.IdInput.parse(IdInput);

    const adoption = await prisma.adoption.findUniqueOrThrow({
      where: {
        Id: idInput.Id,
      },
    });

    return adoptionSchemas.SingleOutput.parse(adoption);
  },

  updateById: async (IdInput: any, adoptionDataInput: any) => {
    const idInput = adoptionSchemas.IdInput.parse(IdInput);
    const adoptionData = adoptionSchemas.SinglePartialInput.parse(adoptionDataInput);

    const adoptionNew = await prisma.adoption.update({
      where: {
        Id: idInput.Id,
      },
      data: adoptionData,
    });

    return adoptionSchemas.SingleOutput.parse(adoptionNew);
  },

  deleteById: async (IdInput: any) => {
    const idInput = adoptionSchemas.IdInput.parse(IdInput);

    const adoptionOld = await prisma.adoption.delete({
      where: {
        Id: idInput.Id,
      },
    });

    return adoptionSchemas.SingleOutput.parse(adoptionOld);
  },
};
