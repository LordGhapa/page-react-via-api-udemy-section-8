/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';

  if (newTab) {
    return;
  }
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
