import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Post, { getStaticProps } from '../../pages/posts/preview/[slug]';
import { getPrismicClient } from '../../services/prismic';

jest.mock('../../services/prismic');
jest.mock('next-auth/react');
jest.mock('next/router');

const post = {
  slug: 'my-new-post',
  title: 'My New Post',
  content: '<p>Post content</p>',
  updatedAt: '10 de Abril'
};

describe('Post Preview Page', () => {
  it('renders correctly', () => {
    const useSessionMocked = (useSession as jest.Mock);
    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<Post post={post} />);

    expect(screen.getByText('My New Post')).toBeInTheDocument();
    expect(screen.getByText('Post content')).toBeInTheDocument();
    expect(screen.getByText('Wanna continue reading?')).toBeInTheDocument();
  });

  it('redirects user to full post when user is subscribe', async () => {
    const useSessionMocked = (useSession as jest.Mock);
    const useRouterMocked = (useRouter as jest.Mock);
    const pushMocked = jest.fn();

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: "John Doe",
          email: "john.doe@gmail.com"
        },
        activeSubscription: 'yes'
      },
      status: "authenticated",
    });
    
    useRouterMocked.mockReturnValueOnce({
      push: pushMocked
    });

    render(<Post post={post} />);

    expect(pushMocked).toHaveBeenCalledWith('/posts/my-new-post');
  });

  it('loads initial data', async () => {
    const getPrismicClientMocked = (getPrismicClient as jest.Mock);

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [
            { type: 'heading', text: 'My New Post' }
          ],
          content: [
            { type: 'paragraph', text: 'Post content' }
          ],
        },
        last_publication_date: '04-01-2021',
      })
    });

    const response = await getStaticProps({ params: { slug: 'my-new-post' } });

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My New Post',
            content: '<p>Post content</p>',
            updatedAt: '01 de abril de 2021'
          }
        }
      })
    );
  });
});