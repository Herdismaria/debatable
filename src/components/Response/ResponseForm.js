import React from 'react';
import { Form, TextArea, Button, Input } from 'semantic-ui-react';

const textStyle = {
  textAlign: 'left',
  fontFamily: 'Radley',
  color: '#2a1e5c',
  fontWeight: 'bold',
  fontSize: '15px',
};

export default function ResponseForm(props) {
  return (
    <Form
      style={{
        padding: '10px',
      }}
      onSubmit={e => props.onSubmit(e)}
    >
      <Form.Field>
        <Input action>
          <TextArea
            autoHeight
            rows={2}
            placeholder="Respond..."
            onChange={e => props.onChange(e.target.value)}
            value={props.text}
          />
          <Button
            type="submit"
            style={{
              backgroundColor: '#2a1e5c',
              color: '#fff',
              fontFamily: 'Radley',
              fontWeight: 'bold',
            }}
          >
            Debate
          </Button>
        </Input>
      </Form.Field>
    </Form>
  );
}
