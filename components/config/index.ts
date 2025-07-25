/**
 * Configuration System
 * 
 * This centralized configuration system organizes all magic numbers and constants
 * used throughout the HexPad application.
 * 
 * ORGANIZATION:
 * 
 * 📐 gridConfig.ts - Grid geometry, zoom behavior, hex sizing, and interaction
 *    - GRID_CONFIG: Core grid behavior and constraints
 *    - HEX_GEOMETRY: Hexagon mathematical calculations
 * 
 * 🎨 uiConfig.ts - UI styling, layout, colors, and visual design
 *    - UI_CONFIG: Complete UI design system with colors, spacing, typography
 * 
 * 🖼️ assetsConfig.ts - Colors, textures, and asset paths
 *    - COLORS: Paint color definitions with WebGL RGB values
 *    - PAINT_OPTIONS: All available paint options (colors and textures) in a flat array
 *    - DEFAULT_COLORS: Fallback and initial states
 *
 */

export { GRID_CONFIG, HEX_GEOMETRY } from './gridConfig';
export type { GridConfig, HexGeometry } from './gridConfig';

export { UI_CONFIG } from './uiConfig';
export type { 
  UIConfig, 
  SpacingConfig, 
  BorderRadiusConfig, 
  FontSizeConfig, 
  FontWeightConfig, 
  ColorsConfig, 
  BlurConfig, 
  BoxShadowConfig, 
  GridControlsConfig, 
  HoverConfig, 
  ZIndexConfig 
} from './uiConfig';

export { COLORS, DEFAULT_COLORS, PAINT_OPTIONS, BACKGROUND_COLORS, BORDER_COLORS } from './assetsConfig';
export type { 
  RGB, 
  Color, 
  ColorItem, 
  TextureItem, 
  AssetItem,
  DefaultColors, 
  BackgroundColor,
  BorderColor 
} from './assetsConfig';

export { ICON_OPTIONS } from './iconsConfig';
export type { IconItem } from './iconsConfig';

// Additional types used by components
export interface HexTexture {
  type: 'color' | 'texture';
  name: string;
  displayName: string;
  rgb?: [number, number, number];
  path?: string;
} 