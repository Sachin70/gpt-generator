import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // If not already in a setup file
import Editor from '../components/Editor';

test('Editor renders correctly', () => {
  const { getByRole } = render(<Editor value="" onChange={() => {}} />);
  const textbox = getByRole('textbox');
  expect(textbox).toBeInTheDocument();
});
