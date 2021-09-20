import React from 'react';
import ReactDom from 'react-dom';
//import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { render, cleanup} from '@testing-library/react';
import App from './App';
import Product from './Product';
import Slot from './Slot';

afterEach(cleanup);

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<App/>, div);
  ReactDom.unmountComponentAtNode(div);
});

test('renders button correctly', () => {
  const { getByTestId } = render(<Product/>);
  expect(getByTestId('button')).toHaveTextContent("Add Your Slot");
});

test('renders remove button correctly', () => {
  const { getByTestId } = render(<Slot/>);
  expect(getByTestId('remove')).toHaveTextContent("Remove");
});


test('matches the snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

