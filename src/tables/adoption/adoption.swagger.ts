import { bogus_validator_just_pass_data_through } from "../../utils/swagger";
import { adoptionSwaggerDefinitions } from "./adoption.schema";

export const adoptionSwaggerRouteInfos = {
  create: {
    schema: {
      summary: "Create a New Animal",
      description: "Creates a new Animal with given information",
      tags: ["Adoption"],
      body: adoptionSwaggerDefinitions.SingleInput,
      response: {
        201: adoptionSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  getAll: {
    schema: {
      summary: "Get All Animals",
      description: "Get a list of all Animals",
      tags: ["Adoption"],
      response: {
        200: adoptionSwaggerDefinitions.ManyOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  getById: {
    schema: {
      summary: "Get Animal by Id",
      description: "Get the Animal with the given Id",
      tags: ["Adoption"],
      params: adoptionSwaggerDefinitions.IdInput,
      response: {
        200: adoptionSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  UpdateById: {
    schema: {
      summary: "Update Animal by Id",
      description: "Update the data for the Animal with the given Id",
      tags: ["Adoption"],
      params: adoptionSwaggerDefinitions.IdInput,
      body: adoptionSwaggerDefinitions.SinglePartialInput,
      response: {
        200: adoptionSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  DeleteById: {
    schema: {
      summary: "Delete Animal by Id",
      description: "Delete the Animal with the given Id",
      tags: ["Adoption"],
      params: adoptionSwaggerDefinitions.IdInput,
      response: {
        200: adoptionSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },
};
