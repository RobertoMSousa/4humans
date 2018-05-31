declare const graphql: (query: TemplateStringsArray) => void;

// declare const ParticlesProps: (width: string, height: string, params: any, style: any) => void;
  
declare module "disqus-react" {
  export class DiscussionEmbed extends React.Component<{
    shortname: string,
  }, {}> { }
}