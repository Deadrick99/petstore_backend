import { bogus_validator_just_pass_data_through } from "../../utils/swagger";
import { categorySwaggerDefinitions } from "./category.schema";

export const categorySwaggerRouteInfos = {
  create: {
    schema: {
      summary: "Create a New Category",
      description: "Creates a new Category with given information",
      tags: ["Category"],
      body: categorySwaggerDefinitions.SingleInput,
      response: {
        201: categorySwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  getAll: {
    schema: {
      summary: "Get All Categories",
      description: "Get a list of all Categories",
      tags: ["Category"],
      response: {
        200: categorySwaggerDefinitions.ManyOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  getById: {
    schema: {
      summary: "Get category by Id",
      description: "Get the category with the given Id",
      tags: ["category"],
      params: categorySwaggerDefinitions.IdInput,
      response: {
        200: categorySwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  UpdateById: {
    schema: {
      summary: "Update category by Id",
      description: "Update the data for the category with the given Id",
      tags: ["category"],
      params: categorySwaggerDefinitions.IdInput,
      body: categorySwaggerDefinitions.SinglePartialInput,
      response: {
        200: categorySwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  DeleteById: {
    schema: {
      summary: "Delete category by Id",
      description: "Delete the category with the given Id",
      tags: ["category"],
      params: categorySwaggerDefinitions.IdInput,
      response: {
        200: categorySwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },
};
