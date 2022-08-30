import { fireEvent, render, screen } from '@testing-library/react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { SubscribeButton } from '.';

jest.mock('next-auth/react');
jest.mock('next/router');

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    const useSessionMocked = (useSession as jest.Mock);
    useSessionMocked.mockReturnValueOnce({
      data: {},
      status: "unauthenticated",
    });

    render(<SubscribeButton />);

    expect(screen.getByText('Subscribe Now')).toBeInTheDocument();
  });

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = (signIn as jest.Mock);
    const useSessionMocked = (useSession as jest.Mock);

    useSessionMocked.mockReturnValueOnce({
      status: "unauthenticated",
    });

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText('Subscribe Now');

    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });

  it('redirects to posts when user already has a subscription', () => {
    const useRouterMocked = (useRouter as jest.Mock);
    const useSessionMocked = (useSession as jest.Mock);
    const pushMocked = jest.fn().mockImplementation(() => ({ route: '/posts' }));;
    
    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: "John Doe",
          email: "john.doe@gmail.com"
        },
        activeSubscription: 'yes',
        expires: '10000'
      },
      status: "authenticated",
    });

    useRouterMocked.mockReturnValueOnce({
      push: pushMocked
    });

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText('Subscribe Now');

    fireEvent.click(subscribeButton);

    expect(pushMocked).toHaveBeenLastCalledWith('/posts');
  })

});
