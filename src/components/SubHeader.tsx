import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { socialMediaList } from "../utils/commonImports";

export default function SubHeader() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    currentMount.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load(
      "/src/assets/models/scene.gltf",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1.5, 1.5, 1.5);
        model.position.set(0, -1, 0);
        scene.add(model);

        if (gltf.animations && gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(model);
          const action = mixer.clipAction(gltf.animations[0]);
          action.play();

          const clock = new THREE.Clock();
          const animate = () => {
            requestAnimationFrame(animate);
            mixer.update(clock.getDelta());
            model.rotation.y += 0.01;
            renderer.render(scene, camera);
          };
          animate();
        } else {
          const animate = () => {
            requestAnimationFrame(animate);
            model.rotation.y += 0.01;
            renderer.render(scene, camera);
          };
          animate();
        }
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model", error);
      }
    );

    camera.position.z = 5;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <main id="home" className="herobg-gradient-slant flex justify-between">
      <ul className="px-8 pt-28 md:px-20 md:py-20 text-white font-black duration-300">
        <li className="sm:text-xl md:text-2xl lg:text-2xl pb-4 font-bold">
          Hello<span className="animate-pulse">👋</span>
        </li>
        <li className="text-4xl md:text-6xl leading-10">I'm a web</li>
        <li className="text-6xl md:text-7xl pb-4">Developer</li>
        <li className="text-xl md:text-2xl font-semibold">
          I build things for web.
        </li>
        <div className="flex gap-3 p-1">
          {socialMediaList.map((elm, i) => (
            <a
              key={i}
              href={elm.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={elm.icon}
                className="w-8 md:w-10 hover:scale-110 duration-300"
                alt="social media links"
              />
            </a>
          ))}
        </div>
      </ul>

      <div
        className="absolute -top-36 -right-96 h-full justify-end hidden md:flex z-20"
        ref={mountRef}
      ></div>
    </main>
  );
}
