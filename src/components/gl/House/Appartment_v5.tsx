/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 appartment_v5.gltf -t -K -T 
Files: appartment_v5.gltf [32.41MB] > appartment_v5-transformed.glb [2.38MB] (93%)
*/

import { useGLTF } from '@react-three/drei';
import { forwardRef } from 'react';
import * as THREE from 'three';
import { type GLTF } from 'three-stdlib';
import { AppartmentHotspot } from './HotSpots/AppartmentHotspot';

type GLTFResult = GLTF & {
  nodes: {
    render_map_brick: THREE.Mesh;
    bookshelf_2001: THREE.Mesh;
    wooden_floor3001: THREE.Mesh;
    bookshelf001: THREE.Mesh;
    DJ_1001: THREE.Mesh;
    boombox_large_1001: THREE.Mesh;
    sofa_3001: THREE.Mesh;
    Cube002: THREE.Mesh;
    sofa_2001: THREE.Mesh;
    closet_without_chair001: THREE.Mesh;
    closet_chair001: THREE.Mesh;
    plant_4001: THREE.Mesh;
    plant_3001: THREE.Mesh;
    plant_2001: THREE.Mesh;
    plant_1001: THREE.Mesh;
    bar001: THREE.Mesh;
    graffitti_party: THREE.Mesh;
    graffitti_gamejam: THREE.Mesh;
    graffitti_react: THREE.Mesh;
    Cube004: THREE.Mesh;
    plant_5001: THREE.Mesh;
    plant_2002: THREE.Mesh;
    stool_4001: THREE.Mesh;
    stool_3001: THREE.Mesh;
    stool_2001: THREE.Mesh;
    stool_1001: THREE.Mesh;
    boombox_large_2001: THREE.Mesh;
    Cube005: THREE.Mesh;
    gueridon001: THREE.Mesh;
    lamp_1001: THREE.Mesh;
    window006: THREE.Mesh;
    armchair001: THREE.Mesh;
    skyline: THREE.Mesh;
    ['38_black_and_white_marble_tile_texture-seamless']: THREE.Mesh;
    cheloupee: THREE.Mesh;
    sink: THREE.Mesh;
    hand_dryer: THREE.Mesh;
    ['241_victorian_cement_floor_tile_uni_colour_texture-seamless']: THREE.Mesh;
    light_2: THREE.Mesh;
    light_: THREE.Mesh;
    neon_2: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube030: THREE.Mesh;
    table_dining_3: THREE.Mesh;
    frame_1: THREE.Mesh;
    frame_4: THREE.Mesh;
    frame_2: THREE.Mesh;
    cyberpunk_4: THREE.Mesh;
    cyberpunk_3: THREE.Mesh;
    Cube006: THREE.Mesh;
  };
  materials: {
    render_map_brick: THREE.MeshStandardMaterial;
    bookshelf_2: THREE.MeshStandardMaterial;
    wooden_floor3: THREE.MeshStandardMaterial;
    bookshelf: THREE.MeshStandardMaterial;
    DJ_1: THREE.MeshStandardMaterial;
    boombox_large_1: THREE.MeshStandardMaterial;
    sofa_3: THREE.MeshStandardMaterial;
    ['16_clean plaster texture-seamless.001']: THREE.MeshStandardMaterial;
    sofa_2: THREE.MeshStandardMaterial;
    closet_without_chair: THREE.MeshStandardMaterial;
    closet_chair: THREE.MeshStandardMaterial;
    ['plant_4.001']: THREE.MeshStandardMaterial;
    ['plant_3.001']: THREE.MeshStandardMaterial;
    ['plant_2.001']: THREE.MeshStandardMaterial;
    ['plant_1.001']: THREE.MeshStandardMaterial;
    bar: THREE.MeshStandardMaterial;
    graffitti_party: THREE.MeshStandardMaterial;
    graffitti_gamejam: THREE.MeshStandardMaterial;
    graffitti_react: THREE.MeshStandardMaterial;
    plant_5: THREE.MeshStandardMaterial;
    plant_2: THREE.MeshStandardMaterial;
    stool_4: THREE.MeshStandardMaterial;
    stool_3: THREE.MeshStandardMaterial;
    stool_2: THREE.MeshStandardMaterial;
    stool_1: THREE.MeshStandardMaterial;
    boombox_large_2: THREE.MeshStandardMaterial;
    ['16_clean plaster texture-seamless']: THREE.MeshStandardMaterial;
    gueridon: THREE.MeshStandardMaterial;
    lamp_1: THREE.MeshStandardMaterial;
    window: THREE.MeshStandardMaterial;
    armchair: THREE.MeshStandardMaterial;
    skyline: THREE.MeshStandardMaterial;
    ['38_black and white marble tile texture-seamless']: THREE.MeshStandardMaterial;
    cheloupee: THREE.MeshStandardMaterial;
    sink: THREE.MeshStandardMaterial;
    hand_dryer: THREE.MeshStandardMaterial;
    ['241_victorian cement floor tile uni colour texture-seamless']: THREE.MeshStandardMaterial;
    light_2: THREE.MeshStandardMaterial;
    light_: THREE.MeshStandardMaterial;
    neon_2: THREE.MeshStandardMaterial;
    ['chalk.001']: THREE.MeshStandardMaterial;
    plaster: THREE.MeshStandardMaterial;
    metal_beam: THREE.MeshStandardMaterial;
    table_dining_3: THREE.MeshStandardMaterial;
    frame_1: THREE.MeshStandardMaterial;
    frame_4: THREE.MeshStandardMaterial;
    frame_2: THREE.MeshStandardMaterial;
    cyberpunk_4: THREE.MeshStandardMaterial;
    cyberpunk_3: THREE.MeshStandardMaterial;
  };
};

export const AppartmentV5 = forwardRef<
  THREE.Mesh,
  JSX.IntrinsicElements['group']
>((props) => {
  const { nodes, materials } = useGLTF(
    'assets/appartment_v5-transformed.glb',
  ) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          geometry={nodes.render_map_brick.geometry}
          material={materials.render_map_brick}
        />
        <mesh
          geometry={nodes.bookshelf_2001.geometry}
          material={materials.bookshelf_2}
          position={[19.661, 2.821, -1.672]}
          scale={1.048}
        />
        <mesh
          geometry={nodes.wooden_floor3001.geometry}
          material={materials.wooden_floor3}
        />
        <mesh
          geometry={nodes.bookshelf001.geometry}
          material={materials.bookshelf}
          position={[32.446, 3.989, -2.215]}
          scale={1.048}
        />
        <mesh
          geometry={nodes.DJ_1001.geometry}
          material={materials.DJ_1}
          position={[0, 0.107, 0]}
        />
        <mesh
          geometry={nodes.boombox_large_1001.geometry}
          material={materials.boombox_large_1}
          position={[0, 0.576, 0]}
        />
        <mesh
          geometry={nodes.sofa_3001.geometry}
          material={materials.sofa_3}
          position={[19.332, 0.349, 15.097]}
        />
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials['16_clean plaster texture-seamless.001']}
        />

        {/* <AppartmentHotspot
          geometry={nodes.sofa_2001.geometry}
          materials={materials.sofa_2}
          position={[-16.512, 0.613, 4.434]}
          scale={1.182}
          hotSpotMachine={barMachine}
        /> */}

        <mesh
          geometry={nodes.closet_without_chair001.geometry}
          material={materials.closet_without_chair}
        />
        <mesh
          geometry={nodes.closet_chair001.geometry}
          material={materials.closet_chair}
        />
        <mesh
          geometry={nodes.plant_4001.geometry}
          material={materials['plant_4.001']}
          position={[0.449, 0, -0.325]}
        />
        <mesh
          geometry={nodes.plant_3001.geometry}
          material={materials['plant_3.001']}
        />
        <mesh
          geometry={nodes.plant_2001.geometry}
          material={materials['plant_2.001']}
        />
        <mesh
          geometry={nodes.plant_1001.geometry}
          material={materials['plant_1.001']}
        />

        <AppartmentHotspot
          type="bar"
          geometry={nodes.bar001.geometry}
          materials={materials.bar}
          position={[8.725, 1.23, 7.158]}
        />

        <mesh
          geometry={nodes.graffitti_party.geometry}
          material={materials.graffitti_party}
          material-toneMapped={false}
          material-emissive={0x800080}
          material-emissiveIntensity={40}
          material-map={materials.graffitti_party.map}
          material-emissiveMap={materials.graffitti_party.map}
        />
        <mesh
          geometry={nodes.graffitti_gamejam.geometry}
          material={materials.graffitti_gamejam}
          material-toneMapped={false}
          material-emissive={0x800080}
          material-emissiveIntensity={40}
          material-emissiveMap={materials.graffitti_gamejam.map}
        />
        <mesh
          geometry={nodes.graffitti_react.geometry}
          material={materials.graffitti_react}
          material-toneMapped={false}
          material-emissive={0x800080}
          material-emissiveIntensity={40}
          material-emissiveMap={materials.graffitti_react.map}
        />
        <mesh
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
        />
        <mesh
          geometry={nodes.plant_5001.geometry}
          material={materials.plant_5}
        />
        <mesh
          geometry={nodes.plant_2002.geometry}
          material={materials.plant_2}
        />
        <mesh
          geometry={nodes.stool_4001.geometry}
          material={materials.stool_4}
        />
        <mesh
          geometry={nodes.stool_3001.geometry}
          material={materials.stool_3}
        />
        <mesh
          geometry={nodes.stool_2001.geometry}
          material={materials.stool_2}
        />
        <mesh
          geometry={nodes.stool_1001.geometry}
          material={materials.stool_1}
        />
        <mesh
          geometry={nodes.boombox_large_2001.geometry}
          material={materials.boombox_large_2}
        />
        <mesh
          geometry={nodes.Cube005.geometry}
          material={materials['16_clean plaster texture-seamless']}
        />
        <mesh
          geometry={nodes.gueridon001.geometry}
          material={materials.gueridon}
        />
        <mesh
          geometry={nodes.lamp_1001.geometry}
          material={materials.lamp_1}
          position={[0.97, -0.242, 0]}
          material-toneMapped={false}
          material-emissive={0xfafa00}
          material-emissiveIntensity={2}
          material-emissiveMap={materials.lamp_1.map}
        />
        <mesh geometry={nodes.window006.geometry} material={materials.window} />
        <mesh
          geometry={nodes.armchair001.geometry}
          material={materials.armchair}
          position={[40.502, 0.293, 2.602]}
        />
        <mesh geometry={nodes.skyline.geometry} material={materials.skyline} />
        <mesh
          geometry={
            nodes['38_black_and_white_marble_tile_texture-seamless'].geometry
          }
          material={
            materials['38_black and white marble tile texture-seamless']
          }
          position={[0, -0.367, 0]}
        />
        <AppartmentHotspot
          geometry={nodes.cheloupee.geometry}
          materials={materials.cheloupee}
          position={[54.192, 3.299, -2.056]}
          type="toilet"
        />
        <mesh geometry={nodes.sink.geometry} material={materials.sink} />
        <mesh
          geometry={nodes.hand_dryer.geometry}
          material={materials.hand_dryer}
          position={[0, 0, -1.69]}
        />
        <mesh
          geometry={
            nodes['241_victorian_cement_floor_tile_uni_colour_texture-seamless']
              .geometry
          }
          material={
            materials[
              '241_victorian cement floor tile uni colour texture-seamless'
            ]
          }
          position={[0, -0.522, 0.193]}
        />
        <mesh
          geometry={nodes.light_2.geometry}
          material={materials.light_2}
          material-toneMapped={false}
          material-emissive={0xfafa00}
          material-emissiveIntensity={2}
          material-emissiveMap={materials.light_2.map}
        />
        <mesh
          geometry={nodes.light_.geometry}
          material={materials.light_}
          material-toneMapped={false}
          material-emissive={0xfafa00}
          material-emissiveIntensity={2}
          material-emissiveMap={materials.light_.map}
        />
        <mesh
          geometry={nodes.neon_2.geometry}
          material={materials.neon_2}
          material-toneMapped={false}
          material-emissive={0x800080}
          material-emissiveIntensity={80}
          material-map={materials.neon_2.map}
          material-emissiveMap={materials.neon_2.map}
        />
        <mesh
          geometry={nodes.Cube003.geometry}
          material={materials['chalk.001']}
        />
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.plaster}
          position={[-40.568, -0.818, 2.305]}
          scale={[0.088, 0.394, 6.638]}
        />
        <mesh
          geometry={nodes.Cube030.geometry}
          material={materials.metal_beam}
          position={[-22.912, 9.236, 15.079]}
          scale={[0.343, 11.172, 0.343]}
        />
        <mesh
          geometry={nodes.table_dining_3.geometry}
          material={materials.table_dining_3}
          position={[29.501, 1.188, 6.433]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.791}
        />
        <mesh
          geometry={nodes.frame_1.geometry}
          material={materials.frame_1}
          position={[13.567, 7.587, 3.226]}
          rotation={[1.802, 0, -Math.PI / 2]}
          scale={5.62}
        />
        <mesh
          geometry={nodes.frame_4.geometry}
          material={materials.frame_4}
          position={[44.865, 4.753, 5.853]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={3.386}
        />
        <mesh
          geometry={nodes.frame_2.geometry}
          material={materials.frame_2}
          position={[44.939, 7.508, 1.031]}
          rotation={[1.619, 0, Math.PI / 2]}
          scale={4.362}
        />
        <mesh
          geometry={nodes.cyberpunk_4.geometry}
          material={materials.cyberpunk_4}
          position={[-22.581, 8.588, 4.871]}
          rotation={[1.698, 0, -Math.PI / 2]}
          scale={4.39}
        />
        <mesh
          geometry={nodes.cyberpunk_3.geometry}
          material={materials.cyberpunk_3}
          position={[-22.455, 5.753, 1.233]}
          rotation={[1.559, 0, -Math.PI / 2]}
          scale={3.745}
        />
        <instancedMesh
          args={[nodes.Cube006.geometry, materials.plaster, 12]}
          // @ts-ignore
          instanceMatrix={nodes.Cube006.instanceMatrix}
        />
      </group>
    </group>
  );
});

useGLTF.preload('assets/appartment_v5-transformed.glb');
