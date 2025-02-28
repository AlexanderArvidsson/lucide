import path from 'path';
import {
  appendFile,
  readSvgDirectory,
  resetFile,
  toPascalCase,
  writeFile,
} from '../../../scripts/helpers';

const srcDirectory = path.join(__dirname, '../dist');

// Declare type definitions
const typeDefinitions = `\
/// <reference types="react" />
import { SVGAttributes } from 'react'

declare module 'lucide-react'

// Create interface extending SVGProps
export interface LucideProps extends Partial<React.SVGProps<SVGSVGElement>> {
    size?: string | number
}

export declare const createReactComponent: (iconName: string, iconNode: any[]) => (props: LucideProps) => JSX.Element;

export type Icon = React.FC<LucideProps>;

// Generated icons
`;

const ICONS_DIR = path.resolve(__dirname, '../../../icons');
const TYPES_FILE = 'lucide-react.d.ts';

resetFile(TYPES_FILE, srcDirectory);
writeFile(typeDefinitions, TYPES_FILE, srcDirectory);

const svgFiles = readSvgDirectory(ICONS_DIR);

svgFiles.forEach(svgFile => {
  const iconName = path.basename(svgFile, '.svg');
  const componentName = `Lu${toPascalCase(iconName)}`;

  const exportTypeString = `export declare const ${componentName}: (props: LucideProps) => JSX.Element;\n`;
  appendFile(exportTypeString, TYPES_FILE, srcDirectory);
});

console.log(`Generated ${TYPES_FILE} file with`, svgFiles.length, 'icons');
