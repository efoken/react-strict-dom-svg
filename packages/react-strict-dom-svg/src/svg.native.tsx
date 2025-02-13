import { forwardRef } from 'react';
import {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  FeBlend,
  FeColorMatrix,
  FeComponentTransfer,
  FeComposite,
  FeConvolveMatrix,
  FeDiffuseLighting,
  FeDisplacementMap,
  FeDistantLight,
  FeDropShadow,
  FeFlood,
  FeFuncA,
  FeFuncB,
  FeFuncG,
  FeFuncR,
  FeGaussianBlur,
  FeImage,
  FeMerge,
  FeMergeNode,
  FeMorphology,
  FeOffset,
  FePointLight,
  FeSpecularLighting,
  FeSpotLight,
  FeTile,
  FeTurbulence,
  Filter,
  ForeignObject,
  G,
  Image,
  Line,
  LinearGradient,
  Marker,
  Mask,
  Path,
  Pattern,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Text,
  TextPath,
  TSpan,
  Use
} from 'react-native-svg';
import { css } from 'react-strict-dom';
import type {
  StrictReactDOMCircleProps,
  StrictReactDOMClipPathProps,
  StrictReactDOMDefsProps,
  StrictReactDOMEllipseProps,
  StrictReactDOMFeBlendProps,
  StrictReactDOMFeColorMatrixProps,
  StrictReactDOMFeComponentTransferProps,
  StrictReactDOMFeCompositeProps,
  StrictReactDOMFeConvolveMatrixProps,
  StrictReactDOMFeDiffuseLightingProps,
  StrictReactDOMFeDisplacementMapProps,
  StrictReactDOMFeDistantLightProps,
  StrictReactDOMFeDropShadowProps,
  StrictReactDOMFeFloodProps,
  StrictReactDOMFeFuncAProps,
  StrictReactDOMFeFuncBProps,
  StrictReactDOMFeFuncGProps,
  StrictReactDOMFeFuncRProps,
  StrictReactDOMFeGaussianBlurProps,
  StrictReactDOMFeImageProps,
  StrictReactDOMFeMergeNodeProps,
  StrictReactDOMFeMergeProps,
  StrictReactDOMFeMorphologyProps,
  StrictReactDOMFeOffsetProps,
  StrictReactDOMFePointLightProps,
  StrictReactDOMFeSpecularLightingProps,
  StrictReactDOMFeSpotLightProps,
  StrictReactDOMFeTileProps,
  StrictReactDOMFeTurbulenceProps,
  StrictReactDOMFilterProps,
  StrictReactDOMForeignObjectProps,
  StrictReactDOMGProps,
  StrictReactDOMImageProps,
  StrictReactDOMLinearGradientProps,
  StrictReactDOMLineProps,
  StrictReactDOMMarkerProps,
  StrictReactDOMMaskProps,
  StrictReactDOMPathProps,
  StrictReactDOMPatternProps,
  StrictReactDOMPolygonProps,
  StrictReactDOMPolylineProps,
  StrictReactDOMRadialGradientProps,
  StrictReactDOMRectProps,
  StrictReactDOMStopProps,
  StrictReactDOMSvgProps,
  StrictReactDOMSymbolProps,
  StrictReactDOMTextPathProps,
  StrictReactDOMTextProps,
  StrictReactDOMTSpanProps,
  StrictReactDOMUseProps
} from './types';

function getCustomProperty(value?: string) {
  return value?.startsWith('var(')
    ? // @ts-expect-error: `__customProperties` is used in RSD to store custom properties
      css.__customProperties[value.replace(/^var\(--(.*)\)$/, '$1')]
    : value;
}

function createStrictSvgComponent<T, P extends Record<string, any>>(
  Component: React.ComponentType<any>
) {
  return forwardRef<T, P>(({ 'data-testid': testID, style, ...props }, ref) => {
    const nativeProps: Record<string, any> = props;

    if (props.color != null) {
      nativeProps.color = getCustomProperty(props.color);
    }
    if (props.fill != null) {
      nativeProps.fill = getCustomProperty(props.fill);
    }
    if (props.stroke != null) {
      nativeProps.stroke = getCustomProperty(props.stroke);
    }
    if (props.transformOrigin != null) {
      nativeProps.origin = props.transformOrigin;
    }

    return (
      <Component
        ref={ref}
        testID={testID}
        {...css.props(style)}
        {...nativeProps}
      />
    );
  });
}

/**
 * "svg" (block)
 */
export const svg: React.ComponentType<
  StrictReactDOMSvgProps & React.RefAttributes<SVGSVGElement>
> = forwardRef(({ ...props }, ref) => {
  const Component = createStrictSvgComponent(Svg);
  return <Component ref={ref} {...props} />;
});

/**
 * "circle"
 */
export const circle: React.ComponentType<
  StrictReactDOMCircleProps & React.RefAttributes<SVGCircleElement>
> = createStrictSvgComponent(Circle);

/**
 * "clipPath"
 */
export const clipPath: React.ComponentType<
  StrictReactDOMClipPathProps & React.RefAttributes<SVGClipPathElement>
> = createStrictSvgComponent(ClipPath);

/**
 * "defs"
 */
export const defs: React.ComponentType<
  StrictReactDOMDefsProps & React.RefAttributes<SVGDefsElement>
> = createStrictSvgComponent(Defs);

/**
 * "ellipse"
 */
export const ellipse: React.ComponentType<
  StrictReactDOMEllipseProps & React.RefAttributes<SVGEllipseElement>
> = createStrictSvgComponent(Ellipse);

/**
 * "foreignObject"
 */
export const foreignObject: React.ComponentType<
  StrictReactDOMForeignObjectProps &
    React.RefAttributes<SVGForeignObjectElement>
> = createStrictSvgComponent(ForeignObject);

/**
 * "g"
 */
export const g: React.ComponentType<
  StrictReactDOMGProps & React.RefAttributes<SVGGElement>
> = createStrictSvgComponent(G);

/**
 * "image"
 */
export const image: React.ComponentType<
  StrictReactDOMImageProps & React.RefAttributes<SVGImageElement>
> = createStrictSvgComponent(Image);

/**
 * "line"
 */
export const line: React.ComponentType<
  StrictReactDOMLineProps & React.RefAttributes<SVGLineElement>
> = createStrictSvgComponent(Line);

/**
 * "linearGradient"
 */
export const linearGradient: React.ComponentType<
  StrictReactDOMLinearGradientProps &
    React.RefAttributes<SVGLinearGradientElement>
> = createStrictSvgComponent(LinearGradient);

/**
 * "marker"
 */
export const marker: React.ComponentType<
  StrictReactDOMMarkerProps & React.RefAttributes<SVGMarkerElement>
> = createStrictSvgComponent(Marker);

/**
 * "mask"
 */
export const mask: React.ComponentType<
  StrictReactDOMMaskProps & React.RefAttributes<SVGMaskElement>
> = createStrictSvgComponent(Mask);

/**
 * "path"
 */
export const path: React.ComponentType<
  StrictReactDOMPathProps & React.RefAttributes<SVGPathElement>
> = createStrictSvgComponent(Path);

/**
 * "pattern"
 */
export const pattern: React.ComponentType<
  StrictReactDOMPatternProps & React.RefAttributes<SVGPatternElement>
> = createStrictSvgComponent(Pattern);

/**
 * "polygon"
 */
export const polygon: React.ComponentType<
  StrictReactDOMPolygonProps & React.RefAttributes<SVGPolygonElement>
> = createStrictSvgComponent(Polygon);

/**
 * "polyline"
 */
export const polyline: React.ComponentType<
  StrictReactDOMPolylineProps & React.RefAttributes<SVGPolylineElement>
> = createStrictSvgComponent(Polyline);

/**
 * "radialGradient"
 */
export const radialGradient: React.ComponentType<
  StrictReactDOMRadialGradientProps &
    React.RefAttributes<SVGRadialGradientElement>
> = createStrictSvgComponent(RadialGradient);

/**
 * "rect"
 */
export const rect: React.ComponentType<
  StrictReactDOMRectProps & React.RefAttributes<SVGRectElement>
> = createStrictSvgComponent(Rect);

/**
 * "stop"
 */
export const stop: React.ComponentType<
  StrictReactDOMStopProps & React.RefAttributes<SVGStopElement>
> = createStrictSvgComponent(Stop);

/**
 * "symbol"
 */
export const symbol: React.ComponentType<
  StrictReactDOMSymbolProps & React.RefAttributes<SVGSymbolElement>
> = createStrictSvgComponent(Symbol);

/**
 * "tspan"
 */
export const tspan: React.ComponentType<
  StrictReactDOMTSpanProps & React.RefAttributes<SVGTSpanElement>
> = createStrictSvgComponent(TSpan);

/**
 * "text"
 */
export const text: React.ComponentType<
  StrictReactDOMTextProps & React.RefAttributes<SVGTextElement>
> = createStrictSvgComponent(Text);

/**
 * "textPath"
 */
export const textPath: React.ComponentType<
  StrictReactDOMTextPathProps & React.RefAttributes<SVGTextPathElement>
> = createStrictSvgComponent(TextPath);

/**
 * "use"
 */
export const use: React.ComponentType<
  StrictReactDOMUseProps & React.RefAttributes<SVGUseElement>
> = createStrictSvgComponent(Use);

/**
 * "feBlend"
 */
export const feBlend: React.ComponentType<
  StrictReactDOMFeBlendProps & React.RefAttributes<SVGFEBlendElement>
> = createStrictSvgComponent(FeBlend);

/**
 * "feColorMatrix"
 */
export const feColorMatrix: React.ComponentType<
  StrictReactDOMFeColorMatrixProps &
    React.RefAttributes<SVGFEColorMatrixElement>
> = createStrictSvgComponent(FeColorMatrix);

/**
 * "feComponentTransfer"
 */
export const feComponentTransfer: React.ComponentType<
  StrictReactDOMFeComponentTransferProps &
    React.RefAttributes<SVGFEComponentTransferElement>
> = createStrictSvgComponent(FeComponentTransfer);

/**
 * "feFuncA"
 */
export const feFuncA: React.ComponentType<
  StrictReactDOMFeFuncAProps & React.RefAttributes<SVGFEFuncAElement>
> = createStrictSvgComponent(FeFuncA);

/**
 * "feFuncB"
 */
export const feFuncB: React.ComponentType<
  StrictReactDOMFeFuncBProps & React.RefAttributes<SVGFEFuncBElement>
> = createStrictSvgComponent(FeFuncB);

/**
 * "feFuncG"
 */
export const feFuncG: React.ComponentType<
  StrictReactDOMFeFuncGProps & React.RefAttributes<SVGFEFuncGElement>
> = createStrictSvgComponent(FeFuncG);

/**
 * "feFuncR"
 */
export const feFuncR: React.ComponentType<
  StrictReactDOMFeFuncRProps & React.RefAttributes<SVGFEFuncRElement>
> = createStrictSvgComponent(FeFuncR);

/**
 * "feComposite"
 */
export const feComposite: React.ComponentType<
  StrictReactDOMFeCompositeProps & React.RefAttributes<SVGFECompositeElement>
> = createStrictSvgComponent(FeComposite);

/**
 * "feConvolveMatrix"
 */
export const feConvolveMatrix: React.ComponentType<
  StrictReactDOMFeConvolveMatrixProps &
    React.RefAttributes<SVGFEConvolveMatrixElement>
> = createStrictSvgComponent(FeConvolveMatrix);

/**
 * "feDiffuseLighting"
 */
export const feDiffuseLighting: React.ComponentType<
  StrictReactDOMFeDiffuseLightingProps &
    React.RefAttributes<SVGFEDiffuseLightingElement>
> = createStrictSvgComponent(FeDiffuseLighting);

/**
 * "feDisplacementMap"
 */
export const feDisplacementMap: React.ComponentType<
  StrictReactDOMFeDisplacementMapProps &
    React.RefAttributes<SVGFEDisplacementMapElement>
> = createStrictSvgComponent(FeDisplacementMap);

/**
 * "feDistantLight"
 */
export const feDistantLight: React.ComponentType<
  StrictReactDOMFeDistantLightProps &
    React.RefAttributes<SVGFEDistantLightElement>
> = createStrictSvgComponent(FeDistantLight);

/**
 * "feDropShadow"
 */
export const feDropShadow: React.ComponentType<
  StrictReactDOMFeDropShadowProps & React.RefAttributes<SVGFEDropShadowElement>
> = createStrictSvgComponent(FeDropShadow);

/**
 * "feFlood"
 */
export const feFlood: React.ComponentType<
  StrictReactDOMFeFloodProps & React.RefAttributes<SVGFEFloodElement>
> = createStrictSvgComponent(FeFlood);

/**
 * "feGaussianBlur"
 */
export const feGaussianBlur: React.ComponentType<
  StrictReactDOMFeGaussianBlurProps &
    React.RefAttributes<SVGFEGaussianBlurElement>
> = createStrictSvgComponent(FeGaussianBlur);

/**
 * "feImage"
 */
export const feImage: React.ComponentType<
  StrictReactDOMFeImageProps & React.RefAttributes<SVGFEImageElement>
> = createStrictSvgComponent(FeImage);

/**
 * "feMerge"
 */
export const feMerge: React.ComponentType<
  StrictReactDOMFeMergeProps & React.RefAttributes<SVGFEMergeElement>
> = createStrictSvgComponent(FeMerge);

/**
 * "feMergeNode"
 */
export const feMergeNode: React.ComponentType<
  StrictReactDOMFeMergeNodeProps & React.RefAttributes<SVGFEMergeNodeElement>
> = createStrictSvgComponent(FeMergeNode);

/**
 * "feMorphology"
 */
export const feMorphology: React.ComponentType<
  StrictReactDOMFeMorphologyProps & React.RefAttributes<SVGFEMorphologyElement>
> = createStrictSvgComponent(FeMorphology);

/**
 * "feOffset"
 */
export const feOffset: React.ComponentType<
  StrictReactDOMFeOffsetProps & React.RefAttributes<SVGFEOffsetElement>
> = createStrictSvgComponent(FeOffset);

/**
 * "fePointLight"
 */
export const fePointLight: React.ComponentType<
  StrictReactDOMFePointLightProps & React.RefAttributes<SVGFEPointLightElement>
> = createStrictSvgComponent(FePointLight);

/**
 * "feSpecularLighting"
 */
export const feSpecularLighting: React.ComponentType<
  StrictReactDOMFeSpecularLightingProps &
    React.RefAttributes<SVGFESpecularLightingElement>
> = createStrictSvgComponent(FeSpecularLighting);

/**
 * "feSpotLight"
 */
export const feSpotLight: React.ComponentType<
  StrictReactDOMFeSpotLightProps & React.RefAttributes<SVGFESpotLightElement>
> = createStrictSvgComponent(FeSpotLight);

/**
 * "feTile"
 */
export const feTile: React.ComponentType<
  StrictReactDOMFeTileProps & React.RefAttributes<SVGFETileElement>
> = createStrictSvgComponent(FeTile);

/**
 * "feTurbulence"
 */
export const feTurbulence: React.ComponentType<
  StrictReactDOMFeTurbulenceProps & React.RefAttributes<SVGFETurbulenceElement>
> = createStrictSvgComponent(FeTurbulence);

/**
 * "filter"
 */
export const filter: React.ComponentType<
  StrictReactDOMFilterProps & React.RefAttributes<SVGFilterElement>
> = createStrictSvgComponent(Filter);
