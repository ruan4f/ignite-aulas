import { fireEvent, render, screen } from '@testing-library/react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { SubscribeButton } from '.';

jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false];
    },
    signIn: jest.fn(),
  }
});

jest.mock('next/router');

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

  it('redirects to posts when user already has a subscription', () => {
    const useRouterMocked = (useRouter as jest.Mock);

    useRouterMocked.mockReturnValueOnce({
      push: jest.fn()
    });

    render(<SubscribeButton />);

    const subscriptionButton = screen.getByText('Subscribe Now');

    fireEvent.click(subscriptionButton);

    expect(useRouterMocked).toHaveBeenCalled();
  })

});
