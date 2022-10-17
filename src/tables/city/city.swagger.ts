import { bogus_validator_just_pass_data_through } from "../../utils/swagger";
import { citySwaggerDefinitions } from "./city.schema";

export const citySwaggerRouteInfos = {
  create: {
    schema: {
      summary: "Create a New City",
      description: "Creates a new City with given information",
      tags: ["City"],
      body: citySwaggerDefinitions.SingleInput,
      response: {
        201: citySwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  getAll: {
    schema: {
      summary: "Get All Cities",
      description: "Get a list of all Cities",
      tags: ["City"],
      response: {
        200: citySwaggerDefinitions.ManyOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  getById: {
    schema: {
      summary: "Get Cities by Id",
      description: "Get the City with the given Id",
      tags: ["City"],
      params: citySwaggerDefinitions.IdInput,
      response: {
        200: citySwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  UpdateById: {
    schema: {
      summary: "Update Cities by Id",
      description: "Update the data for the City with the given Id",
      tags: ["City"],
      params: citySwaggerDefinitions.IdInput,
      body: citySwaggerDefinitions.SinglePartialInput,
      response: {
        200: citySwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  DeleteById: {
    schema: {
      summary: "Delete Cities by Id",
      description: "Delete the City with the given Id",
      tags: ["City"],
      params: citySwaggerDefinitions.IdInput,
      response: {
        200: citySwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },
};
