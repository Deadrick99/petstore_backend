import { bogus_validator_just_pass_data_through } from "../../utils/swagger";
import { animalSwaggerDefinitions } from "./animal.schema";

export const animalSwaggerRouteInfos = {
  create: {
    schema: {
      summary: "Create a New Animal",
      description: "Creates a new Animal with given information",
      tags: ["Animal"],
      body: animalSwaggerDefinitions.SingleInput,
      response: {
        201: animalSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  getAll: {
    schema: {
      summary: "Get All Animals",
      description: "Get a list of all Animals",
      tags: ["Animal"],
      response: {
        200: animalSwaggerDefinitions.ManyOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  getById: {
    schema: {
      summary: "Get Animal by Id",
      description: "Get the Animal with the given Id",
      tags: ["Animal"],
      params: animalSwaggerDefinitions.IdInput,
      response: {
        200: animalSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  UpdateById: {
    schema: {
      summary: "Update Animal by Id",
      description: "Update the data for the Animal with the given Id",
      tags: ["Animal"],
      params: animalSwaggerDefinitions.IdInput,
      body: animalSwaggerDefinitions.SinglePartialInput,
      response: {
        200: animalSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  DeleteById: {
    schema: {
      summary: "Delete Animal by Id",
      description: "Delete the Animal with the given Id",
      tags: ["Animal"],
      params: animalSwaggerDefinitions.IdInput,
      response: {
        200: animalSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },
};
