import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';


const meta = {
  title: 'Menu/Menu Item',
  component: MenuItem,
} satisfies Meta<typeof MenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    imagePath: '/assets/flowers/5.jpg',
    weight: 15,
    title: 'Троянда',
    ingredients: 'квітка на стеблі, свіжозрізана',
    price: 215,
  },
};


