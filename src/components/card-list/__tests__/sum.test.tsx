import { add } from './add';
import { render, screen } from '@testing-library/react';
import CardList from '../card-list.component';
import { Monster } from '../../../routes/types';

describe('test add function', () => {
  it('should return 15 for add(10,5)', () => {
    expect(add(10, 5)).toBe(15);
  });
  it('should return 5 for add(2,3)', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('expect to render CardList', () => {
  const monsters: Monster[] = [
    {
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
    },
  ];

  it('expect to render CardList', () => {
    render(<CardList monsters={monsters} search={''} fundamentMonsters={monsters} />);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });
});
