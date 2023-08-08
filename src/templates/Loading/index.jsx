import * as Styled from './styles';

export const Loading = () => {
  return (
    <Styled.Container>
      <h2>
        O carregamento pode acaba demorando pois uso uma api gratuita é demora
        um tempo para ela ligar
        <a
          href="https://site-generate-with-nextjs.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Link para versão feita com NextJS
        </a>
      </h2>
    </Styled.Container>
  );
};
