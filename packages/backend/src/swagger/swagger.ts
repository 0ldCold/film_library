import { getMetadataArgsStorage } from "routing-controllers";
import { routingControllersToSpec } from "routing-controllers-openapi";
import { validationMetadatasToSchemas } from "class-validator-jsonschema";
import Controllers from "src/controllers";

const { defaultMetadataStorage } = require('class-transformer/cjs/storage')

const routingControllersOptions = {
  controllers: Controllers,
  routePrefix: '/api',
}

// Parse class-validator classes into JSON Schema:
const schemas = validationMetadatasToSchemas({
  classTransformerMetadataStorage: defaultMetadataStorage,
  refPointerPrefix: '#/components/schemas/',
})

const storage = getMetadataArgsStorage()
export const openApi = routingControllersToSpec(storage, routingControllersOptions, {
  components: {
    schemas: schemas as any,
    securitySchemes: {
      basicAuth: {
        scheme: 'basic',
        type: 'http',
      },
    },
  },
  info: {
    description: 'Generated with `routing-controllers-openapi`',
    title: 'A sample API',
    version: '1.0.0',
  },
})
