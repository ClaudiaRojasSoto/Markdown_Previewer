import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import updateMarkdown from '../redux/actions/markdownActions';

function Editor({ markdown, updateMarkdown }) {
  return (
    <div className="editor-container">
      <div className="editor-nav">Editor</div>
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => updateMarkdown(e.target.value)}
      />
    </div>
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  updateMarkdown: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  markdown: state.markdown,
});

const mapDispatchToProps = {
  updateMarkdown,
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
