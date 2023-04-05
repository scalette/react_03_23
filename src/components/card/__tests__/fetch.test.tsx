import { render, screen } from '@testing-library/react';
import Card from '../card.component';

describe('expect to render cardComponent', () => {
  const testMonster = {
    id: '1',
    name: 'Ilya',
    date: '11.01.2001',
    gender: 'male',
    permitions: {
      read: true,
      write: false,
      execute: true,
    },
    fruit: 'Orange',
    file: 'sdasd.txt',
  };

  it('should return 15 for add(10,5)', () => {
    render(<Card monster={testMonster} />);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });
});
