import { fireEvent, render, screen } from '@testing-library/react';
import { signIn } from 'next-auth/react';
import { SubscribeButton } from '.';

jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false];
    },
    signIn: jest.fn(),
  }
});

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
});

describe('SubscribeButton component', () => {
  it('renders correctly', () => {

    render(<SubscribeButton />);

    expect(screen.getByText('Subscribe Now')).toBeInTheDocument();
  });

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = (signIn as jest.Mock);

    render(<SubscribeButton />);

    const subscriptionButton = screen.getByText('Subscribe Now');

    fireEvent.click(subscriptionButton);

    expect(signInMocked).toHaveBeenCalled();
  });

});
