import Link from "next/link"

export default function ProductList() {
    const productId = 100
    return(
        <>
            <h1>Products List</h1>
            <h2><Link href='/products/1'>Product 1</Link></h2>
            <h2><Link href='/products/2' replace>Product 2</Link></h2>
            <h2><Link href={`/products/${productId}`}>Product {productId}</Link></h2>
            <Link href='/'>Home</Link>
        </>
    ) 
}