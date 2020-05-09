// Types for compiled templates
declare module 'ember-termin-manager/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}

// Apollo GraphQL imports
declare module '*.graphql' {
  const doc: import('graphql').DocumentNode;
  export default doc;
}