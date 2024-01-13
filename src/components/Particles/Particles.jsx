import React, { PureComponent} from "react"
import Particles from "@tsparticles/react"
// import { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles"

export class ParticlesContainer extends PureComponent {
  // this customizes the component tsParticles installation
  async customInit(engine) {
    // this adds the bundle to tsParticles
    await loadFull(engine)
  }

  render() {
    const options = {
      particles: {
        fpsLimit: 60,
        background: {
          color: "rgb(255 175 0)"
        },
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 }
          }
        },
        color: { value: "rgb(230 20 230)" },
        move: {
          direction: "none",
          enable: true,
          outModes: "out",
          random: false,
          speed: 2,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.05,
            sync: true,
            startValue: "max",
            count: 1,
            destroy: "min"
          },
          value: {
            min: 0,
            max: 0.5
          }
        },
        shape: {
          type: "circle"
        },
        size: {
          value: { min: 1, max: 5 }
        }
      }
      /* add more top-level configurations as needed */
    };
  
    return <Particles options={options} init={this.customInit} />;
  }
}

export default ParticlesContainer


