import type { Styles, html } from 'react-strict-dom';

interface ClipProps {
  clipPath?: string;
  clipRule?: 'evenodd' | 'nonzero';
}

interface ColorProps {
  color?: string;
}

interface FillProps {
  fill?: string;
  fillOpacity?: string | number;
  fillRule?: 'evenodd' | 'nonzero';
}

interface FontProps {
  fontFamily?: string;
  // fontFeatureSettings?: string;
  fontSize?: string | number;
  // fontStretch?:
  //   | 'normal'
  //   | 'wider'
  //   | 'narrower'
  //   | 'ultra-condensed'
  //   | 'extra-condensed'
  //   | 'condensed'
  //   | 'semi-condensed'
  //   | 'semi-expanded'
  //   | 'expanded'
  //   | 'extra-expanded'
  //   | 'ultra-expanded';
  fontStyle?: 'normal' | 'italic' | 'oblique';
  fontVariant?: 'normal' | 'small-caps';
  // fontVariantLigatures?: 'normal' | 'none';
  // fontVariationSettings?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | (string & {})
    | number;
  kerning?: string | number;
  letterSpacing?: string | number;
  textAnchor?: 'start' | 'middle' | 'end';
  textDecoration?: 'none' | 'underline' | 'overline' | 'line-through' | 'blink';
  wordSpacing?: string | number;
}

interface StrokeProps {
  stroke?: string;
  strokeDasharray?: string | number;
  strokeDashoffset?: string | number;
  strokeLinecap?: 'butt' | 'square' | 'round';
  strokeLinejoin?: 'miter' | 'bevel' | 'round';
  strokeMiterlimit?: string | number;
  strokeOpacity?: string | number;
  strokeWidth?: string | number;
  vectorEffect?: 'none' | 'non-scaling-stroke' | 'default' | 'inherit' | 'uri';
}

interface TransformProps {
  transform?: string;
  transformOrigin?: string;
  x?: string | number;
  y?: string | number;
}

interface CommonFilterProps {
  filter?: string;
}

interface CommonMarkerProps {
  marker?: string;
  markerEnd?: string;
  markerMid?: string;
  markerStart?: string;
}

interface CommonMaskProps {
  mask?: string;
}

interface CommonPathProps
  extends ColorProps,
    FillProps,
    StrokeProps,
    ClipProps,
    TransformProps,
    CommonMarkerProps,
    CommonMaskProps,
    CommonFilterProps {
  'aria-label'?: string;
  'data-testid'?: string;
  id?: string;
  vectorEffect?: 'none' | 'non-scaling-stroke' | 'default' | 'inherit' | 'uri';
}

interface CommonTextProps extends CommonPathProps, FontProps {
  alignmentBaseline?:
    | 'baseline'
    | 'before-edge'
    | 'text-before-edge'
    | 'middle'
    | 'central'
    | 'after-edge'
    | 'text-after-edge'
    | 'ideographic'
    | 'alphabetic'
    | 'hanging'
    | 'mathematical';
  baselineShift?: 'sub' | 'super' | 'baseline' | (string & {}) | number;
  fontFeatureSettings?: string;
  lengthAdjust?: 'spacing' | 'spacingAndGlyphs';
  textLength?: string | number;
  verticalAlign?: string | number;
}

export interface StrictReactDOMSvgProps extends StrictReactDOMGProps {
  'aria-hidden'?: boolean;
  height?: string | number;
  preserveAspectRatio?: string;
  role?: 'img';
  style?: React.ComponentProps<typeof html.div>['style'];
  title?: string;
  viewBox?: string;
  width?: string | number;
  xmlns?: string;
  xmlnsXlink?: string;
}

export interface StrictReactDOMCircleProps extends CommonPathProps {
  cx?: string | number;
  cy?: string | number;
  opacity?: string | number;
  r?: string | number;
}

export interface StrictReactDOMClipPathProps {
  children?: React.ReactNode;
  id?: string;
}

export interface StrictReactDOMDefsProps {
  children?: React.ReactNode;
  id?: string;
}

export interface StrictReactDOMEllipseProps extends CommonPathProps {
  cx?: string | number;
  cy?: string | number;
  opacity?: string | number;
  rx?: string | number;
  ry?: string | number;
}

export interface StrictReactDOMForeignObjectProps {
  children?: React.ReactNode;
  height?: string | number;
  width?: string | number;
  x?: string | number;
  y?: string | number;
}

export interface StrictReactDOMGProps extends CommonPathProps, FontProps {
  children?: React.ReactNode;
  opacity?: string | number;
}

export interface StrictReactDOMImageProps extends CommonPathProps {
  height?: string | number;
  href?: string;
  onLoad?: any;
  opacity?: string | number;
  preserveAspectRatio?: string;
  width?: string | number;
  x?: string | number;
  xlinkHref?: string;
  y?: string | number;
}

export interface StrictReactDOMLineProps extends CommonPathProps {
  opacity?: string | number;
  x1?: string | number;
  x2?: string | number;
  y1?: string | number;
  y2?: string | number;
}

export interface StrictReactDOMLinearGradientProps {
  children?: React.ReactNode;
  gradientTransform?: string;
  gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
  id?: string;
  x1?: string | number;
  x2?: string | number;
  y1?: string | number;
  y2?: string | number;
}

export interface StrictReactDOMMarkerProps {
  children?: React.ReactNode;
  id?: string;
  markerHeight?: string | number;
  markerUnits?: 'strokeWidth' | 'userSpaceOnUse';
  markerWidth?: string | number;
  orient?: 'auto' | 'auto-start-reverse' | (string & {}) | number;
  preserveAspectRatio?: string;
  refX?: string | number;
  refY?: string | number;
  viewBox?: string;
}

export interface StrictReactDOMMaskProps extends CommonPathProps {
  children?: React.ReactNode;
  height?: string | number;
  id?: string;
  maskContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
  maskType?: string | number;
  maskUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
  style?: Styles<{
    maskType: string | number;
  }>;
  width?: string | number;
  x?: string | number;
  y?: string | number;
}

export interface StrictReactDOMPathProps extends CommonPathProps {
  d?: string;
  opacity?: string | number;
}

export interface StrictReactDOMPatternProps extends TransformProps {
  children?: React.ReactNode;
  height?: string | number;
  id?: string;
  patternContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
  patternTransform?: string;
  patternUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
  preserveAspectRatio?: string;
  viewBox?: string;
  width?: string | number;
  x?: string | number;
  y?: string | number;
}

export interface StrictReactDOMPolygonProps extends CommonPathProps {
  opacity?: string | number;
  points?: string;
}

export interface StrictReactDOMPolylineProps extends CommonPathProps {
  opacity?: string | number;
  points?: string;
}

export interface StrictReactDOMRadialGradientProps {
  children?: React.ReactNode;
  cx?: string | number;
  cy?: string | number;
  fx?: string | number;
  fy?: string | number;
  gradientTransform?: string;
  gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
  id?: string;
  r?: string | number;
  rx?: string | number;
  ry?: string | number;
}

export interface StrictReactDOMRectProps extends CommonPathProps {
  height?: string | number;
  opacity?: string | number;
  rx?: string | number;
  ry?: string | number;
  width?: string | number;
  x?: string | number;
  y?: string | number;
}

export interface StrictReactDOMStopProps {
  offset?: string | number;
  stopColor?: string;
  stopOpacity?: string | number;
}

export interface StrictReactDOMSymbolProps {
  children?: React.ReactNode;
  id?: string;
  opacity?: string | number;
  preserveAspectRatio?: string;
  viewBox?: string;
}

export interface StrictReactDOMTSpanProps extends CommonPathProps, FontProps {
  children?: React.ReactNode;
  dx?: string | number;
  dy?: string | number;
  inlineSize?: string | number;
  rotate?: string | number;
  x?: string | number;
  y?: string | number;
}

export interface StrictReactDOMTextProps extends CommonTextProps {
  children?: React.ReactNode;
  dx?: string | number;
  dy?: string | number;
  inlineSize?: string | number;
  opacity?: string | number;
  rotate?: string | number;
  style?: Styles<{
    whiteSpace: 'preserve';
  }>;
  x?: string | number;
  y?: string | number;
}

export interface StrictReactDOMTextPathProps extends CommonTextProps {
  children?: React.ReactNode;
  href?: string;
  method?: 'align' | 'stretch';
  midLine?: 'sharp' | 'smooth';
  side?: string;
  spacing?: 'auto' | 'exact';
  startOffset?: string | number;
  xlinkHref?: string;
}

export interface StrictReactDOMUseProps extends CommonPathProps {
  children?: React.ReactNode;
  height?: string | number;
  href?: string;
  opacity?: string | number;
  width?: string | number;
  x?: string | number;
  xlinkHref?: string;
  y?: string | number;
}

export interface StrictReactDOMFeBlendProps {
  in?: string;
  in2?: string;
  mode?: 'normal' | 'multiply' | 'screen' | 'darken' | 'lighten';
}

export interface StrictReactDOMFeColorMatrixProps {
  in?: string;
  type?: 'matrix' | 'saturate' | 'hueRotate' | 'luminanceToAlpha';
  values?: string;
}

export interface StrictReactDOMFeComponentTransferProps {
  children?: React.ReactNode;
  in?: string;
}

export interface StrictReactDOMFeFuncAProps {
  amplitude?: string | number;
  exponent?: string | number;
  intercept?: string | number;
  offset?: string | number;
  slope?: string | number;
  tableValues?: string | number;
  type: 'identity' | 'table' | 'discrete' | 'linear' | 'gamma';
}

export type StrictReactDOMFeFuncBProps = StrictReactDOMFeFuncAProps;

export type StrictReactDOMFeFuncGProps = StrictReactDOMFeFuncAProps;

export type StrictReactDOMFeFuncRProps = StrictReactDOMFeFuncAProps;

export interface StrictReactDOMFeCompositeProps {
  in?: string;
  in2?: string;
  k1?: string | number;
  k2?: string | number;
  k3?: string | number;
  k4?: string | number;
  operator?: 'over' | 'in' | 'out' | 'atop' | 'xor' | 'arithmetic';
}

export interface StrictReactDOMFeConvolveMatrixProps {
  bias?: string | number;
  divisor?: string | number;
  edgeMode?: 'duplicate' | 'wrap' | 'none';
  in?: string;
  kernelMatrix?: string | number;
  kernelUnitLength?: string | number;
  order?: string | number;
  preserveAlpha?: boolean | 'true' | 'false';
  targetX?: string | number;
  targetY?: string | number;
}

export interface StrictReactDOMFeDiffuseLightingProps {
  diffuseConstant?: string | number;
  in?: string;
  kernelUnitLength?: string | number;
  surfaceScale?: string | number;
}

export interface StrictReactDOMFeDisplacementMapProps {
  in?: string;
  in2?: string;
  scale?: string | number;
  xChannelSelector?: 'R' | 'G' | 'B' | 'A';
  yChannelSelector?: 'R' | 'G' | 'B' | 'A';
}

export interface StrictReactDOMFeDistantLightProps {
  azimuth?: string | number;
  elevation?: string | number;
}

export interface StrictReactDOMFeDropShadowProps {
  dx?: string | number;
  dy?: string | number;
  floodColor?: string;
  floodOpacity?: string | number;
  in?: string;
  stdDeviation?: string | number;
}

export interface StrictReactDOMFeFloodProps {
  floodColor?: string;
  floodOpacity?: string | number;
  in?: string;
}

export interface StrictReactDOMFeGaussianBlurProps {
  edgeMode?: 'duplicate' | 'wrap' | 'none';
  in?: string;
  stdDeviation?: string | number;
}

export interface StrictReactDOMFeImageProps {
  crossOrigin?: 'anonymous' | 'use-credentials' | '';
  href?: string;
  preserveAspectRatio?: string;
}

export interface StrictReactDOMFeMergeProps {
  children?: React.ReactNode;
}

export interface StrictReactDOMFeMergeNodeProps {
  in?: string;
}

export interface StrictReactDOMFeMorphologyProps {
  in?: string;
  operator?: 'erode' | 'dilate';
  radius?: string | number;
}

export interface StrictReactDOMFeOffsetProps {
  dx?: string | number;
  dy?: string | number;
  in?: string;
}

export interface StrictReactDOMFePointLightProps {
  x?: string | number;
  y?: string | number;
  z?: string | number;
}

export interface StrictReactDOMFeSpecularLightingProps {
  in?: string;
  kernelUnitLength?: string | number;
  specularConstant?: string | number;
  specularExponent?: string | number;
  surfaceScale?: string | number;
}

export interface StrictReactDOMFeSpotLightProps {
  limitingConeAngle?: string | number;
  pointsAtX?: string | number;
  pointsAtY?: string | number;
  pointsAtZ?: string | number;
  specularExponent?: string | number;
  x?: string | number;
  y?: string | number;
  z?: string | number;
}

export interface StrictReactDOMFeTileProps {
  in?: string;
}

export interface StrictReactDOMFeTurbulenceProps {
  baseFrequency?: string | number;
  numOctaves?: string | number;
  seed?: string | number;
  stitchTiles?: 'stitch' | 'noStitch';
  type?: 'fractalNoise' | 'turbulence';
}

export interface StrictReactDOMFilterProps {
  children?: React.ReactNode;
  filterUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
  height?: string | number;
  id?: string;
  primitiveUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
  width?: string | number;
  x?: string | number;
  y?: string | number;
}
