import P from 'prop-types';
// import * as Styled from './styles';
import { Base } from '../Base';
import { mockBase } from '../Base/Base.stories';

export const App = () => {
  return <Base {...mockBase} />;
};

App.propTypes = {
  children: P.node.isRequired,
};
export default App;
