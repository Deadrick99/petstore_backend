import prisma from "../../utils/prisma";
import { merchandiseSchemas } from "./merchandise.schema";

export const merchandiseService = {
  create: async (merchandiseDataInput: any) => {
    const merchandiseData = merchandiseSchemas.SingleInput.parse(merchandiseDataInput);

    const merchandise = await prisma.merchandise.create({
      data: merchandiseData,
    });

    return merchandiseSchemas.SingleOutput.parse(merchandise);
  },

  getAll: async () => {
    const merchandiseList = await prisma.merchandise.findMany();
    return merchandiseSchemas.ManyOutput.parse(merchandiseList);
  },

  getById: async (IdInput: any) => {
    const idInput = merchandiseSchemas.IdInput.parse(IdInput);

    const merchandise = await prisma.merchandise.findUniqueOrThrow({
      where: {
        Id: idInput.Id,
      },
    });

    return merchandiseSchemas.SingleOutput.parse(merchandise);
  },

  updateById: async (IdInput: any, merchandiseDataInput: any) => {
    const idInput = merchandiseSchemas.IdInput.parse(IdInput);
    const merchandiseData = merchandiseSchemas.SinglePartialInput.parse(merchandiseDataInput);

    const merchandiseNew = await prisma.merchandise.update({
      where: {
        Id: idInput.Id,
      },
      data: merchandiseData,
    });

    return merchandiseSchemas.SingleOutput.parse(merchandiseNew);
  },

  deleteById: async (IdInput: any) => {
    const idInput = merchandiseSchemas.IdInput.parse(IdInput);

    const merchandiseOld = await prisma.merchandise.delete({
      where: {
        Id: idInput.Id,
      },
    });

    return merchandiseSchemas.SingleOutput.parse(merchandiseOld);
  },
};
