import React from 'react';
import { connect } from 'react-redux';
import { marked } from 'marked';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  breaks: true,
});

function Previewer({ markdown }) {
  const cleanHTML = DOMPurify.sanitize(marked(markdown));

  /* eslint-disable react/no-danger */
  return (
    <div className="previewer-container">
      <div className="previewer-nav">Previewer</div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: cleanHTML }} />
    </div>
  );
  /* eslint-enable react/no-danger */
}

const mapStateToProps = (state) => ({
  markdown: state.markdown,
});

Previewer.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Previewer);
