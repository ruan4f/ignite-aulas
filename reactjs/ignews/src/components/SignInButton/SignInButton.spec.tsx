import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import { SignInButton } from '.';

jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
});

describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    useSession

    render(<SignInButton />);

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  });

  it('renders correctly when user is authenticated', () => {
    render(<SignInButton />);

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  });
});
