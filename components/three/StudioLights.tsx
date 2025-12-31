import { Environment, Lightformer, SpotLight } from "@react-three/drei"

const StudioLights = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer 
            form={"rect"}
            intensity={10}
            position={[-10, 5, -5]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer 
            form={"rect"}
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>
      <SpotLight 
        angle={0.15}
        position={[-2, 10, 5]}
        decay={0}
        intensity={Math.PI * 0.2}
      />
      <SpotLight 
        angle={0.15}
        position={[0, -25, 10]}
        decay={0}
        intensity={Math.PI * 0.2}
      />
      <SpotLight 
        angle={0.15}
        position={[0, 15, 5]}
        decay={0.1}
        intensity={Math.PI}
      />
    </group>
  )
}
export default StudioLights