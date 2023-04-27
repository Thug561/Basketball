"use strict";
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
var MyScript = /** @class */ (function (_super) {
    __extends(MyScript, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function MyScript() {
        var _this = this;
        _this.HoopList = [];
        return _this;
    }
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    MyScript.prototype.onInitialize = function () {
        // ...
    };
    /**
     * Called on the scene starts.
     */
    MyScript.prototype.onStart = function () {
        //#F2C031
        //#CF7E24
        //#B23730
        // const rgb = Color3.FromHexString("#F2C031");
        // var t = new Color4(rgb.r, rgb.g, rgb.b, 1);
        var scene = this.getScene();
        this.HoopList.push(scene.getMeshByName("Goaliath GB50"));
        this.HoopList.push(scene.getMeshByName("Goaliath GB54"));
        this.HoopList.push(scene.getMeshByName("Goaliath GB60"));
        this.HoopList.push(scene.getMeshByName("Goalrilla CV72"));
        this.HoopList.push(scene.getMeshByName("Goalrilla CV54"));
        this.HoopList.push(scene.getMeshByName("Goalrilla CV60"));
        this.HoopList.push(scene.getMeshByName("Goalrilla GS54"));
        this.HoopList.push(scene.getMeshByName("Goalrilla GS60"));
        this.HoopList.push(scene.getMeshByName("Goalrilla GS72"));
        // // scene.debugLayer.show();
        // // scene.debugLayer.setAsActiveScene();
        this.changeBasket("Goalrilla CV60");
        //this.changeSize(15,28);
        // var parent = scene.getMeshByName("Basket_two");
        // this.setVisibility(parent,false);
        // for(var i =0;i<childrens.length;i++)
        // {
        //     Logger.Log(childrens[i].name);
        // }
        // const scene = this.getScene();
        //this.changeHoop("B2255W.glb");
        //this.changeSaeftyZoneColor(new Color4(rgb.r, rgb.g, rgb.b, 1));
        this.changeSize(15, 11);
        //this.changeCastom(5,6);
        //this.onMessage("changeColor", Color3.Red(), null)
    };
    
    MyScript.prototype.changeBasket = function (hoopName) {
        var scene = this.getScene();
        var firstHoopName;
        var secondHoopName;
        if (hoopName == "WITHOUT HOOP") {
            this.setVisibility(scene.getMeshByName(this.Basket_one), false);
            this.setVisibility(scene.getMeshByName(this.Basket_two), false);
            core_1.Logger.Log("if");
        }
        else {
            core_1.Logger.Log("else");
            for (var i = 0; i < this.HoopList.length; i++) {
                core_1.Logger.Log(this.HoopList[i].name);
                var hoop = this.HoopList[i].name;
                if (hoopName == hoop) {
                    this.Basket_one = hoop + "_one";
                    this.Basket_two = hoop + "_two";
                    this.setVisibility(scene.getMeshByName(this.Basket_one), true);
                    this.setVisibility(scene.getMeshByName(this.Basket_two), true);
                }
                else {
                    firstHoopName = hoop + "_one";
                    secondHoopName = hoop + "_two";
                    this.setVisibility(scene.getMeshByName(firstHoopName), false);
                    this.setVisibility(scene.getMeshByName(secondHoopName), false);
                }
            }
        }
    };



    MyScript.prototype.setVisibility = function (mesh, value) {
        mesh.visibility = value;
        var children = mesh.getChildMeshes(false);
        for (var i = 0; i < children.length; i++) {
            children[i].visibility = value;
        }
    };
    MyScript.prototype.changeCourtColor = function (color) {
        this.changeColor("Paint_C", color);
    };
    MyScript.prototype.changeZoneColor = function (color) {
        this.changeColor("3P_zone_line_C", color);
    };
    MyScript.prototype.changeInZoneColor = function (color) {
        this.changeColor("3P_zone_in_C", color);
    };
    MyScript.prototype.changeSaeftyZoneColor = function (color) {
        var scene = this.getScene();
        var saifty = scene.getMeshByName("SaeftyZone");
        var mat = saifty.material;
        var inputMat = mat.getInputBlockByPredicate(function (x) { return x.name == "SaeftyColor"; });
        inputMat.value = color;
        mat.markDirty();
        saifty.material = mat;
    };
    MyScript.prototype.changeMiniLogoPosition = function (width, height) {
        var scene = this.getScene();
        var miniLogo = scene.getMeshByName("Mini_logo");
        miniLogo.position = new core_1.Vector3(width / 2 - 1, 0.02, height / 2 - 0.7);
    };
    MyScript.prototype.changeHoopPosition = function (width, height) {
        var scene = this.getScene();
        var basketArea = scene.getMeshByName("Field");
        core_1.Logger.Log(basketArea.scaling.toString());
        if (width == 15 && height == 28 || width == 18 && height == 30) {
            this.setVisibility(scene.getMeshByName(this.Basket_one), true);
            this.setVisibility(scene.getMeshByName(this.Basket_two), true);
            scene.getMeshByName(this.Basket_one).position = new core_1.Vector3(0, 0, -13.9);
            scene.getMeshByName(this.Basket_two).position = new core_1.Vector3(0, 0, 13.9);
        }
        else if (width == 5 && height == 6) {
            this.setVisibility(scene.getMeshByName(this.Basket_two), false);
            scene.getMeshByName(this.Basket_one).position = new core_1.Vector3(0, 0, -2.9);
        }
        else if (width == 6 && height == 10) {
            this.setVisibility(scene.getMeshByName(this.Basket_two), false);
            scene.getMeshByName(this.Basket_one).position = new core_1.Vector3(0, 0, -4.9);
        }
        else {
            this.setVisibility(scene.getMeshByName(this.Basket_two), false);
            scene.getMeshByName(this.Basket_one).position = new core_1.Vector3(0, 0, (height / 2) * -1);
        }
    };
    MyScript.prototype.changeSize = function (width, height) {
        var scene = this.getScene();
        var saifty = scene.getMeshByName("SaeftyZone");
        var mainLogo = scene.getMeshByName("Main_logo");
        var miniLogo = scene.getMeshByName("Mini_logo");
        var whiteLine = scene.getMeshByName("White_outline");
        var mat = this.material;
        if (width == 15 && height == 28) {
            this.changeHoopPosition(width, height);
            mainLogo.visibility = 1;
            miniLogo.visibility = 0;
            whiteLine.visibility = 0;
            saifty.scaling = new core_1.Vector3(15, 28);
            var inputMat = mat.getInputBlockByPredicate(function (x) { return x.name == "Court Size"; });
            inputMat.value = new core_1.Vector2(15, 28);
            this.scaling = new core_1.Vector3(15, 28);
            mat.markDirty();
            this.material = mat;
            return;
        }
        if (width == 18 && height == 30) {
            this.changeHoopPosition(width, height);
            mainLogo.visibility = 1;
            miniLogo.visibility = 0;
            whiteLine.visibility = 0;
            saifty.scaling = new core_1.Vector3(16.5, 29.5);  //16.5, 29
            var inputMat = mat.getInputBlockByPredicate(function (x) { return x.name == "Court Size"; });
            inputMat.value = new core_1.Vector2(15, 28);
            this.scaling = new core_1.Vector3(15, 28);
            mat.markDirty();
            this.material = mat;
            return;
        }
        if (width == 18 && height == 14) {
            this.changeHoopPosition(15, 11);
            mainLogo.visibility = 0;
            miniLogo.visibility = 1;
            this.changeMiniLogoPosition(15, 11);
            whiteLine.visibility = 1;
            whiteLine.scaling = new core_1.Vector3(15, 11);
            saifty.scaling = new core_1.Vector3(16.5, 12.5);
            var inputMat = mat.getInputBlockByPredicate(function (x) { return x.name == "Court Size"; });
            inputMat.value = new core_1.Vector2(15, 11);
            this.scaling = new core_1.Vector3(15, 11);
            mat.markDirty();
            this.material = mat;
            return;
        }
        if (width == 15 && height == 11) {
            this.changeHoopPosition(width, height);
            mainLogo.visibility = 0;
            miniLogo.visibility = 1;
            whiteLine.visibility = 1;
            this.changeMiniLogoPosition(width, height);
            whiteLine.scaling = new core_1.Vector3(15, 11);
            saifty.scaling = new core_1.Vector3(width, height);
            var inputMat = mat.getInputBlockByPredicate(function (x) { return x.name == "Court Size"; });
            inputMat.value = new core_1.Vector2(width, height);
            this.scaling = new core_1.Vector3(width, height);
            mat.markDirty();
            this.material = mat;
            return;
        }
        if (width == 5 && height == 6) {
            this.changeHoopPosition(4.9, 5.78);
            mainLogo.visibility = 0;
            miniLogo.visibility = 1;
            whiteLine.visibility = 0;
            this.changeMiniLogoPosition(4.9, 5.78);
            saifty.scaling = new core_1.Vector3(4.9, 5.78);
            var inputMat = mat.getInputBlockByPredicate(function (x) { return x.name == "Court Size"; });
            inputMat.value = new core_1.Vector2(4.9, 5.78);
            this.scaling = new core_1.Vector3(4.9, 5.78);
            mat.markDirty();
            this.material = mat;
            return;
        }
        if (width == 6 && height == 10) {
            this.changeHoopPosition(width, height);
            mainLogo.visibility = 0;
            miniLogo.visibility = 1;
            whiteLine.visibility = 1;
            this.changeMiniLogoPosition(width, height);
            whiteLine.scaling = new core_1.Vector3(6, 10);
            saifty.scaling = new core_1.Vector3(width, height);
            var inputMat = mat.getInputBlockByPredicate(function (x) { return x.name == "Court Size"; });
            inputMat.value = new core_1.Vector2(width, height);
            this.scaling = new core_1.Vector3(width, height);
            mat.markDirty();
            this.material = mat;
            return;
        }
        // else
        // {
        //     this.changeHoopPosition(width,height);
        //     mainLogo.visibility = 0;
        //     miniLogo.visibility = 1;
        //     whiteLine.visibility = 1;
        //     whiteLine.scaling = new Vector3(width,height);
        //     saifty.scaling = new Vector3(width,height);
        //     var inputMat =  mat.getInputBlockByPredicate(x=>x.name == "Court Size");
        //     inputMat.value = new Vector2(width,height);
        //     this.scaling = new Vector3(width,height);
        //     mat.markDirty();
        //     this.material = mat;
        //     return;
        // }
    };
    MyScript.prototype.changeCastom = function (width, height) {
        var scene = this.getScene();
        var saifty = scene.getMeshByName("SaeftyZone");
        var mainLogo = scene.getMeshByName("Main_logo");
        var miniLogo = scene.getMeshByName("Mini_logo");
        var whiteLine = scene.getMeshByName("White_outline");
        mainLogo.visibility = 0;
        var mat = this.material;
        var h = 11;
        var w = 15;
        if (width > 15 && height > 11) {
            miniLogo.visibility = 1;
            whiteLine.visibility = 1;
            this.changeMiniLogoPosition(w, h);
            whiteLine.scaling = new core_1.Vector3(w, h);
            saifty.scaling = new core_1.Vector3(width, height);
            this.scaling = new core_1.Vector3(w, h, 1);
            this.changeHoopPosition(w, h);
            var inputMat = mat.getInputBlockByPredicate(function (x) { return x.name == "Court Size"; });
            inputMat.value = new core_1.Vector2(w, h);
            mat.markDirty();
            this.material = mat;
            return;
        }
        else if (width > 15) {
            miniLogo.visibility = 1;
            whiteLine.visibility = 1;
            this.changeMiniLogoPosition(w, height);
            whiteLine.scaling = new core_1.Vector3(w, height);
            saifty.scaling = new core_1.Vector3(width, height);
            this.scaling = new core_1.Vector3(w, height, 1);
            this.changeHoopPosition(w, height);
            var inputMat = mat.getInputBlockByPredicate(function (x) { return x.name == "Court Size"; });
            inputMat.value = new core_1.Vector2(w, height);
            mat.markDirty();
            this.material = mat;
            return;
        }
        else if (height > 11) {
            miniLogo.visibility = 1;
            whiteLine.visibility = 1;
            this.changeMiniLogoPosition(width, h);
            whiteLine.scaling = new core_1.Vector3(width, h);
            //(height-11)/0.5*0.25+height)
            saifty.scaling = new core_1.Vector3(width, height);
            this.scaling = new core_1.Vector3(width, h, 1);
            this.changeHoopPosition(width, h);
            var inputMat = mat.getInputBlockByPredicate(function (x) { return x.name == "Court Size"; });
            inputMat.value = new core_1.Vector2(width, h);
            mat.markDirty();
            this.material = mat;
            return;
        }
        else if (width == 5 && height == 6) {
            this.changeHoopPosition(4.9, 5.78);
            mainLogo.visibility = 0;
            miniLogo.visibility = 1;
            whiteLine.visibility = 0;
            this.changeMiniLogoPosition(4.9, 5.78);
            saifty.scaling = new core_1.Vector3(4.9, 5.78);
            var inputMat = mat.getInputBlockByPredicate(function (x) { return x.name == "Court Size"; });
            inputMat.value = new core_1.Vector2(4.9, 5.78);
            this.scaling = new core_1.Vector3(4.9, 5.78);
            mat.markDirty();
            this.material = mat;
            return;
        }
        else {
            this.changeHoopPosition(width, height);
            miniLogo.visibility = 1;
            whiteLine.visibility = 1;
            this.changeMiniLogoPosition(width, height);
            whiteLine.scaling = new core_1.Vector3(width, height);
            saifty.scaling = new core_1.Vector3(width, height);
            var inputMat = mat.getInputBlockByPredicate(function (x) { return x.name == "Court Size"; });
            inputMat.value = new core_1.Vector2(width, height);
            this.scaling = new core_1.Vector3(width, height);
            mat.markDirty();
            this.material = mat;
            return;
        }
    };
    MyScript.prototype.changeColor = function (name, color) {
        var mat = this.material;
        var inputMat = mat.getInputBlockByPredicate(function (x) { return x.name == name; });
        inputMat.value = color;
        mat.markDirty();
        this.material = mat;
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
    MyScript.prototype.onMessage = function (name, data, width, height, hoopName) {
        var rgb = core_1.Color3.FromHexString(data);
        switch (name) {
            case "changeInZoneColor": //Paint
                this.changeInZoneColor(new core_1.Color4(rgb.r, rgb.g, rgb.b, 1));
                break;
            case "changeZoneColor": // Zone
                this.changeZoneColor(new core_1.Color4(rgb.r, rgb.g, rgb.b, 1));
                break;
            case "changeCourtColor": // Court
                this.changeCourtColor(new core_1.Color4(rgb.r, rgb.g, rgb.b, 1));
                break;
            case "changeSaeftyZoneColor": //saefty
                this.changeSaeftyZoneColor(new core_1.Color4(rgb.r, rgb.g, rgb.b, 1));
                break;
            case "changeSize":
                this.changeSize(width, height);
                break;
            case "changeCastom":
                this.changeCastom(width, height);
                break;
            case "changeHoopInCastomCort":
                if (hoopName == "WITHOUT HOOP") {
                    this.changeCastom(width, height);
                    this.changeBasket(hoopName);
                }
                else {
                    this.changeBasket(hoopName);
                    this.changeCastom(width, height);
                }
                break;
            case "changeHoop":
                if (hoopName == "WITHOUT HOOP") {
                    this.changeSize(width, height);
                    this.changeBasket(hoopName);
                }
                else {
                    this.changeBasket(hoopName);
                    this.changeSize(width, height);
                }
                break;
        }
    };
    return MyScript;
}(core_1.Mesh));
exports.default = MyScript;
//# sourceMappingURL=ColorTest.js.map