import { expect, test } from 'vitest';
import renderer from 'react-test-renderer';
import { TestimonailCard } from './TestimonialCard';

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
}

test('testimonial card', () => {
  const component = renderer.create(<TestimonailCard />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
