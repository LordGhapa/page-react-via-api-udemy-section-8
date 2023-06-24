import P from 'prop-types';
import { Title } from './styles';

export const Heading = ({
  title,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}) => {
  return (
    <Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {title}
    </Title>
  );
};

Heading.propTypes = {
  title: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['huge', 'large', 'medium', 'small']),
  uppercase: P.bool,
};
