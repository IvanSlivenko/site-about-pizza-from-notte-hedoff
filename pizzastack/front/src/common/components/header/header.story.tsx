import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Header } from './header.component';


const meta = {
  title: 'Common/Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};


