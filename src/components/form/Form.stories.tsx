// src/components/form/Form.stories.tsx
import React from 'react';
import Form from './Form';
import Input from './Input';
import Label from './Label';
import Group from './Group';
import Button from '../button/Button';
import TextArea from './TextArea';

export default {
    title: 'Form',
    component: Form as React.FC,
};

export const SimpleForm = () => (
    <Form onSubmit={() => alert('Submitted!')} className='test'>
        <input type="text" />
        <button type="submit">Submit</button>
    </Form>
);
export const SimpleFormWithInput = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    return (<Form onSubmit={() => alert('Submitted!')} className='test'>
        <Input type="text" name='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="email" name='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
    </Form>
)};

export const LabeledForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    return (<Form onSubmit={() => alert('Submitted!')}>
        <Label text='Name' required>
            <Input type="text" name='Name' value={name} onChange={(e) => setName(e.target.value)} />
        </Label>
        <Label text='Email' required>
            <Input type="email" name='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </Label>
        <button type="submit">Submit</button>
    </Form>
)}

export const LabeledGroupedForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    return (
        <Form onSubmit={() => alert('Submitted!')} wrapAt={600}>
            <Group>
                <Label text='Name' required>
                    <Input type="text" name='Name' value={name} onChange={(e) => setName(e.target.value)} />
                </Label>
                <Label text='Email' required>
                    <Input type="email" name='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Label>
            </Group>
            <Label text='Message'>
                    <TextArea name='Message' />
                </Label>
            <Button text='Submit' type='submit' onClick={() => {}} />
        </Form>
)}