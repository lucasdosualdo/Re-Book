import {
  Container,
  Book,
  Cover,
  Info,
  InfoWrapper,
} from "./style";
import rebook from "../../assets/images/rebook-blue.svg";
import BookStatus from "../../components/BookStatus";
import BookReview from "../../components/BookReview";


export default function Profile() {
  return (
    <>
      <Container>
        <h1>Meus livros</h1>
        <Book>
          <InfoWrapper>
            <Cover>
              <img src={rebook} alt="cover" />
            </Cover>
            <Info>
              <h3>Título do livro</h3>
              <p>description</p>
              <h6>
                Autor: <span>Nome do autor</span>
              </h6>
              <h6>
                Número de páginas: <span>222</span>
              </h6>
              <h6>
                Tradução: <span>pt-BR</span>
              </h6>
              <BookStatus />
            </Info>
          </InfoWrapper>

          <BookReview />
        </Book>
        <Book>
          <InfoWrapper>
            <Cover>
              <img src={rebook} alt="cover" />
            </Cover>
            <Info>
              <h3>Título do livro</h3>
              <p>description</p>
              <h6>
                Autor: <span>Nome do autor</span>
              </h6>
              <h6>
                Número de páginas: <span>222</span>
              </h6>
              <h6>
                Tradução: <span>pt-BR</span>
              </h6>
              <BookStatus />
            </Info>
          </InfoWrapper>

          <BookReview />
        </Book>
        <Book>
          <InfoWrapper>
            <Cover>
              <img src={rebook} alt="cover" />
            </Cover>
            <Info>
              <h3>Título do livro</h3>
              <p>description</p>
              <h6>
                Autor: <span>Nome do autor</span>
              </h6>
              <h6>
                Número de páginas: <span>222</span>
              </h6>
              <h6>
                Tradução: <span>pt-BR</span>
              </h6>
              <BookStatus />
            </Info>
          </InfoWrapper>

          <BookReview />
        </Book>
      </Container>
    </>
  );
}

