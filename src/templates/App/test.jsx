import { screen } from '@testing-library/react';
import { App } from '.';
import { renderTheme } from '../../styles/render-theme';

it('should test', () => {
  const { debug } = renderTheme(<App />);
  debug();
  const element = screen.getByText('ola');
  expect(element).toBeInTheDocument();
});
