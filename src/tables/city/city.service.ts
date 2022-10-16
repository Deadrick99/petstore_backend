import prisma from "../../utils/prisma";
import {
  cityIdInputSchema,
  cityManyOutputSchema,
  citySingleInputSchema,
  citySingleOutputSchema,
  citySinglePartialInputSchema,
} from "./city.schema";

export async function cityCreate(cityDataInput: any) {
  const cityData = citySingleInputSchema.parse(cityDataInput);

  const city = await prisma.city.create({
    data: cityData,
  });

  return citySingleOutputSchema.parse(city);
}

export async function cityGetAll() {
  const cityList = await prisma.city.findMany();
  return cityManyOutputSchema.parse(cityList);
}

export async function cityGetById(IdInput: any) {
  const idInput = cityIdInputSchema.parse(IdInput);

  const city = await prisma.city.findUniqueOrThrow({
    where: {
      Id: idInput.Id,
    },
  });

  return citySingleOutputSchema.parse(city);
}

export async function cityUpdateById(IdInput: any, cityDataInput: any) {
  const idInput = cityIdInputSchema.parse(IdInput);
  const cityData = citySinglePartialInputSchema.parse(cityDataInput);

  const updatedCity = await prisma.city.update({
    where: {
      Id: idInput.Id,
    },
    data: cityData,
  });

  return citySingleOutputSchema.parse(updatedCity);
}

export async function cityDeleteById(IdInput: any) {
  const idInput = cityIdInputSchema.parse(IdInput);

  const city = await prisma.city.delete({
    where: {
      Id: idInput.Id,
    },
  });

  return citySingleOutputSchema.parse(city);
}
