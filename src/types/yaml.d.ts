// @rollup/plugin-yaml turns a .yml import into a plain data module. It is typed
// as unknown on purpose: src/content/schema.ts is the only thing allowed to
// decide what that data is.
declare module "*.yml" {
  const data: unknown;
  export default data;
}
