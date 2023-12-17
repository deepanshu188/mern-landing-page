import { describe, expect, test, vi } from 'vitest';
import { blogPost, fetchPostWithId } from './blogPost';
import { iPost } from '../components/blogs/Blogs';
const baseUrl = import.meta.env.VITE_BASE_URL;

const mockPostResponse: iPost = {
  id: 1,
  title: 'Unit test',
  description: 'lorem ipsem',
  image: 'img src',
};

describe('blogPost', () => {
  global.fetch = vi.fn();

  function createFetchResponse(data: iPost | iPost[]) {
    return { json: () => new Promise((resolve) => resolve(data)) };
  }

  test('makes a GET request to fetch blog posts', async () => {
    const blogPostResponse = [mockPostResponse];

    fetch.mockResolvedValue(createFetchResponse(blogPostResponse));

    const blogPosts = await blogPost();

    expect(fetch).toHaveBeenCalledWith(baseUrl + '/posts');

    expect(blogPosts).toStrictEqual(blogPostResponse);
  });

  test('makes a GET request to fetch single blog post by id', async () => {
    fetch.mockResolvedValue(createFetchResponse(mockPostResponse));

    const blogPosts = await fetchPostWithId('1');

    expect(fetch).toHaveBeenCalledWith(baseUrl + `/post/${1}`);

    expect(blogPosts).toStrictEqual(mockPostResponse);
  });
});
