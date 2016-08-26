import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

const style = {
  marginRight: 20,
};

const ZoomButton = () => (
    <FloatingActionButton style={style}>
      <ContentClear />
    </FloatingActionButton>

);

export default ZoomButton;