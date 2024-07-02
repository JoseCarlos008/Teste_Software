import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GridComponent from './GridComponent';

describe('GridComponent', () => {
  test('verifica se a grid possui 10 linhas', async () => {
    render(<GridComponent />);
    const gridElement = await screen.findByRole('treegrid');
    
    // Verifica se existem 10 linhas
    expect(gridElement.querySelectorAll('.ag-row').length).toBe(10);
  });

  test('verifica se um valor específico existe em uma célula específica', async () => {
    render(<GridComponent />);
    const specificCell = await screen.findByText('Value 3 - 5');
    
    // Verifica se o valor específico está presente
    expect(specificCell).toBeInTheDocument();
  });
});
