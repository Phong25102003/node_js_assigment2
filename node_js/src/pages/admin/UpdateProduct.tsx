import { Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { IProduct } from '../../interface/products';
import { ICategory } from '../../interface/category';
import { getOneProduct } from '../../api/products';
// import { getOneProduct } from '../../api/products';
type TProps = {
    products: IProduct[]
    onUpdate: (product: IProduct[]) => void
    category: ICategory[];
}


const UpdateProduct = (props: TProps) => {

    const { _id } = useParams()

    const navigate = useNavigate()
    const [product, setProduct] = useState<IProduct>()
    useEffect(() => {
        getOneProduct(_id).then(({ data }) => setProduct(data)
        )
    }, [])

    const [form] = Form.useForm();
    form.setFieldsValue({
        _id: product?._id,
        name: product?.name,
        price: product?.price,
        image: product?.image,
        description: product?. description,
        categoryId: product?.categoryId
    })
    const onFinish = (values: any) => {
        props.onUpdate(values)
        navigate('/admin/products')
        alert(" Update thành công")
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
         
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }
                }
                form={form}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label=""
                    name="_id"
                    style={{ display: 'none' }}
                    rules={[{ required: true, message: 'Không được để trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Không được để trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Không được để trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: 'Không được để trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Desc"
                    name="description"
                    rules={[{ required: true, message: 'Không được để trống' }]}
                >
                    <Input />
                </Form.Item>
            

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form >
        </div>
    )
}

export default UpdateProduct