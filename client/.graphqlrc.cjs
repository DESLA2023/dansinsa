/** @type {import('@graphql-codegen/cli').CodegenConfig} */
module.exports = {
  schema: '../server/src/generated/schema.graphql',
  //   documents: 'src/gql/**/*.{ts,tsx,gql}',
  //   ignoreNoDocuments: true,
  extensions: {
    codegen: {
      generates: {
        'src/gql/': {
          preset: 'client',
          presetConfig: {
            fragmentMasking: false,
          },
          plugins: [],
          config: {
            enumsAsTypes: true,
            skipTypename: true,
            scalars: {
              BigInt: 'string',
              FileUri: 'string',
              DateTime: 'string',
              Upload: 'File',
            },
          },
        },
      },
    },
  },
};
