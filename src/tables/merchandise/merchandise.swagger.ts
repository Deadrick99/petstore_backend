import { bogus_validator_just_pass_data_through } from "../../utils/swagger";
import { merchandiseSwaggerDefinitions } from "./merchandise.schema";

export const merchandiseSwaggerRouteInfos = {
  create: {
    schema: {
      summary: "Create a New Merchandise",
      description: "Creates a new Merchandise with given information",
      tags: ["Merchandise"],
      body: merchandiseSwaggerDefinitions.SingleInput,
      response: {
        201: merchandiseSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  getAll: {
    schema: {
      summary: "Get All Merchandise",
      description: "Get a list of all Merchandise",
      tags: ["Merchandise"],
      response: {
        200: merchandiseSwaggerDefinitions.ManyOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  getById: {
    schema: {
      summary: "Get Merchandise by Id",
      description: "Get the Merchandise with the given Id",
      tags: ["Merchandise"],
      params: merchandiseSwaggerDefinitions.IdInput,
      response: {
        200: merchandiseSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  UpdateById: {
    schema: {
      summary: "Update Merchandise by Id",
      description: "Update the data for the Merchandise with the given Id",
      tags: ["Merchandise"],
      params: merchandiseSwaggerDefinitions.IdInput,
      body: merchandiseSwaggerDefinitions.SinglePartialInput,
      response: {
        200: merchandiseSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  DeleteById: {
    schema: {
      summary: "Delete Merchandise by Id",
      description: "Delete the Merchandise with the given Id",
      tags: ["Merchandise"],
      params: merchandiseSwaggerDefinitions.IdInput,
      response: {
        200: merchandiseSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },
};
