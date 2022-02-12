import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tile from './Tile'

type TileMeta = ComponentMeta<typeof Tile>
type TileStory = ComponentStory<typeof Tile>

export default {
  title: 'Wordle/Tile',
  component: Tile
} as TileMeta

const Template : TileStory = () => <Tile/>;

export const GreenTile : TileStory = Template.bind({})
GreenTile.args = {}
