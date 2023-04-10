import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../interface/category';
type TProps = {
    onAddCate: (categories: ICategory[]) => void
    categories: ICategory;
}

const AddCategory = (props: TProps) => {

    const navigate = useNavigate()


    const onFinish = (values: any) => {
        console.log(values);
        props.onAddCate(values)
        navigate('/admin/category')
        message.success('Category added successfully!');
    };

    const onFinishFailed = (errorInfo: any) => {
        message.error('Category added fail!');
    };


    return (
        <div>
           
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }
                }
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Không được để trống' },
                    { whitespace: true, message: "Truong nay bat buoc nhap" }
                    ]}
                >
                    <Input />
                </Form.Item>




                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        ADD
                    </Button>
                </Form.Item>
            </Form >
        </div>
    )

}

export default AddCategory