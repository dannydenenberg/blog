import { DiscussionEmbed } from 'disqus-react';
import * as React from 'react';

interface Props {
  url: string;
  identifier: string;
  title: string;
}

export const Comments: React.FunctionComponent<Props> = ({ url, identifier, title }) => (
  <DiscussionEmbed shortname="krzysztof-zuraw-blog" config={{ url, identifier, title }} />
);
