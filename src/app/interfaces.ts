
interface Casa {
  id: number,
  title: string,
  country: string,
  city: string,
  rating: number,
  price: number,
  host_type: string,
  feature_photo: string
}

export {Casa};


interface ListaCasas {
  page: number,
  total: string,
  pages: number,
  limit: string,
  data: Casa[]
}
export {ListaCasas};
