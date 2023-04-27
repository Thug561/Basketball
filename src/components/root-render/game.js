import { render } from 'react-dom'
import React from 'react'
import Loader from './loader.png'
import '@babylonjs/materials'
import * as BABYLON from 'babylonjs';
import {
  BabylonFileLoaderConfiguration,
  Engine,
  DefaultLoadingScreen,
  Scene,
  MeshBuilder,
  StandardMaterial,
  CubeTexture,
  Mesh,
  Texture,
  HDRCubeTexture,
  HemisphericLight,
  diffuseTexture,
  PointLight,
  PBRMaterial,
  FresnelParameters,
  MultiMaterial,
  Vector3,
  Color3,
  Color4,
  StandardRenderingPipeline,
  FreeCamera,
  SceneLoader,
} from '@babylonjs/core'

import * as CANNON from 'cannon'

import Logo from '../../assets/images/logo.png'

import { runScene } from './scenes/scene'

/**
 * Defines the function called in the index.html file that initializes the game
 * as a React component.
 */
// export function initialize() {
//   render(<Game />, document.getElementById('gameContainer'))
// }

/**
 * The class now becomes a react component.
 */
export class Game extends React.Component {
  /**
   * Defines the engine used to draw the game using Babylon.JS and WebGL
   */
  
  engine
  /**
   * Defines the scene used to store and draw elements in the canvas.
   */
  scene

  _canvasRef = null

  /**
   * Renders the component.
   */
  render() {
    return (
      <canvas id="myCanvas"
        style={{ width: '100%', height: '100%' }}
        ref={(r) => (this._canvasRef = r)}
      />
    )
  }



  initialize() {
    this.engine.disableManifestCheck = true
    const config = this.props.config
    const noda = this.scene.getNodeByName('Field')



    setTimeout(() => {
      noda.onMessage('changeCourtColor', this.props.config.colors.court)
      noda.onMessage('changeZoneColor', this.props.config.colors.zone)
      noda.onMessage('changeInZoneColor', this.props.config.colors.paint)
      noda.onMessage('changeSaeftyZoneColor', this.props.config.colors.safety)
      noda.onMessage(
        'changeSize',
        '#111111',
        config.size.type === 'custom'
          ? +config.size.width + +config.size.safety_zone_width
          : +config.size.width,
        config.size.type === 'custom'
          ? +config.size.length + +config.size.safety_zone_length
          : +config.size.length,
        +config.size.length
      )
    })
  }

  /**
   * Called on the component did mount.
   */
  componentDidMount() {
    

    DefaultLoadingScreen.DefaultLogoUrl = Logo
    //DefaultLoadingScreen.DefaultSpinnerUrl = Loader
    if (!this._canvasRef) {
      throw new Error('Failed to get canvas reference.')
    }

    this.engine = new Engine(this._canvasRef, true, { adaptToDeviceRatio: true })
    this.scene = new Scene(this.engine)

    this._bindEvents()
    this._load()

  }


  
  /**
   * Loads the first scene.
   */
  async _load() {
    const rootUrl = './scenes/'

    BabylonFileLoaderConfiguration.LoaderInjectedPhysicsEngine = CANNON

    SceneLoader.Append(
      rootUrl,
      'scene.babylon',
      this.scene,
      (scene) => {
        const {lights, meshes, materials, geometries} = scene;
        // console.log(lights, meshes, materials, geometries);
          scene.executeWhenReady(() => {
          // Attach camera.
          if (!this.scene.activeCamera) {
            throw new Error(
              'No camera defined in the scene. Please add at least one camera in the project or create one yourself in the code.'
            )
          }

          this.scene.activeCamera.attachControl(
            this.engine.getRenderingCanvas(),
            true
          )

          // this.scene.activeCamera.inputs.addTouch()
          const cam = scene.activeCamera
          cam.upperBetaLimit = 1.3
          cam.lowerRadiusLimit = 10
          cam.upperRadiusLimit = 50
            console.log(scene.lights);
          const sun = scene.lights[0];
          sun.intensity = 1;
          sun.intensityMode = "INTENSITYMODE_LUMINANCE";
          sun.range = 10;
          sun.radius = 100;
          sun.shadow = true;
          //console.log(cam)
            console.log(scene.getNodeByName("glass_shild_05"))

          // console.log("sun", this.scene.getNodeByName("sun"));

          const goalrillaGS72 = scene.getNodeByName("glass_shild_05");
          goalrillaGS72.isVisible = false;
          const goaliathGB50 = scene.getNodeByName("color-15_clonedChild");
          goaliathGB50.isVisible = false;
          const goalrillaCV54 = scene.getNodeByName("glass_shild_04");
          goalrillaCV54.isVisible = false;

          const goalrillaCV54_ring = scene.getNodeByName("basket_steel_05");
          const goalrillaCV54_ring_material = new StandardMaterial("color", scene);

          goalrillaCV54_ring_material.diffuseColor = new Color3(0.71, 0.10, 0);
          // goalrillaCV54_ring_material.specularColor = new Color3(1, 0.6, 0.87);
          // goalrillaCV54_ring_material.ambientColor = new Color3(0.23, 0.98, 0.53);
          goalrillaCV54_ring.material = goalrillaCV54_ring_material;
          console.log(goalrillaCV54_ring_material)

          const goalrillaCV60 = scene.getNodeByName("glass_shild_01");
          goalrillaCV60.isVisible = false;
          const goalrillaCV72 = scene.getNodeByName("Goalrilla CV72_one.Goalrilla_CV72.glass_shild_09");
          goalrillaCV72.isVisible = false;
          const goalrillaGB54 = scene.getNodeByName("glass_shild_03");
          goalrillaGB54.isVisible = false;
          const goalrillaGB60 = scene.getNodeByName("glass_shild");
          goalrillaGB60.isVisible = false;

          const goalrillaCV54_bottom = scene.getNodeByName("glossy rubber-2");
          const goalrillaCV54_bottom_material = new StandardMaterial("color", scene);

          goalrillaCV54_bottom_material.diffuseColor = new Color3(0.10, 0.10, 0.10);
          // goalrillaCV54_ring_material.specularColor = new Color3(1, 0.6, 0.87);
          // goalrillaCV54_ring_material.ambientColor = new Color3(0.23, 0.98, 0.53);
          goalrillaCV54_bottom.material = goalrillaCV54_bottom_material;
          console.log(goalrillaCV54_bottom_material)

          const goalrillaCV54_top = scene.getNodeByName("color-5.003");
          const goalrillaCV54_top_material = new StandardMaterial("color", scene);

          goalrillaCV54_top_material.diffuseColor = new Color3(0.10, 0.10, 0.10);
          goalrillaCV54_top.material = goalrillaCV54_top_material;
          console.log(goalrillaCV54_top_material)

          const goalrillaCV54_upper_down = scene.getNodeByName("color-17");
          const goalrillaCV54_upper_down_material = new StandardMaterial("color", scene);

          goalrillaCV54_upper_down_material.diffuseColor = new Color3(0.10, 0.10, 0.10);
          goalrillaCV54_upper_down.material = goalrillaCV54_upper_down_material;
          console.log(goalrillaCV54_upper_down_material)

          const goalrillaCV54_upper_upper = scene.getNodeByName("color-10.003");
          const goalrillaCV54_upper_upper_material = new StandardMaterial("color", scene);

          goalrillaCV54_upper_upper_material.diffuseColor = new Color3(0.10, 0.10, 0.10);
          goalrillaCV54_upper_upper.material = goalrillaCV54_upper_upper_material;
          console.log(goalrillaCV54_upper_upper_material)

          const goalrillaCV54_midle = scene.getNodeByName("color-9.003");
          const goalrillaCV54_midle_material = new StandardMaterial("color", scene);

          goalrillaCV54_midle_material.diffuseColor = new Color3(0.10, 0.10, 0.10);
          goalrillaCV54_midle.material = goalrillaCV54_midle_material;
          console.log(goalrillaCV54_midle_material)


          console.log(scene.getNodeByName("Field"));
          // const fieldNewLight = scene.getNodeByName("Field");
          // const fieldNewLight_material = new StandardMaterial("color", scene);

          // fieldNewLight_material.diffuseColor = new Color3(0.10, 0.10, 0.10);
          // fieldNewLight_material.specularColor = new Color3(1, 0.6, 0.87);
          // fieldNewLight_material.ambientColor = new Color3(0.23, 0.98, 0.53);
          // fieldNewLight.material = fieldNewLight_material;
          // console.log(fieldNewLight_material)
  







          // завантаження текстури
          const texture = new Texture("./scenes/scene/image.png", scene);

          // створення матеріалу з текстурою
          const materialOpacity = new StandardMaterial("materialOpacity", scene);
          materialOpacity.diffuseTexture = texture;

          // призначення відображення світла на матеріалі
          materialOpacity.useLightmapAsShadowmap = true;

          // створення мешу та призначення матеріалу
          const meshOpacity = MeshBuilder.CreateBox("meshOpacity", {width: 1000, height: 0.1, depth: 1000}, scene);

          meshOpacity.material = materialOpacity;
          meshOpacity.material._alpha = 0.06;

        

          



          
          // scene.specularColor = new Color3(0, 1, 0);

    

          // console.log(scene.getMeshByName("3P_zone_line_C"));
          // // fieldMat fieldMat
          // const fieldMat = scene.getMaterialByName("Field_main_material");
          // // const fieldMat = new StandardMaterial("color", scene);
          // // console.log(fieldNode);
          // console.log(scene.getMaterialByName("Field_main_material").bindSceneUniformBuffer);
          // for (let i = 0; i < scene.materials.length; ++i) {
          //   scene.materials[i].diffuseColor = new Color3(0, 1, 1);
          //   scene.materials[i].specularColor = new Color3(0, 1, 1);
          //   scene.materials[i].isVisible = false;
          //   scene.materials[i].alpha = 0;
          //   // console.log(scene.materials[i].specularTexture);
          //   // console.log(scene.materials[i].emissiveTexture);
          //   // console.log(scene.materials[i].ambientTexture);
          //   // console.log(scene.materials[i].diffuseTexture)
          // } 



          // for (let i = 0; i < scene.meshes.length; ++i) {
          //   // scene.meshes[i].isVisible = false;
          //   // scene.meshes[i].visibility = false;

          //   // if (typeof scene.meshes[i].material !=='undefined' && scene.meshes[i].material !== null) {
          //   //   scene.meshes[i].material = null; 
          //   // }
          // } 

          // for (let i = 0; i < scene.textures.length; ++i) {
          //   // scene.meshes[i].isVisible = false;
          //   // scene.meshes[i].visibility = false;
          //   scene.textures[i].specularColor = new Color3(0.5, 0.5, 0.5);
          //   scene.textures[i].diffuseColor = new Color3(1, 1, 1);
          // } 

          // fieldMat._alpha = 0;
          // fieldMat.isVisible = false;

          // fieldMat.diffuseColor = new Color3(0.10, 0.10, 0.10);
          // fieldMat.specularColor = new Color3(0.10, 0.10, 0.10);
          // fieldNode.material = fieldMat;

          // const goalrillaCV54_upper_upper_material = new StandardMaterial("color", scene);

          // goalrillaCV54_upper_upper_material.diffuseColor = new Color3(0.10, 0.10, 0.10);
          // goalrillaCV54_upper_upper.material = goalrillaCV54_upper_upper_material;




          const sky = scene.getNodeByName("Sky");
          sky._isEnabled = true;


          console.log(scene.getMaterialByName("Material #128.005"));

          const ambient = new HemisphericLight("HemiLight", new Vector3(0, 1, 0), scene);
          // this.scene.add(light);
          ambient.intensity = 5;
          ambient.intensityMode = "INTENSITYMODE_LUMINANCE";
          ambient.range = 10;
          ambient.radius = 10;
        

        // Створення джерела світла
        const meshField = this.scene.getNodeByName("Field");
        const light = new PointLight("sun", new Vector3(0, 10, 0), scene);
        
        // Налаштування параметрів джерела світла
        light.diffuse = new Color3(1, 1, 1);
        light.specular = new Color3(1, 1, 1);

        // Налаштування мешу на використання джерела світла
        meshField.light = light;


        var materials = this.scene.materials;
        for (var i = 0; i < materials.length; i++) {
          if (materials[i] instanceof PBRMaterial) {
            materials[i].metallic = 0.1;
          }
        }


          // Run the scene to attach scripts etc.
          runScene(scene)
          this.engine.enableShaderHotReload = true

          this.initialize()
          // Render.



          // console.log(this.scene.cameras[0].inputs)
          //this.scene.cameras[0].inputs.addTouch()
          
          // this.engine.runRenderLoop(() => this.scene.render())


          // this.engine.runRenderLoop(function () {
          //   scene.render();
          // });

          this.engine = new BABYLON.Engine(this.canvas, true, {
            preserveDrawingBuffer: false,
            stencil: false,
            disableWebGL2Support: false,
            useFallbackTexture: true // Доданий параметр
          });



          this.engine.setHardwareScalingLevel(1);
          function renderLoop() {
            scene.render();
          
            // Запустити наступну ітерацію циклу
            requestAnimationFrame(renderLoop);
          }

          // Почати рендеринг сцени
          requestAnimationFrame(renderLoop);
          
        })
      },
      undefined,
      (_, message) => {
        console.error(message)
      },
      'babylon'
    )
  }

  componentDidUpdate(prevProps) {
    const prevConfig = prevProps.config
    const currentConfig = this.props.config
    if (prevConfig.colors.zone !== currentConfig.colors.zone) {
      const noda = this.scene.getNodeByName('Field')
      noda.onMessage('changeZoneColor', currentConfig.colors.zone)
    }
    if (prevConfig.colors.safety !== currentConfig.colors.safety) {
      const noda = this.scene.getNodeByName('Field')

      noda.onMessage('changeSaeftyZoneColor', currentConfig.colors.safety)
    }
    if (prevConfig.colors.paint !== currentConfig.colors.paint) {
      const noda = this.scene.getNodeByName('Field')
      noda.onMessage('changeInZoneColor', currentConfig.colors.paint)
    }
    if (prevConfig.colors.court !== currentConfig.colors.court) {
      const noda = this.scene.getNodeByName('Field')
      noda.onMessage('changeCourtColor', currentConfig.colors.court)
    }
    if (
      prevConfig.size.width !== currentConfig.size.width ||
      prevConfig.size.length !== currentConfig.size.length ||
      prevConfig.size.safety_zone_width !==
        currentConfig.size.safety_zone_width ||
      prevConfig.size.safety_zone_length !==
        currentConfig.size.safety_zone_length
    ) {
      const noda = this.scene.getNodeByName('Field')
  
      noda.onMessage(
        currentConfig.size.type === 'custom' ? 'changeCastom' :'changeSize',
        '#111111',
        currentConfig.size.type === 'custom'
          ? +currentConfig.size.width + +currentConfig.size.safety_zone_width
          : +currentConfig.size.width,
        currentConfig.size.type === 'custom'
          ? +currentConfig.size.length + +currentConfig.size.safety_zone_length
          : +currentConfig.size.length,
        +currentConfig.size.length
      )
    }
    if(prevConfig.basket_type !== currentConfig.basket_type){
      const noda = this.scene.getNodeByName('Field')
      if(currentConfig.size.type === 'custom') noda.onMessage('changeHoopInCastomCort', '#000', currentConfig.size.width, currentConfig.size.length, currentConfig.basket_type)
      else noda.onMessage('changeHoop', '#000', currentConfig.size.width, currentConfig.size.length, currentConfig.basket_type)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize, false)
  }

  /**
   * Binds the required events for a full experience.
   */
  _bindEvents() {
    window.addEventListener('resize', () => this.engine.resize())
  }
}
