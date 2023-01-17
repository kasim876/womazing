import $host from './index';

export const fetchProducts = async ({category, page, limit}, cancelToken) => {
  const {data} = await $host.get('/product', {
    params: {
      category,
      page,
      limit,
    },
    cancelToken,
  });

  return data;
};

export const fetchOneProduct = async (id) => {
  const {data} = await $host.get('/product/' + id);
  
  return data;
};