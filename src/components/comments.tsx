import { DiscussionEmbed } from 'disqus-react';
import * as React from 'react';

interface Props {
  url: string;
  identifier: string;
  title: string;
}

export const Comments: React.FunctionComponent<Props> = ({ url, identifier, title }) => (
  <div style={{ width: '100%' }}>
    <DiscussionEmbed shortname="krzysztofzuraw-blog" config={{ url, identifier, title }} />
  </div>
);
