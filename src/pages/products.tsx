import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { PlusCircle } from 'lucide-react'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "../components/ui/table";
import { Dialog, DialogTrigger } from "../components/ui/dialog";
import { ProductsFilters } from "../components/products-filters";
import { CreateProductDialog } from "../components/create-product-dialog";
import { getProducts, Product } from "../data/products";

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts({ id: null, name: null });
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-4xl font-bold">Produtos</h1>

      <div className="flex items-center justify-between">
        <ProductsFilters />

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              Novo produto
            </Button>
          </DialogTrigger>

          <CreateProductDialog />  
          
        </Dialog>
      </div>

      <div className="border rounded">
        <Table>
          <TableHeader className="border-b border-gray-200">
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>R$ {product.price.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}


