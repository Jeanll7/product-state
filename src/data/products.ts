export interface Product {
  id: string
  name: string
  price: number
}

interface GetProductsFilters {
  id?: string
  name?: string
}

export async function getProducts(filters: GetProductsFilters) {
  // dalay de is
  await new Promise(resolve => setTimeout(resolve, 1000))

  return [
    { id: 283, name: 'Product 283', price: 45 },
    { id: 874, name: 'Product 874', price: 65 },
    { id: 392, name: 'Product 392', price: 48 },
    { id: 538, name: 'Product 538', price: 22 },
    { id: 227, name: 'Product 227', price: 29 },
    { id: 398, name: 'Product 398', price: 61 },
    { id: 647, name: 'Product 647', price: 23 },
    { id: 157, name: 'Product 157', price: 52 },
    { id: 491, name: 'Product 491', price: 27 },
  ]
}

interface CreateProductRequest {
  name: string
  price: number
}

export async function createProduct(data: CreateProductRequest) {
  await new Promise(resolve => setTimeout(resolve, 1000))
}

return {
  id: crypto.randomUUID(),
  name: data.name,  
  price: data.price,
}