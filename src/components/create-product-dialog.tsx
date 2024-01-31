import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from "@radix-ui/react-label";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const createProductSchema = z.object({
  name: z.string(),
  price: z.coerce.number()
})

type CreateProductSchema = z.infer<typeof createProductSchema>


export function CreateProductDialog() {
  const { register, handleSubmit } = useForm<CreateProductSchema>({
    resolver: zodResolver(createProductSchema),
  })

  function handleCreateProduct(data: CreateProductSchema) {
    console.log(data)
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo produto</DialogTitle>
        <DialogDescription>Preencha para criar um novo produto</DialogDescription>
      </DialogHeader>

      <form className="space-y-6" onSubmit={handleSubmit(handleCreateProduct)}>
        <div className="grid grid-cols-4 items-center text-right gap-2">
          <Label htmlFor="name">Produto</Label>
          <Input className="col-span-3" id="name" {...register('name')} />
        </div>

        <div className="grid grid-cols-4 items-center text-right gap-2">
          <Label htmlFor="price">Preço</Label>
          <Input className="col-span-3" id="price" {...register('price')} />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">Cancelar</Button>
          </DialogClose>
          <Button type="submit">Savar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}