import { expect, test } from 'vitest';
import renderer from 'react-test-renderer';
import { Services } from './Services';

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
}

test('services', () => {
  const component = renderer.create(<Services />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
