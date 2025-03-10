"use client"
import { usePathname } from "next/navigation"

export default function NotFound(){
    const pathName = usePathname()
    const productId = pathName.split('/')[2]
    const reviewId = pathName.split('/')[4]

    return (
        <>
            <h2>Review {reviewId} not found for product {productId}.</h2>
        </>
    )
}