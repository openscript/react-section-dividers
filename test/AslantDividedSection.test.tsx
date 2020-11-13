import React from 'react';
import * as ReactDOM from 'react-dom';
import { AslantDividedSection } from '../src/AslantDividedSection';

describe('Aslant Divided Section', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AslantDividedSection divider={{ top: { height: '100px' } }} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
