import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

interface Schematic {
  name: string;
  directory: string;
}

export default function (schema: Schematic): Rule {
  return chain([
    externalSchematic('@nrwl/workspace', 'lib', {
      name: `util-${schema.name}`,
      linter: 'tslint',
      directory: schema.directory,
      tags: `type:util, scope:${schema.directory}`,
    }),
  ]);
}
