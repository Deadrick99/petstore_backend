import prisma from "../../utils/prisma";
import { citySchemas } from "./city.schema";

export const cityService = {
  create: async (cityDataInput: any) => {
    const cityData = citySchemas.SingleInput.parse(cityDataInput);

    const city = await prisma.city.create({
      data: cityData,
    });

    return citySchemas.SingleOutput.parse(city);
  },

  getAll: async () => {
    const cityList = await prisma.city.findMany();
    return citySchemas.ManyOutput.parse(cityList);
  },

  getById: async (IdInput: any) => {
    const idInput = citySchemas.IdInput.parse(IdInput);

    const city = await prisma.city.findUniqueOrThrow({
      where: {
        Id: idInput.Id,
      },
    });

    return citySchemas.SingleOutput.parse(city);
  },

  updateById: async (IdInput: any, cityDataInput: any) => {
    const idInput = citySchemas.IdInput.parse(IdInput);
    const cityData = citySchemas.SinglePartialInput.parse(cityDataInput);

    const cityNew = await prisma.city.update({
      where: {
        Id: idInput.Id,
      },
      data: cityData,
    });

    return citySchemas.SingleOutput.parse(cityNew);
  },

  deleteById: async (IdInput: any) => {
    const idInput = citySchemas.IdInput.parse(IdInput);

    const cityOld = await prisma.city.delete({
      where: {
        Id: idInput.Id,
      },
    });

    return citySchemas.SingleOutput.parse(cityOld);
  },
};
