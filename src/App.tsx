import { UIEvent, useState } from "react";
import { styled } from "styled-components";

export function App() {
  const [imageScale, setImageScale] = useState(1);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setImageScale(1 - target.scrollTop / 1000);
  };

  return (
    <DetailedWrapper>
      <Detail onScroll={handleScroll}>
        <DetailImage
          imageScale={imageScale}
          backGround="https://picsum.photos/id/29/400/500"
        />
        <Content>
          <h2>
            Ullamco officia qui ipsum excepteur sit sint fugiat in eiusmod ut
            nisi excepteur id aute lorem consequat aliquip laboris deserunt
            fugiat esse voluptate quis culpa id et labore sunt veniam
          </h2>
          <p>
            Anim laboris exercitation fugiat, cillum. Fugiat cillum, culpa
            minim. Minim exercitation sint qui deserunt irure proident. Sint qui
            deserunt irure proident ullamco esse. Deserunt irure proident
            ullamco esse eiusmod. Proident ullamco, esse eiusmod. Eiusmod aute
            ad nulla, id. Nulla id qui velit, nulla deserunt quis. Velit, nulla
            deserunt quis. Quis consequat qui, minim ut. Minim ut proident
            excepteur consectetur. Proident excepteur consectetur pariatur.
            Consectetur pariatur exercitation lorem proident enim ut dolore.
            Exercitation lorem proident enim ut dolore, pariatur. Enim ut dolore
            pariatur duis enim. Dolore pariatur duis enim, fugiat non esse. Enim
            fugiat non esse dolor. Non esse dolor, eiusmod sunt. Eiusmod sunt
            quis, nostrud. Nostrud pariatur aliquip pariatur.
          </p>
        </Content>
      </Detail>
      <Detail onScroll={handleScroll}>
        <DetailImage
          imageScale={imageScale}
          backGround="https://picsum.photos/id/24/400/500"
        />
        <Content>
          <h2>
            Ullamco officia qui ipsum excepteur sit sint fugiat in eiusmod ut
            nisi excepteur id aute lorem consequat aliquip laboris deserunt
            fugiat esse voluptate quis culpa id et labore sunt veniam
          </h2>
          <p>Anim laboris exercitation fugiat, cillum. Fugiat cillum</p>
          <p>Anim laboris exercitation fugiat, cillum. Fugiat cillum</p>
          <p>Anim laboris exercitation fugiat, cillum. Fugiat cillum</p>
        </Content>
      </Detail>
      <Detail onScroll={handleScroll}>
        <DetailImage
          imageScale={imageScale}
          backGround="https://picsum.photos/id/30/400/500"
        />
        <Content>
          <h2>
            Ullamco officia qui ipsum excepteur sit sint fugiat in eiusmod ut
            nisi excepteur id aute lorem consequat aliquip laboris deserunt
            fugiat esse voluptate quis culpa id et labore sunt veniam
          </h2>
          <p>
            Anim laboris exercitation fugiat, cillum. Fugiat cillum, culpa
            minim. Minim exercitation sint qui deserunt irure proident. Sint qui
            deserunt irure proident ullamco esse. Deserunt irure proident
            ullamco esse eiusmod. Proident ullamco, esse eiusmod. Eiusmod aute
            ad nulla, id. Nulla id qui velit, nulla deserunt quis. Velit, nulla
            deserunt quis. Quis consequat qui, minim ut. Minim ut proident
            excepteur consectetur. Proident excepteur consectetur pariatur.
            Consectetur pariatur exercitation lorem proident enim ut dolore.
            Exercitation lorem proident enim ut dolore, pariatur. Enim ut dolore
            pariatur duis enim. Dolore pariatur duis enim, fugiat non esse. Enim
            fugiat non esse dolor. Non esse dolor, eiusmod sunt. Eiusmod sunt
            quis, nostrud. Nostrud pariatur aliquip pariatur. Exercitation
            eiusmod, est nisi. Nisi sunt exercitation ut. Exercitation ut enim
            sint. Enim sint exercitation, sunt tempor. Sunt tempor laboris
            cillum eiusmod ex aliqua mollit. Laboris cillum eiusmod ex aliqua
            mollit aliqua culpa. Eiusmod ex aliqua mollit aliqua culpa officia
            sunt. Aliqua mollit aliqua, culpa. Eiusmod est nisi sunt. Nisi sunt
            exercitation ut. Exercitation ut enim sint. Enim sint exercitation,
            sunt tempor. Sunt tempor laboris cillum eiusmod ex aliqua mollit.
            Laboris cillum eiusmod ex aliqua mollit aliqua culpa. Eiusmod ex
            aliqua mollit aliqua culpa officia sunt. Aliqua mollit aliqua,
            culpa. Culpa officia sunt velit eiusmod laborum. Est nisi sunt
            exercitation ut enim sint exercitation. Sunt, exercitation ut enim
            sint exercitation. Enim sint exercitation, sunt tempor. Sunt tempor
            laboris cillum eiusmod ex aliqua mollit. Laboris cillum eiusmod ex
            aliqua mollit aliqua culpa. Eiusmod ex aliqua mollit aliqua culpa
            officia sunt.
          </p>
          <p>
            Anim laboris exercitation fugiat, cillum. Fugiat cillum, culpa
            minim. Minim exercitation sint qui deserunt irure proident. Sint qui
            deserunt irure proident ullamco esse. Deserunt irure proident
            ullamco esse eiusmod. Proident ullamco, esse eiusmod. Eiusmod aute
            ad nulla, id. Nulla id qui velit, nulla deserunt quis. Velit, nulla
            deserunt quis. Quis consequat qui, minim ut. Minim ut proident
            excepteur consectetur. Proident excepteur consectetur pariatur.
            Consectetur pariatur exercitation lorem proident enim ut dolore.
            Exercitation lorem proident enim ut dolore, pariatur. Enim ut dolore
            pariatur duis enim. Dolore pariatur duis enim, fugiat non esse. Enim
            fugiat non esse dolor. Non esse dolor, eiusmod sunt. Eiusmod sunt
            quis, nostrud. Nostrud pariatur aliquip pariatur. Exercitation
            eiusmod, est nisi. Nisi sunt exercitation ut. Exercitation ut enim
            sint. Enim sint exercitation, sunt tempor. Sunt tempor laboris
            cillum eiusmod ex aliqua mollit. Laboris cillum eiusmod ex aliqua
            mollit aliqua culpa. Eiusmod ex aliqua mollit aliqua culpa officia
            sunt. Aliqua mollit aliqua, culpa. Eiusmod est nisi sunt. Nisi sunt
            exercitation ut. Exercitation ut enim sint. Enim sint exercitation,
            sunt tempor. Sunt tempor laboris cillum eiusmod ex aliqua mollit.
            Laboris cillum eiusmod ex aliqua mollit aliqua culpa. Eiusmod ex
            aliqua mollit aliqua culpa officia sunt. Aliqua mollit aliqua,
            culpa. Culpa officia sunt velit eiusmod laborum. Est nisi sunt
            exercitation ut enim sint exercitation. Sunt, exercitation ut enim
            sint exercitation. Enim sint exercitation, sunt tempor. Sunt tempor
            laboris cillum eiusmod ex aliqua mollit. Laboris cillum eiusmod ex
            aliqua mollit aliqua culpa. Eiusmod ex aliqua mollit aliqua culpa
            officia sunt.
          </p>
          <p>
            Anim laboris exercitation fugiat, cillum. Fugiat cillum, culpa
            minim. Minim exercitation sint qui deserunt irure proident. Sint qui
            deserunt irure proident ullamco esse. Deserunt irure proident
            ullamco esse eiusmod. Proident ullamco, esse eiusmod. Eiusmod aute
            ad nulla, id. Nulla id qui velit, nulla deserunt quis. Velit, nulla
            deserunt quis. Quis consequat qui, minim ut. Minim ut proident
            excepteur consectetur. Proident excepteur consectetur pariatur.
            Consectetur pariatur exercitation lorem proident enim ut dolore.
            Exercitation lorem proident enim ut dolore, pariatur. Enim ut dolore
            pariatur duis enim. Dolore pariatur duis enim, fugiat non esse. Enim
            fugiat non esse dolor. Non esse dolor, eiusmod sunt. Eiusmod sunt
            quis, nostrud. Nostrud pariatur aliquip pariatur. Exercitation
            eiusmod, est nisi. Nisi sunt exercitation ut. Exercitation ut enim
            sint. Enim sint exercitation, sunt tempor. Sunt tempor laboris
            cillum eiusmod ex aliqua mollit. Laboris cillum eiusmod ex aliqua
            mollit aliqua culpa. Eiusmod ex aliqua mollit aliqua culpa officia
            sunt. Aliqua mollit aliqua, culpa. Eiusmod est nisi sunt. Nisi sunt
            exercitation ut. Exercitation ut enim sint. Enim sint exercitation,
            sunt tempor. Sunt tempor laboris cillum eiusmod ex aliqua mollit.
            Laboris cillum eiusmod ex aliqua mollit aliqua culpa. Eiusmod ex
            aliqua mollit aliqua culpa officia sunt. Aliqua mollit aliqua,
            culpa. Culpa officia sunt velit eiusmod laborum. Est nisi sunt
            exercitation ut enim sint exercitation. Sunt, exercitation ut enim
            sint exercitation. Enim sint exercitation, sunt tempor. Sunt tempor
            laboris cillum eiusmod ex aliqua mollit. Laboris cillum eiusmod ex
            aliqua mollit aliqua culpa. Eiusmod ex aliqua mollit aliqua culpa
            officia sunt.
          </p>
          <p>
            Anim laboris exercitation fugiat, cillum. Fugiat cillum, culpa
            minim. Minim exercitation sint qui deserunt irure proident. Sint qui
            deserunt irure proident ullamco esse. Deserunt irure proident
            ullamco esse eiusmod. Proident ullamco, esse eiusmod. Eiusmod aute
            ad nulla, id. Nulla id qui velit, nulla deserunt quis. Velit, nulla
            deserunt quis. Quis consequat qui, minim ut. Minim ut proident
            excepteur consectetur. Proident excepteur consectetur pariatur.
            Consectetur pariatur exercitation lorem proident enim ut dolore.
            Exercitation lorem proident enim ut dolore, pariatur. Enim ut dolore
            pariatur duis enim. Dolore pariatur duis enim, fugiat non esse. Enim
            fugiat non esse dolor. Non esse dolor, eiusmod sunt. Eiusmod sunt
            quis, nostrud. Nostrud pariatur aliquip pariatur. Exercitation
            eiusmod, est nisi. Nisi sunt exercitation ut. Exercitation ut enim
            sint. Enim sint exercitation, sunt tempor. Sunt tempor laboris
            cillum eiusmod ex aliqua mollit. Laboris cillum eiusmod ex aliqua
            mollit aliqua culpa. Eiusmod ex aliqua mollit aliqua culpa officia
            sunt. Aliqua mollit aliqua, culpa. Eiusmod est nisi sunt. Nisi sunt
            exercitation ut. Exercitation ut enim sint. Enim sint exercitation,
            sunt tempor. Sunt tempor laboris cillum eiusmod ex aliqua mollit.
            Laboris cillum eiusmod ex aliqua mollit aliqua culpa. Eiusmod ex
            aliqua mollit aliqua culpa officia sunt. Aliqua mollit aliqua,
            culpa. Culpa officia sunt velit eiusmod laborum. Est nisi sunt
            exercitation ut enim sint exercitation. Sunt, exercitation ut enim
            sint exercitation. Enim sint exercitation, sunt tempor. Sunt tempor
            laboris cillum eiusmod ex aliqua mollit. Laboris cillum eiusmod ex
            aliqua mollit aliqua culpa. Eiusmod ex aliqua mollit aliqua culpa
            officia sunt.
          </p>
        </Content>
      </Detail>
    </DetailedWrapper>
  );
}

const DetailedWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
`;

const Detail = styled.div`
  width: 100vw;
  scroll-snap-align: center;
  position: relative;
  height: 100vh;
  overflow-y: scroll;
`;

const DetailImage = styled.div<{ backGround: string; imageScale: number }>`
  width: 100%;
  background-image: url(${(props) => props.backGround});
  background-size: contain;
  aspect-ratio: 4 / 5;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top center;
  background-size: ${(props) => props.imageScale * 100}%;
  top: 0;
  z-index: -1;
`;

const Content = styled.div`
  padding: 2rem;
  /* padding-top: calc(100vw * 5 / 4 + 2rem); */

  h2 {
    margin: 0;
  }
`;
