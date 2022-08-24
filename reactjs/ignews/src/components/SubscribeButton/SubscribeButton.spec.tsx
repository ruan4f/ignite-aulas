import { render, screen } from '@testing-library/react';
import { SubscribeButton } from '.';

jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false];
    }
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

});
