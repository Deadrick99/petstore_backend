import prisma from "../../utils/db.server";
import { trim_nulls } from "../../utils/object_null_trim";
import { animal_create_inputModel, animal_json_outputSchema } from "./animal.schema";

export async function animal_create(input: animal_create_inputModel) {
  let animal = await prisma.animal.create({
    data: input,
  });

  animal = trim_nulls(animal);
  return animal_json_outputSchema.parse(animal);
}
