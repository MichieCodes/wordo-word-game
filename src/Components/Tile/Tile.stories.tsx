import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tile from './Tile';

export default {
  title: 'Wordle/Tile',
  component: Tile,
} as ComponentMeta<typeof Tile>;

const Template: ComponentStory<typeof Tile> = () => <Tile/>;

export const GreenTile = Template.bind({});
GreenTile.args = {
  label: 'Button',
};
