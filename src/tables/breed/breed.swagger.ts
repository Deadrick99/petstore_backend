import { bogus_validator_just_pass_data_through } from "../../utils/swagger";
import { breedSwaggerDefinitions } from "./breed.schema";

export const breedSwaggerRouteInfos = {
  create: {
    schema: {
      summary: "Create a New Breed",
      description: "Creates a new Breed with given information",
      tags: ["Breed"],
      body: breedSwaggerDefinitions.SingleInput,
      response: {
        201: breedSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  getAll: {
    schema: {
      summary: "Get All Breeds",
      description: "Get a list of all Breeds",
      tags: ["Breed"],
      response: {
        200: breedSwaggerDefinitions.ManyOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  getById: {
    schema: {
      summary: "Get Breed by Id",
      description: "Get the Breed with the given Id",
      tags: ["Breed"],
      params: breedSwaggerDefinitions.IdInput,
      response: {
        200: breedSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  UpdateById: {
    schema: {
      summary: "Update Breed by Id",
      description: "Update the data for the Breed with the given Id",
      tags: ["Breed"],
      params: breedSwaggerDefinitions.IdInput,
      body: breedSwaggerDefinitions.SinglePartialInput,
      response: {
        200: breedSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  DeleteById: {
    schema: {
      summary: "Delete Breed by Id",
      description: "Delete the Breed with the given Id",
      tags: ["Breed"],
      params: breedSwaggerDefinitions.IdInput,
      response: {
        200: breedSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },
};
