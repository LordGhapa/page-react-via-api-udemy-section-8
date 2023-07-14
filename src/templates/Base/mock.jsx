import linksMock from '../../components/NavLinks/mock';

import gridMock from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'logo',
    link: '#',
  },
  footerHtml: '<p>Sou um footer</p>',
};
