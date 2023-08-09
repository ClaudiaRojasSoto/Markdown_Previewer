const defaultMarkdown = '# H1 Heading\n## H2 Sub-heading\n[Link](https://example.com)\n`inline code`\n```javascript\ncode block\n```\n- List item\n> Blockquote\n![Image](image.jpg)\n**Bold text**';

const markdownReducer = (state = defaultMarkdown, action) => {
  switch (action.type) {
    case 'UPDATE_MARKDOWN':
      return action.payload;
    default:
      return state;
  }
};

export default markdownReducer;
