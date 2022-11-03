import { citySwaggerDefinitions } from "../tables/city/city.schema";
import { customerSwaggerDefinitions } from "../tables/customer/customer.schema";

export const swagger_info = {
  openapi: {
    info: {
      title: "",
      description: "",
      version: "",
    },
    host: "localhost",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
      { name: "Animal", description: "Animal related end-points" },
      { name: "Category", description: "Category related end-points" },
      { name: "Customer", description: "Customer related end-points" },
      { name: "City", description: "City related end-points" },
      { name: "Merchandise", description: "Merchandise related end-points" },
    ],
    definitions: {
      ...citySwaggerDefinitions,
      ...customerSwaggerDefinitions,
    },
  },
};

export const swagger_ui_info = {
  routePrefix: "/docs",
  uiConfig: {
    deepLinking: false,
  },
  staticCSP: true,
};

export const bogus_validator_just_pass_data_through = () => {
  return (data: any) => {
    return { value: data };
  };
};
