"use client"
import React, { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { TabsContent } from '../ui/tabs'
import { DataTable } from '../table'
import { TableCell, TableRow } from '../ui/table'
import Image from 'next/image'
import { getMonthName } from '@/lib/utils'
import TabsMenu from '../tabs'
import { SideSheet } from '../sheet'
import { CreateProductForm } from './product-form'
import { Button } from '../ui/button'
import { useProducts } from '@/hooks/settings/use-settings'


type Props = {
  products: {
    id: string
    name: string
    price: number
    image: string
    createdAt: Date
    domainId: string | null
  }[]
  id: string
}

const ProductTable = ({ id, products: initialProducts }: Props) => {
  const [productsState, setProductsState] = useState(initialProducts)
  const { onDeleteProduct, loading } = useProducts(id)

  const handleDeleteProduct = async (productId: string) => {
    await onDeleteProduct(productId)
    setProductsState(productsState.filter(product => product.id !== productId))
  }

  return (
    <div>
      <div>
        <h2 className="font-bold text-2xl">Products</h2>
        <p className="text-sm font-light">
          Add products to your store and set them live to accept payments from
          customers.
        </p>
      </div>
      <TabsMenu
        className="w-full flex justify-start"
        triggers={[
          {
            label: 'All products',
          },
          { label: 'Live' },
          { label: 'Deactivated' },
        ]}
        button={
          <div className="flex-1 flex justify-end">
            <SideSheet
              description="Añade productos para tus posibles clientes."
              title="Añadir producto"
              className="flex items-center gap-2 bg-nblue px-4 py-2 text-black font-semibold rounded-lg text-sm"
              trigger={
                <>
                  <Plus
                    size={20}
                    className="text-white"
                  />
                  <p className="text-white">Añadir producto</p>
                </>
              }
            >
              <CreateProductForm id={id} />
            </SideSheet>
          </div>
        }
      >
        <TabsContent value="All products">
          <DataTable headers={['Imagen', 'Nombre', 'Precio', 'Creado', 'Acciones']}>
            {productsState.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Image
                    src={`https://ucarecdn.com/${product.image}/`}
                    width={50}
                    height={50}
                    alt="image"
                  />
                </TableCell>
                <TableCell>${product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell className="text-right">
                  {product.createdAt.getDate()}{' '}
                  {getMonthName(product.createdAt.getMonth())}{' '}
                  {product.createdAt.getFullYear()}
                </TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </DataTable>
        </TabsContent>
      </TabsMenu>
    </div>
  )
}

export default ProductTable
