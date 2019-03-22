import React, { Component } from 'react';
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import apolloStorybookDecorator from 'apollo-storybook-react';
import { typeDefs, mocks } from '@bst/graphql';
import { muiTheme } from 'storybook-addon-material-ui';
import { createMuiTheme } from '@material-ui/core/styles';
import { themes, baseTheme, baseStyles } from '@bst/utilities/';

const obj = {
  permissions: {
    tbs_admin: true,
  },
};
const objJsonStr = JSON.stringify(obj);
const objJsonB64 = Buffer.from(objJsonStr).toString('base64');
Object.defineProperty(window.document, 'cookie', {
  writable: true,
  value: `_tbs_jwt=eNiJ9.${objJsonB64}.pjd_zs8-0cq-zMQ-t_fj4-s-S-Jaq_x-1N-0`,
});

const panelRoot = document.createElement('div');
panelRoot.setAttribute('id', 'panel-root');
const root = document.querySelector('#root');
root.parentNode.insertBefore(panelRoot, root.nextSibling);

const customThemes = [];

themes().forEach(theme => {
  baseStyles();
  const { id, palette } = theme;
  customThemes.push(
    createMuiTheme({
      themeName: id,
      ...baseTheme(palette),
    }),
  );
});

const req = require.context('../', true, /stories\.js/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(
  apolloStorybookDecorator({
    typeDefs,
    mocks,
  }),
);
addDecorator(muiTheme(customThemes));
configure(loadStories, module);
