const baseUrl = import.meta.env.VITE_BASE_URL;

export const blogPost = async () => {
  const res = await fetch(baseUrl + '/posts');
  return res.json();
};

export const fetchPostWithId = async (id: string | undefined) => {
  const res = await fetch(baseUrl + `/post/${id}`);
  return res.json();
};
