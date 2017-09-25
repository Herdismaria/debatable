import React from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';

const textStyle = {
  textAlign: 'left',
  fontFamily: 'Radley',
  color: '#2a1e5c',
  fontWeight: 'bold',
  fontSize: '15px',
};

export default function ResponseForm() {
  return (
    <Form
      style={{
        padding: '30px',
      }}
    >
      <Form.Field>
        <label style={textStyle}>Add to the debate</label>
        <TextArea
          placeholder="Your response here..."
          autoHeight
          style={{ minHeight: 100 }}
        />
      </Form.Field>
      <Button
        type="submit"
        style={{
          backgroundColor: '#2a1e5c',
          color: '#fff',
          fontFamily: 'Radley',
          fontWeight: 'bold',
        }}
      >
        Post
      </Button>
    </Form>
  );
}
