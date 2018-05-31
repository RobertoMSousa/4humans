

declare module "react-particles-js" {
    import * as React from 'react'
    export interface ParticlesProps {
        width: string,
        height: string,
        params: any,
        style: any
    }
    const Particles: React.ComponentClass<ParticlesProps>
    export default Particles
}


// declare const graphql: (query: TemplateStringsArray) => void;

// declare const ParticlesProps: (width: string, height: string, params: any, style: any) => void;
