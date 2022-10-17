import { bogus_validator_just_pass_data_through } from "../../utils/swagger";
import { customerSwaggerDefinitions } from "./customer.schema";

export const customerSwaggerRouteInfos = {
  create: {
    schema: {
      summary: "Create a New Customer",
      description: "Creates a new Customer with given information",
      tags: ["Customer"],
      body: customerSwaggerDefinitions.SingleInput,
      response: {
        201: customerSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  getAll: {
    schema: {
      summary: "Get All Customers",
      description: "Get a list of all Customers",
      tags: ["Customer"],
      response: {
        200: customerSwaggerDefinitions.ManyOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  getById: {
    schema: {
      summary: "Get Customers by Id",
      description: "Get the Customer with the given Id",
      tags: ["Customer"],
      params: customerSwaggerDefinitions.IdInput,
      response: {
        200: customerSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  UpdateById: {
    schema: {
      summary: "Update Customers by Id",
      description: "Update the data for the Customer with the given Id",
      tags: ["Customer"],
      params: customerSwaggerDefinitions.IdInput,
      body: customerSwaggerDefinitions.SinglePartialInput,
      response: {
        200: customerSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },

  DeleteById: {
    schema: {
      summary: "Delete Customers by Id",
      description: "Delete the Customer with the given Id",
      tags: ["Customer"],
      params: customerSwaggerDefinitions.IdInput,
      response: {
        200: customerSwaggerDefinitions.SingleOutput,
      },
    },
    validatorCompiler: bogus_validator_just_pass_data_through,
  },
};
