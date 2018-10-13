/*!
 * pixi.js-legacy - v5.0.0-alpha.3
 * Compiled Sat, 13 Oct 2018 04:44:26 UTC
 *
 * pixi.js-legacy is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
import '@pixi/polyfill';
import { PIXI } from 'pixi.js';
import { CanvasRenderer, autoDetectRenderer } from '@pixi/canvas-renderer';
import { CanvasMeshRenderer } from '@pixi/canvas-mesh';
import { CanvasGraphicsRenderer } from '@pixi/canvas-graphics';
import { CanvasSpriteRenderer, CanvasTinter } from '@pixi/canvas-sprite';
import { CanvasExtract } from '@pixi/canvas-extract';
import * as canvasExtract from '@pixi/canvas-extract';
import { CanvasPrepare } from '@pixi/canvas-prepare';
import * as canvasPrepare from '@pixi/canvas-prepare';
import '@pixi/canvas-sprite-tiling';
import '@pixi/canvas-particles';
import '@pixi/canvas-display';

CanvasRenderer.registerPlugin('accessibility', PIXI.accessibility.AccessibilityManager);
CanvasRenderer.registerPlugin('extract', CanvasExtract);
CanvasRenderer.registerPlugin('graphics', CanvasGraphicsRenderer);
CanvasRenderer.registerPlugin('interaction', PIXI.interaction.InteractionManager);
CanvasRenderer.registerPlugin('mesh', CanvasMeshRenderer);
CanvasRenderer.registerPlugin('prepare', CanvasPrepare);
CanvasRenderer.registerPlugin('sprite', CanvasSpriteRenderer);

Object.assign(PIXI.prepare, canvasPrepare);
Object.assign(PIXI.extract, canvasExtract);

PIXI.Application.prototype.createRenderer = autoDetectRenderer;

// Add to namespace window object for people doing `import 'pixi.js-legacy'`
Object.assign(PIXI, {
    autoDetectRenderer: autoDetectRenderer,
    CanvasRenderer: CanvasRenderer,
    CanvasGraphicsRenderer: CanvasGraphicsRenderer,
    CanvasMeshRenderer: CanvasMeshRenderer,
    CanvasSpriteRenderer: CanvasSpriteRenderer,
    CanvasTinter: CanvasTinter,
});

export { autoDetectRenderer, CanvasRenderer, CanvasGraphicsRenderer, CanvasMeshRenderer, CanvasSpriteRenderer, CanvasTinter };
export * from 'pixi.js';
//# sourceMappingURL=pixi-legacy.es.js.map
