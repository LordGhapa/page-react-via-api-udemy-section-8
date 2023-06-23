import { render, screen } from '@testing-library/react';
import { App } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

it('should test', () => {
  const { debug } = renderTheme(<App />);
  debug();
  const element = screen.getByText('ola');
  expect(element).toBeInTheDocument();
});
