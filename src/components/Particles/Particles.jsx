import React from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"

export class ParticlesContainer extends PureComponent {
  // this customizes the component tsParticles installation
  async customInit(engine) {
    // this adds the bundle to tsParticles
    await loadFull(engine)
  }

  render() {
    const options = {
      /* custom options */
    }

    return <Particles options={options} init={this.customInit} />
  }
}

export default Particles