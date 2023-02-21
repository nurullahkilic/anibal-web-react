import React, {
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useSpring } from "react-spring";
import {
  Renderer,
  Geometry,
  Program,
  Mesh,
  Flowmap,
  Texture,
  Vec2,
  Vec4,
} from "ogl";
import { Outer, WrapCanvas } from "./styles";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const vertex = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}`;

const fragment = `
precision highp float;
precision highp int;
uniform sampler2D tWater;
uniform sampler2D tFlow;
uniform float uTime;
varying vec2 vUv;
uniform float alpha;
uniform vec4 res;
void main() {
  vec3 flow = texture2D(tFlow, vUv).rgb;
  vec2 uv = .5 * gl_FragCoord.xy / res.xy ;
  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
  myUV -= flow.xy * (0.15 * 0.7);
  vec2 myUV2 = (uv - vec2(0.5))*res.zw + vec2(0.5);
  myUV2 -= flow.xy * (0.125 * 0.7);
  vec2 myUV3 = (uv - vec2(0.5))*res.zw + vec2(0.5);
  myUV3 -= flow.xy * (0.10 * 0.7);
  vec3 tex = texture2D(tWater, myUV).rgb;
  vec3 tex2 = texture2D(tWater, myUV2).rgb;
  vec3 tex3 = texture2D(tWater, myUV3).rgb;
  gl_FragColor = vec4(tex.r, tex2.g, tex3.b, alpha);
}`;


const imgSize = [1920, 1344];
const heroRef = React.createRef();

const HeroFlowmap = ({ desktop }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  const RAF = React.useRef();
  const RAF2 = React.useRef(); // TODO: Change for 1 RAF

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setIsDesktop(window.innerWidth > 760);
    }
  }, []);

  const initOgl = useCallback(() => {
    if (typeof window !== `undefined`) {
      const renderer = new Renderer({
        dpr: 2,
        alpha: true,
      });

      const { gl } = renderer;
      heroRef.current.appendChild(gl.canvas);

      gl.clearColor(0.1, 0.1, 0.1, 1);
      // gl.clear(gl.COLOR_BUFFER_BIT)

      let aspect = 1;
      const mouse = new Vec2(-1);
      const velocity = new Vec2();

      function resize() {
        let a1;
        let a2;
        const imageAspect = imgSize[1] / imgSize[0];
        if (window.innerHeight / window.innerWidth < imageAspect) {
          a1 = 1;
          a2 = window.innerHeight / window.innerWidth / imageAspect;
        } else {
          a1 = (window.innerWidth / window.innerHeight) * imageAspect;
          a2 = 1;
        }
        mesh.program.uniforms.res.value = new Vec4(
          window.innerWidth,
          window.innerHeight,
          a1,
          a2
        );
        renderer.setSize(window.innerWidth, window.innerHeight);
        aspect = window.innerWidth / window.innerHeight;
      }

      const flowmap = new Flowmap(gl, {
        falloff: 1.0, // size of the stamp, percentage of the size
        alpha: 0.3, // opacity of the stamp
        dissipation: 0.94, // affects the speed that the stamp fades. Closer to 1 is slower
      });

      const geometry = new Geometry(gl, {
        position: {
          size: 2,
          data: new Float32Array([-1, -1, 3, -1, -1, 3]),
        },
        uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
      });

      const texture = new Texture(gl, {
        minFilter: gl.LINEAR,
        magFilter: gl.LINEAR,
      });

      gl.clear(gl.COLOR_BUFFER_BIT);

      const img = new Image();
      img.onload = () => {
        texture.image = img;
        program.uniforms.alpha.value = 1;
      };
      img.crossOrigin = "Anonymous";
      img.src = `${desktop}`; // TODO: Remove debug background
      img.style.objectFit = "contain";
      let a1;
      let a2;
      const imageAspect = imgSize[1] / imgSize[0];
      if (window.innerHeight / window.innerWidth < imageAspect) {
        a1 = 1;
        a2 = window.innerHeight / window.innerWidth / imageAspect;
      } else {
        a1 = (window.innerWidth / window.innerHeight) * imageAspect;
        a2 = 1;
      }

      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          uTime: { value: 0 },
          tWater: { value: texture },
          res: {
            value: new Vec4(window.innerWidth, window.innerHeight, a1, a2),
          },
          img: { value: new Vec2(imgSize[0], imgSize[1]) },
          tFlow: flowmap.uniform,
          alpha: { value: 0 },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });
      window.addEventListener("resize", resize, false);
      resize();
      window.addEventListener("mousemove", updateMouse, false);

      let lastTime;
      const lastMouse = new Vec2();
      function updateMouse(e) {
        // e.preventDefault()
        if (e.changedTouches && e.changedTouches.length) {
          e.x = e.changedTouches[0].pageX;
          e.y = e.changedTouches[0].pageY;
        }
        if (e.x === undefined) {
          e.x = e.pageX;
          e.y = e.pageY;
        }
        // Get mouse value in 0 to 1 range, with y flipped
        mouse.set(e.x / gl.renderer.width, 1.0 - e.y / gl.renderer.height);
        // Calculate velocity
        if (!lastTime) {
          // First frame
          lastTime = performance.now();
          lastMouse.set(e.x, e.y);
        }
        const deltaX = e.x - lastMouse.x;
        const deltaY = e.y - lastMouse.y;
        lastMouse.set(e.x, e.y);
        const time = performance.now();
        // Avoid dividing by 0
        const delta = Math.max(35.4, time - lastTime);
        lastTime = time;
        velocity.x = (deltaX / delta) * 1.55;
        velocity.y = (deltaY / delta) * 1.55;
        // Flag update to prevent hanging velocity values when not moving
        velocity.needsUpdate = true;
      }

      RAF2.current = requestAnimationFrame(updateMove);
      function updateMove() {
        if (!velocity.needsUpdate) {
          mouse.set(0.15, 0.5);
          velocity.set(getRndInteger(-250, 250), getRndInteger(-140, 140));
        }
        velocity.needsUpdate = true;
        flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
        flowmap.update();
        program.uniforms.uTime.value = 100 * 0.01;
        renderer.render({ scene: mesh });
      }

      const update = (t) => {
        RAF.current = requestAnimationFrame(update);
        // Reset velocity when mouse not moving
        if (!velocity.needsUpdate) {
          mouse.set(-1);
          velocity.set(0);
        }
        velocity.needsUpdate = false;
        // Update flowmap inputs
        flowmap.aspect = aspect;
        flowmap.mouse.copy(mouse);
        // Ease velocity input, slower when fading out
        flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
        flowmap.update();
        program.uniforms.uTime.value = t * 0.01;
        // gl.clearColor(0.15, 0.05, 0.2, 1)
        // gl.clearColor(255, 0, 0, 1)
        // gl.clear(gl.COLOR_CLEAR_VALUE)
        renderer.render({ scene: mesh });
        // gl.clear(gl.COLOR_BUFFER_BIT)
        // gl.clear(gl.COLOR_CLEAR_VALUE)
        // gl.clearColor(0, 255, 0, 1)
      };
      update();
    }
  }, [desktop]);

  function handleResize() {
    setIsDesktop(window.innerWidth > 760);
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    if (isDesktop) {
      initOgl();
    }
    return () => {
      // List of events to detach and inputs destroy
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(RAF.current);
      cancelAnimationFrame(RAF2.current);
    };
  }, [initOgl, isDesktop]);

  const canvasAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: { mass: 5, tension: 500, friction: 100 },
  });

  return (
    <Outer>
      {isDesktop && <WrapCanvas style={canvasAnimation} ref={heroRef} />}
    </Outer>
  );
};
export default HeroFlowmap;
