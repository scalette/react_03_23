import { render, screen } from '@testing-library/react';
import Card from '../card.component';

describe('expect to render cardComponent', () => {
  const testMonster = {
    id: '1',
    name: 'Ilya',
    email: 'ilia@mail.ru',
  };

  it('should return 15 for add(10,5)', () => {
    render(<Card monster={testMonster} />);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });
});
