import { useEffect, useState } from "react"
import { Product } from "../models/product."
import Catalogue from "../features/Catalogue/Catalogue"
import { Typography } from "@mui/material"

function App() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("http://localhost:5015/api/products")
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => {
      console.log(error)
    })
  }, [])

  function addProduct() {
    setProducts(prevState => [...prevState, {
      id: (prevState.length + 101).toString(),
      name: "Product" + (prevState.length + 1),
      description: "Good product",
      brand: "brand",
      type: "type",
      productUrl: "http://pictus.photos/200",
      price: 200.00,
      quantityInStock: 1
    }])
  }
  return (
    <div>
      <Typography variant="h2">EStore</Typography>
      <Catalogue products={products} addProduct={addProduct} />
    </div>
  )
}

export default App;