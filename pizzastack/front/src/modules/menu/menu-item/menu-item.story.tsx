import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { MenuItem } from './menu-item.component';


const meta = {
  title: 'Menu/Menu Item',
  component: MenuItem,
} satisfies Meta<typeof MenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};


