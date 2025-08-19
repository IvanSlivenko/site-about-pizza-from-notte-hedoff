import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { MenuList } from './menu-list.component';


const meta = {
  title: 'Menu/Menu list',
  component: MenuList,
} satisfies Meta<typeof MenuList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {

};


