declare const graphql: (query: TemplateStringsArray) => void;
  
declare module "disqus-react" {
  export class DiscussionEmbed extends React.Component<{
    shortname: string,
  }, {}> { }
}