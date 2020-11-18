import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { SchematicOptions } from './schema';

export default function (schema: SchematicOptions): Rule {
  return chain([
    externalSchematic('@nrwl/workspace', 'lib', {
      name: `util-${schema.name}`,
      linter: 'tslint',
      directory: schema.directory,
      tags: `type:util, scope:${schema.directory}`,
    }),
  ]);
}
