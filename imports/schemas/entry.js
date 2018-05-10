import { Random } from 'meteor/random'
import SimpleSchema from 'simpl-schema';
import {
  MultilingualStringSchema,
  MultilingualTextSchema
} from './multilingual';
import LongTextField from 'uniforms-unstyled/LongTextField';

const entrySchemaDefinitions =   {
  _id: {
    type: String,
    autoValue: ()=>Random.id(),
    uniforms: { component: () => null },
  },  
  key: {
    type: String,
    required: true,
    defaultValue: ""
  },  
  text: {
    label: "Text",
    type: MultilingualStringSchema,  
    minCount: 1,
    defaultValue: MultilingualStringSchema.clean({}),
  },
}

const entrySchema = new SimpleSchema(
  entrySchemaDefinitions,
  {
    clean: {getAutoValues: true },
    requiredByDefault: false
  }
);

export {entrySchema, entrySchemaDefinitions};
