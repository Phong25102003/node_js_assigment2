import { Button, Form, Input, InputNumber, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../interface/category';
import { IProduct } from '../../interface/products';
import axios from 'axios';

type TProps = {
  onAdd: (product: IProduct) => void;
  categories: ICategory[];
};

const ProductAdd = (props: TProps) => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log(values);
    try {
        const response = await axios.post('http://localhost:8080/api/products', values);

      const newProduct = response.data;
      props.onAdd(newProduct);
      navigate('/admin/products');
      message.success('Product added successfully!');
    } catch (error) {
      message.error('Product added fail!');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error('Product added fail!');
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: 'Không được để trống' },
            { whitespace: true, message: 'Truong nay bat buoc nhap' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Không được để trống ' }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="image"
          name="image"
          rules={[
            { message: 'Không được để trống' },
            {  message: 'Truong nay bat buoc nhap' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Desc"
          name="desc"
          rules={[
            { required: true, message: 'Không được để trống' },
            { whitespace: true, message: 'Truong nay bat buoc nhap' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name="categoryId"
          rules={[
            {message: 'Không được để trống' },
            { message: 'Truong nay bat buoc nhap' },
          ]}
        >
          <select name="categoryId" id="">
            {props.categories.map((item: any) => {
              return (
                <option value={item._id} key={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            ADD
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductAdd;