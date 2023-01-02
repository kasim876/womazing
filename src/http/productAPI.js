import $host from './index';

export const fetchProducts = async ({category, page}, cancelToken) => {
  const {data} = await $host.get('/product', {
    params: {
      category,
      page,
    },
    cancelToken,
  });

  return data;
};