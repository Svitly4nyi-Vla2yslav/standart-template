import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';
import { MemoryRouter } from 'react-router-dom';  // Додаємо MemoryRouter

test('renders learn react link', () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
