import React from "react";
import { Scene } from "react-babylonjs";
import { Vector3 } from "@babylonjs/core/Maths/math";

const MyScene = () => {
  return (
    <Scene>
      <arcRotateCamera
        name="camera"
        alpha={-Math.PI / 2}
        beta={Math.PI / 2}
        radius={10}
        target={Vector3.Zero()}
      />
      {/* Додайте інші елементи сцени, які ви бажаєте */}
    </Scene>
  );
};

export default MyScene;