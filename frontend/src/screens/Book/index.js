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
  LikeBookButton,
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BookStatus from "../../components/BookStatus";
import rebook from "../../assets/images/rebook-grey.svg";
import { useEffect, useState } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { useAuth } from "../../contexts/AuthContext";
import { getBookById } from "../../services/searchBooksApi";
import { useBooks } from "../../contexts/BooksContext";
import coverNotAvailable from "../../assets/images/cover-not-available.svg";
import LoadingContent from "../../children/LoadingContent";

export default function Book() {
  const navigate = useNavigate();
  const location = useLocation();
  const book = location.state;
  const { bookId } = useParams();
  const [liked, setLiked] = useState(false);
  const [likedBook, setLikedBook] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { user, token } = useAuth();
  //const { singleBook, setSingleBook } = useBooks();
  const [singleBook, setSingleBook] = useState(null);

  function changeCover(cover) {
    if (cover?.thumbnail) {
      cover = cover?.thumbnail;
    } else if (!cover) {
      cover = coverNotAvailable;
    }
    return cover;
  }

  function joinAuthors(authors) {
    if (!authors) return null;
    if (authors.length > 1) {
      return authors.join(", ");
    }
    return authors[0];
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchSingleBook() {
      setLoading(true);
      try {
        let response = await getBookById(bookId);
        response["cover"] = changeCover(response.cover);
        response["authors"] = joinAuthors(response.authors);
        setSingleBook(response);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setError(true);
      }
    }
    fetchSingleBook();
  }, []);

  return (
    <>
      <LoadingContent error={error} loading={loading}>
        <BookContainer>
          <BackIcon onClick={() => navigate(-1)}></BackIcon>
          <Cover>
            {user && token && (
              <LikeBookButton
                likedBook={likedBook}
                onClick={() => {
                  setLikedBook(!likedBook);
                }}
              />
            )}

            <img src={singleBook?.cover} alt="narutin" />
          </Cover>
          <Descriptions>
            <h1>{singleBook?.title}</h1>
            <p>{singleBook?.description}</p>
            {singleBook?.authors && (
              <h3>
                Autor: <span>{singleBook?.authors}</span>
              </h3>
            )}
            {singleBook?.pages && (
              <h3>
                Número de páginas: <span>{singleBook?.pages}</span>
              </h3>
            )}
            {singleBook?.language && (
              <h3>
                Tradução: <span>{singleBook?.language}</span>
              </h3>
            )}
            {user && token && <BookStatus />}
          </Descriptions>
        </BookContainer>
        <CommentsContainer>
          <h1>Comentários</h1>
          <p>O que achou do livro? Queremos ouvir sua opinião!</p>
          {user && token ? (
            <>
              <Divider></Divider>
              <CommentBox>
                <ProfileImage src={rebook} alt="profile" />
                <textarea></textarea>
                <button>Enviar</button>
              </CommentBox>
            </>
          ) : (
            <h6 onClick={() => navigate("/signin")}>
              Faça o login para comentar
            </h6>
          )}

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
                fe fe fe fe fe fe fe fefe fe fe fe fe fefe fe fe fe fe fefe fe
                fe fe fe fefe fe fe fe fe fefe fe fe fe fe fefe fe fe fe fe fefe
                fe fe fe fe fe
              </p>
            </Comment>
          </CommentBox>
        </CommentsContainer>
      </LoadingContent>
    </>
  );
}
