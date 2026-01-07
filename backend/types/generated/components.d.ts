import type { Schema, Struct } from '@strapi/strapi';

export interface SpecificationsSpecification extends Struct.ComponentSchema {
  collectionName: 'components_specifications_specifications';
  info: {
    displayName: 'specification';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'specifications.specification': SpecificationsSpecification;
    }
  }
}
