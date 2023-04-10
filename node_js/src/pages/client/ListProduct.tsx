import React, { useEffect, useState } from 'react'
import { IProduct } from '../../interface/products'
import "bootstrap/dist/css/bootstrap.min.css"
import ".././../ListProduct.css" // file CSS tự định nghĩa

interface IProps {
    products: IProduct[],
}

const ListProduct = (props: IProps) => {
    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    return (
        <div className="product-list-container">
            {data.map((item: any) => (
                <div key={item._id} className="product-item">
                    <a className="text-decoration-none text-dark" href={`/${item._id}/detail`}>
                        <img className="product-image" src={item.image} alt="" />
                        <p className="product-name">{item.name}</p>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default ListProduct
