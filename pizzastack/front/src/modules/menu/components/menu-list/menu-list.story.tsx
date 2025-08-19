import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.component';
import flowers from '@app/moks/flovers.json'


const meta = {
  title: 'Menu/Menu list',
  component: MenuList,
} satisfies Meta<typeof MenuList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
args: {
  items: flowers
  },
};


