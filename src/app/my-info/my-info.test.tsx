import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import MyInfo from './my-info';
import 'element-internals-polyfill';

test('renders MyInfo component', () => {
  const wrapper = render(<MyInfo />);
  expect(wrapper).toBeTruthy();
});