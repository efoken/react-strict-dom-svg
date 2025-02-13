import { forwardRef } from 'react';
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
  StrictReactDOMFeSpotLightProps,
  StrictReactDOMFeTileProps,
  StrictReactDOMFeTurbulenceProps,
  StrictReactDOMFilterProps,
  StrictReactDOMForeignObjectProps,
  StrictReactDOMGProps,
  StrictReactDOMImageProps,
  StrictReactDOMLineProps,
  StrictReactDOMLinearGradientProps,
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
  StrictReactDOMTSpanProps,
  StrictReactDOMTextPathProps,
  StrictReactDOMTextProps,
  StrictReactDOMUseProps
} from './types';

const defaultProcessProps = (props: any) => props;

function createStrictSvgComponent<T, P extends Record<string, any>>(
  TagName: React.ElementType,
  processProps: (props: P) => P = defaultProcessProps
) {
  const debugStyle = {
    $$css: true,
    'debug::name': `svg-${TagName}` as any
  };

  const component = forwardRef<T, P>(({ style, ...props }, ref) => (
    <TagName
      ref={ref}
      {...css.props([debugStyle, style])}
      {...processProps(props as any)}
    />
  ));

  component.displayName = `svg.${TagName}`;
  return component;
}

/**
 * "svg" (block)
 */
export const svg: React.ComponentType<
  StrictReactDOMSvgProps & React.RefAttributes<SVGSVGElement>
> = createStrictSvgComponent('svg');

/**
 * "circle"
 */
export const circle: React.ComponentType<
  StrictReactDOMCircleProps & React.RefAttributes<SVGCircleElement>
> = createStrictSvgComponent('circle');

/**
 * "clipPath"
 */
export const clipPath: React.ComponentType<
  StrictReactDOMClipPathProps & React.RefAttributes<SVGClipPathElement>
> = createStrictSvgComponent('clipPath');

/**
 * "defs"
 */
export const defs: React.ComponentType<
  StrictReactDOMDefsProps & React.RefAttributes<SVGDefsElement>
> = createStrictSvgComponent('defs');

/**
 * "ellipse"
 */
export const ellipse: React.ComponentType<
  StrictReactDOMEllipseProps & React.RefAttributes<SVGEllipseElement>
> = createStrictSvgComponent('ellipse');

/**
 * "foreignObject"
 */
export const foreignObject: React.ComponentType<
  StrictReactDOMForeignObjectProps &
    React.RefAttributes<SVGForeignObjectElement>
> = createStrictSvgComponent('foreignObject');

/**
 * "g"
 */
export const g: React.ComponentType<
  StrictReactDOMGProps & React.RefAttributes<SVGGElement>
> = createStrictSvgComponent('g', ({ x, y, ...props }) => {
  if ((x || y) && props.transform == null) {
    props.transform = `translate(${x ?? 0} ${y ?? 0})`;
  }
  return props;
});

/**
 * "image"
 */
export const image: React.ComponentType<
  StrictReactDOMImageProps & React.RefAttributes<SVGImageElement>
> = createStrictSvgComponent('image');

/**
 * "line"
 */
export const line: React.ComponentType<
  StrictReactDOMLineProps & React.RefAttributes<SVGLineElement>
> = createStrictSvgComponent('line');

/**
 * "linearGradient"
 */
export const linearGradient: React.ComponentType<
  StrictReactDOMLinearGradientProps &
    React.RefAttributes<SVGLinearGradientElement>
> = createStrictSvgComponent('linearGradient');

/**
 * "marker"
 */
export const marker: React.ComponentType<
  StrictReactDOMMarkerProps & React.RefAttributes<SVGMarkerElement>
> = createStrictSvgComponent('marker');

/**
 * "mask"
 */
export const mask: React.ComponentType<
  StrictReactDOMMaskProps & React.RefAttributes<SVGMaskElement>
> = createStrictSvgComponent('mask');

/**
 * "path"
 */
export const path: React.ComponentType<
  StrictReactDOMPathProps & React.RefAttributes<SVGPathElement>
> = createStrictSvgComponent('path');

/**
 * "pattern"
 */
export const pattern: React.ComponentType<
  StrictReactDOMPatternProps & React.RefAttributes<SVGPatternElement>
> = createStrictSvgComponent('pattern');

/**
 * "polygon"
 */
export const polygon: React.ComponentType<
  StrictReactDOMPolygonProps & React.RefAttributes<SVGPolygonElement>
> = createStrictSvgComponent('polygon');

/**
 * "polyline"
 */
export const polyline: React.ComponentType<
  StrictReactDOMPolylineProps & React.RefAttributes<SVGPolylineElement>
> = createStrictSvgComponent('polyline');

/**
 * "radialGradient"
 */
export const radialGradient: React.ComponentType<
  StrictReactDOMRadialGradientProps &
    React.RefAttributes<SVGRadialGradientElement>
> = createStrictSvgComponent('radialGradient');

/**
 * "rect"
 */
export const rect: React.ComponentType<
  StrictReactDOMRectProps & React.RefAttributes<SVGRectElement>
> = createStrictSvgComponent('rect');

/**
 * "stop"
 */
export const stop: React.ComponentType<
  StrictReactDOMStopProps & React.RefAttributes<SVGStopElement>
> = createStrictSvgComponent('stop');

/**
 * "symbol"
 */
export const symbol: React.ComponentType<
  StrictReactDOMSymbolProps & React.RefAttributes<SVGSymbolElement>
> = createStrictSvgComponent('symbol');

/**
 * "tspan"
 */
export const tspan: React.ComponentType<
  StrictReactDOMTSpanProps & React.RefAttributes<SVGTSpanElement>
> = createStrictSvgComponent('tspan');

/**
 * "text"
 */
export const text: React.ComponentType<
  StrictReactDOMTextProps & React.RefAttributes<SVGTextElement>
> = createStrictSvgComponent('text');

/**
 * "textPath"
 */
export const textPath: React.ComponentType<
  StrictReactDOMTextPathProps & React.RefAttributes<SVGTextPathElement>
> = createStrictSvgComponent('textPath');

/**
 * "use"
 */
export const use: React.ComponentType<
  StrictReactDOMUseProps & React.RefAttributes<SVGUseElement>
> = createStrictSvgComponent('use');

/**
 * "feBlend"
 */
export const feBlend: React.ComponentType<
  StrictReactDOMFeBlendProps & React.RefAttributes<SVGFEBlendElement>
> = createStrictSvgComponent('feBlend');

/**
 * "feColorMatrix"
 */
export const feColorMatrix: React.ComponentType<
  StrictReactDOMFeColorMatrixProps &
    React.RefAttributes<SVGFEColorMatrixElement>
> = createStrictSvgComponent('feColorMatrix');

/**
 * "feComponentTransfer"
 */
export const feComponentTransfer: React.ComponentType<
  StrictReactDOMFeComponentTransferProps &
    React.RefAttributes<SVGFEComponentTransferElement>
> = createStrictSvgComponent('feComponentTransfer');

/**
 * "feFuncA"
 */
export const feFuncA: React.ComponentType<
  StrictReactDOMFeFuncAProps & React.RefAttributes<SVGFEFuncAElement>
> = createStrictSvgComponent('feFuncA');

/**
 * "feFuncB"
 */
export const feFuncB: React.ComponentType<
  StrictReactDOMFeFuncBProps & React.RefAttributes<SVGFEFuncBElement>
> = createStrictSvgComponent('feFuncB');

/**
 * "feFuncG"
 */
export const feFuncG: React.ComponentType<
  StrictReactDOMFeFuncGProps & React.RefAttributes<SVGFEFuncGElement>
> = createStrictSvgComponent('feFuncG');

/**
 * "feFuncR"
 */
export const feFuncR: React.ComponentType<
  StrictReactDOMFeFuncRProps & React.RefAttributes<SVGFEFuncRElement>
> = createStrictSvgComponent('feFuncR');

/**
 * "feComposite"
 */
export const feComposite: React.ComponentType<
  StrictReactDOMFeCompositeProps & React.RefAttributes<SVGFECompositeElement>
> = createStrictSvgComponent('feComposite');

/**
 * "feConvolveMatrix"
 */
export const feConvolveMatrix: React.ComponentType<
  StrictReactDOMFeConvolveMatrixProps &
    React.RefAttributes<SVGFEConvolveMatrixElement>
> = createStrictSvgComponent('feConvolveMatrix');

/**
 * "feDiffuseLighting"
 */
export const feDiffuseLighting: React.ComponentType<
  StrictReactDOMFeDiffuseLightingProps &
    React.RefAttributes<SVGFEDiffuseLightingElement>
> = createStrictSvgComponent('feDiffuseLighting');

/**
 * "feDisplacementMap"
 */
export const feDisplacementMap: React.ComponentType<
  StrictReactDOMFeDisplacementMapProps &
    React.RefAttributes<SVGFEDisplacementMapElement>
> = createStrictSvgComponent('feDisplacementMap');

/**
 * "feDistantLight"
 */
export const feDistantLight: React.ComponentType<
  StrictReactDOMFeDistantLightProps &
    React.RefAttributes<SVGFEDistantLightElement>
> = createStrictSvgComponent('feDistantLight');

/**
 * "feDropShadow"
 */
export const feDropShadow: React.ComponentType<
  StrictReactDOMFeDropShadowProps & React.RefAttributes<SVGFEDropShadowElement>
> = createStrictSvgComponent('feDropShadow');

/**
 * "feFlood"
 */
export const feFlood: React.ComponentType<
  StrictReactDOMFeFloodProps & React.RefAttributes<SVGFEFloodElement>
> = createStrictSvgComponent('feFlood');

/**
 * "feGaussianBlur"
 */
export const feGaussianBlur: React.ComponentType<
  StrictReactDOMFeGaussianBlurProps &
    React.RefAttributes<SVGFEGaussianBlurElement>
> = createStrictSvgComponent('feGaussianBlur');

/**
 * "feImage"
 */
export const feImage: React.ComponentType<
  StrictReactDOMFeImageProps & React.RefAttributes<SVGFEImageElement>
> = createStrictSvgComponent('feImage');

/**
 * "feMerge"
 */
export const feMerge: React.ComponentType<
  StrictReactDOMFeMergeProps & React.RefAttributes<SVGFEMergeElement>
> = createStrictSvgComponent('feMerge');

/**
 * "feMergeNode"
 */
export const feMergeNode: React.ComponentType<
  StrictReactDOMFeMergeNodeProps & React.RefAttributes<SVGFEMergeNodeElement>
> = createStrictSvgComponent('feMergeNode');

/**
 * "feMorphology"
 */
export const feMorphology: React.ComponentType<
  StrictReactDOMFeMorphologyProps & React.RefAttributes<SVGFEMorphologyElement>
> = createStrictSvgComponent('feMorphology');

/**
 * "feOffset"
 */
export const feOffset: React.ComponentType<
  StrictReactDOMFeOffsetProps & React.RefAttributes<SVGFEOffsetElement>
> = createStrictSvgComponent('feOffset');

/**
 * "fePointLight"
 */
export const fePointLight: React.ComponentType<
  StrictReactDOMFePointLightProps & React.RefAttributes<SVGFEPointLightElement>
> = createStrictSvgComponent('fePointLight');

/**
 * "feSpotLight"
 */
export const feSpotLight: React.ComponentType<
  StrictReactDOMFeSpotLightProps & React.RefAttributes<SVGFESpotLightElement>
> = createStrictSvgComponent('feSpotLight');

/**
 * "feTile"
 */
export const feTile: React.ComponentType<
  StrictReactDOMFeTileProps & React.RefAttributes<SVGFETileElement>
> = createStrictSvgComponent('feTile');

/**
 * "feTurbulence"
 */
export const feTurbulence: React.ComponentType<
  StrictReactDOMFeTurbulenceProps & React.RefAttributes<SVGFETurbulenceElement>
> = createStrictSvgComponent('feTurbulence');

/**
 * "filter"
 */
export const filter: React.ComponentType<
  StrictReactDOMFilterProps & React.RefAttributes<SVGFilterElement>
> = createStrictSvgComponent('filter');
