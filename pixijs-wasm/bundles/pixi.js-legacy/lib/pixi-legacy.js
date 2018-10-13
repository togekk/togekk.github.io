/*!
 * pixi.js-legacy - v5.0.0-alpha.3
 * Compiled Sat, 13 Oct 2018 04:33:28 UTC
 *
 * pixi.js-legacy is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@pixi/polyfill');
var pixi_js = require('pixi.js');
var canvasRenderer = require('@pixi/canvas-renderer');
var canvasMesh = require('@pixi/canvas-mesh');
var canvasGraphics = require('@pixi/canvas-graphics');
var canvasSprite = require('@pixi/canvas-sprite');
var canvasExtract = require('@pixi/canvas-extract');
var canvasPrepare = require('@pixi/canvas-prepare');
require('@pixi/canvas-sprite-tiling');
require('@pixi/canvas-particles');
require('@pixi/canvas-display');

canvasRenderer.CanvasRenderer.registerPlugin('accessibility', pixi_js.PIXI.accessibility.AccessibilityManager);
canvasRenderer.CanvasRenderer.registerPlugin('extract', canvasExtract.CanvasExtract);
canvasRenderer.CanvasRenderer.registerPlugin('graphics', canvasGraphics.CanvasGraphicsRenderer);
canvasRenderer.CanvasRenderer.registerPlugin('interaction', pixi_js.PIXI.interaction.InteractionManager);
canvasRenderer.CanvasRenderer.registerPlugin('mesh', canvasMesh.CanvasMeshRenderer);
canvasRenderer.CanvasRenderer.registerPlugin('prepare', canvasPrepare.CanvasPrepare);
canvasRenderer.CanvasRenderer.registerPlugin('sprite', canvasSprite.CanvasSpriteRenderer);

Object.assign(pixi_js.PIXI.prepare, canvasPrepare);
Object.assign(pixi_js.PIXI.extract, canvasExtract);

pixi_js.PIXI.Application.prototype.createRenderer = canvasRenderer.autoDetectRenderer;

// Add to namespace window object for people doing `import 'pixi.js-legacy'`
Object.assign(pixi_js.PIXI, {
    autoDetectRenderer: canvasRenderer.autoDetectRenderer,
    CanvasRenderer: canvasRenderer.CanvasRenderer,
    CanvasGraphicsRenderer: canvasGraphics.CanvasGraphicsRenderer,
    CanvasMeshRenderer: canvasMesh.CanvasMeshRenderer,
    CanvasSpriteRenderer: canvasSprite.CanvasSpriteRenderer,
    CanvasTinter: canvasSprite.CanvasTinter,
});

exports.autoDetectRenderer = canvasRenderer.autoDetectRenderer;
exports.CanvasRenderer = canvasRenderer.CanvasRenderer;
exports.CanvasGraphicsRenderer = canvasGraphics.CanvasGraphicsRenderer;
exports.CanvasMeshRenderer = canvasMesh.CanvasMeshRenderer;
exports.CanvasSpriteRenderer = canvasSprite.CanvasSpriteRenderer;
exports.CanvasTinter = canvasSprite.CanvasTinter;
Object.keys(pixi_js).forEach(function (key) { exports[key] = pixi_js[key]; });
//# sourceMappingURL=pixi-legacy.js.map
