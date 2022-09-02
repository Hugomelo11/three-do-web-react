import { Modal, Form, Input, Button } from 'antd'

export default function SignUp({ setToken }) {
    const handleSignUp = ({ email, password}) => {
        // post request to api/users
        fetch('http://localhost:5560/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            setToken(data.token);
            localStorage.setItem('token', data.token);
        })
        .catch(err => alert(err.message))
        // setToken
    }
    return (
        <Modal title="Create Account" visible closable={false} footer={null}>
            <Form onFinish={handleSignUp} labelCol={{ span:8 }} wrapperCol={{ span:16 }}>
                <Form.Item label="Email" name="email">
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16}}>
                    <Button type="primary" htmlType='submit'>Sign Up</Button>
                </Form.Item>
                <p>Alread a user? <Button></Button></p>

            </Form>
            </Modal>
    )
} 