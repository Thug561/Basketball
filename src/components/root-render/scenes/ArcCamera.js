"use strict";

// import * as BABYLON from "@babylonjs/core/Legacy/legacy";

// console.log(BABYLON);

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@babylonjs/core");
/**
 * This represents a script that is attached to a node in the editor.
 * Available nodes are:
 *      - Meshes
 *      - Lights
 *      - Cameas
 *      - Transform nodes
 *
 * You can extend the desired class according to the node type.
 * Example:
 *      export default class MyMesh extends Mesh {
 *          public onUpdate(): void {
 *              this.rotation.y += 0.04;
 *          }
 *      }
 * The function "onInitialize" is called immediately after the constructor is called.
 * The functions "onStart" and "onUpdate" are called automatically.
 */



var MyScript = /** @class */ (function (_super) {
    __extends(MyScript, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function MyScript() {
        var _this = this;
        return _this;
    }
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    MyScript.prototype.onInitialize = function () {
    };
    /**
     * Called on the scene starts.
     */
    MyScript.prototype.onStart = function () {
        var scene = this.getScene();
        console.log(scene.getNodeByName("sun"));
        var cort = scene.getMeshByName("Field");
        var SafetyZone = scene.getMeshByName("SaeftyZone");
        this.position = new core_1.Vector3(0, -30, 0);
        // this.target = SafetyZone.position;
        this.upperBetaLimit = 1.5;
        this.lowerRadiusLimit = 0;
        this.upperRadiusLimit = 50;
        this.target = new core_1.Vector3(0, 3.5, 0);
        console.log(this.target);



        document.kek = this
        document.lol = (x, y, z) => document.kek.position = new core_1.Vector3(x, y, z);
        document.cheburek(document.lol);
        document.cheburek = zhopa => document.lol;
        console.log(document.cheburek);
    };


    /**
     * Called each frame.
     */
    MyScript.prototype.onUpdate = function () {
    };
    /**
     * Called on a message has been received and sent from a graph.
     * @param message defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    MyScript.prototype.onMessage = function (name, data, sender) {
        switch (name) {
            case "myMessage":
                // Do something...
                break;
        }
    };
    return MyScript;
}(core_1.ArcRotateCamera));

exports.default = MyScript;
//# sourceMappingURL=ArcCamera.js.map