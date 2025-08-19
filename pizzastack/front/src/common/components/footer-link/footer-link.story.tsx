import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { FooterLink } from './footer-link.component';


const meta = {
  title: 'Footer Link',
  component: FooterLink,
} satisfies Meta<typeof FooterLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    href: "+380674708721",
    children: '067 470 87 21'
  },
};


