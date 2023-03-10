import {
  BookContainer,
  Cover,
  Descriptions,
  BackIcon,
  CommentsContainer,
  Divider,
  CommentBox,
  ProfileImage,
  Comment,
  LikeBox,
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BookStatus from "../../components/BookStatus";
import rebook from "../../assets/images/rebook-grey.svg";
import { useEffect, useState } from "react";
import { IoHeartOutline, IoHeart, IoStarSharp, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

export default function Book() {
  const navigate = useNavigate();
  const location = useLocation();
  const book = location.state;
  const { bookId } = useParams();
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BookContainer>
        <BackIcon onClick={() => navigate(-1)}></BackIcon>
        <Cover>
          <img src={book.cover} alt="narutin" />
        </Cover>
        <Descriptions>
          <h1>{book.title}</h1>
          <p>{book.description}</p>
          {book.joinedAuthors && (
            <h3>
              Autor: <span>{book.joinedAuthors}</span>
            </h3>
          )}
          {book.pages && (
            <h3>
              Número de páginas: <span>{book.pages}</span>
            </h3>
          )}
          {book.language && (
            <h3>
              Tradução: <span>{book.language}</span>
            </h3>
          )}

          <BookStatus />
        </Descriptions>
      </BookContainer>
      <CommentsContainer>
        <h1>Comentários</h1>
        <p>O que achou do livro? Queremos ouvir sua opinião!</p>
        <h6>Ordenar por:</h6>
        <Divider></Divider>
        <CommentBox>
          <ProfileImage src={rebook} alt="profile" />
          <textarea></textarea>
          <button>Enviar</button>
        </CommentBox>
        <Divider></Divider>

        <CommentBox>
          <LikeBox>
            <ProfileImage src={rebook} alt="profile" />
            <IconContext.Provider
              value={{ color: "var(--pink-color)", className: "like-icon" }}
            >
              {!liked && <IoHeartOutline onClick={() => setLiked(!liked)} />}
              {liked && <IoHeart onClick={() => setLiked(!liked)} />}
            </IconContext.Provider>
            <h3>999+</h3>
          </LikeBox>

          <Comment>
            <h3>fulano</h3>
            <h5>22/03/2023</h5>
            <p>
              DKWOPDKWQP KOPDKWPODKWDK OKDWOPDKWDKWOPDKWQP KOPDKWPODKWDK
              OKDWOPDKWDKWOPDKWQP KOPDKWPODKWDK OKDWOPDKWDKWOPDKWQP
              KOPDKWPODKWDK OKDWOPDKWDKWOPDKWQP KOPDKWPODKWDK
              OKDWOPDKWDKWOPDKWQP KOPDKWPODKWDK OKDWOPDKWDKWOPDKWQP
              KOPDKWPODKWDK OKDWOPDKWDKWOPDKWQP KOPDKWPODKWDK
              OKDWOPDKWDKWOPDKWQP KOPDKWPODKWDK OKDWOPDKWDKWOPDKWQP
              KOPDKWPODKWDK OKDWOPDKWDKWOPDKWQP KOPDKWPODKWDK
              OKDWOPDKWDKWOPDKWQP KOPDKWPODKWDK OKDWOPDKWDKWOPDKWQP
              KOPDKWPODKWDK OKDWOPDKWDKWOPDKWQP KOPDKWPODKWDK
              OKDWOPDKWDKWOPDKWQP KOPDKWPODKWDK OKDWOPDKWDKWOPDKWQP
              KOPDKWPODKWDK OKDWOPDKWDKWOPDKWQP KOPDKWPODKWDK OKDWOPDKW
              keopfkewopfkopfkweopfkwpofewkfpowekfpowekfpowekfopew fe fe fe fe
              fe fefe fe fe fe fe fefe fe fe fe fe fefe fe fe fe fe fefe fe fe
              fe fe fe fe fe fe fe fefe fe fe fe fe fefe fe fe fe fe fefe fe fe
              fe fe fefe fe fe fe fe fefe fe fe fe fe fefe fe fe fe fe fefe fe
              fe fe fe fe
            </p>
          </Comment>
        </CommentBox>
      </CommentsContainer>
    </>
  );
}
