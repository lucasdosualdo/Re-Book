import { ReviewContainer, Text, TitleBox, SaveButton } from "./style";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { useState } from "react";

export default function BookReview() {
  const [clicked, setClicked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [review, setReview] = useState("");
  const [prevReview, setPrevReview] = useState("");

  function handleEdit() {
    setEditing(true);
  }

  function handleCancel() {
    setEditing(false);
    setPrevReview(review);
    if (!review) {
      setClicked(!clicked);
    }
  }

  function handleShowContent() {
    if (!review) {
      setEditing(true);
    }
    setClicked(!clicked);
  }

  function handleSave() {
    setEditing(false);
    setReview(prevReview.trim());
    if (!prevReview || !prevReview.trim()) {
      setClicked(!clicked);
    }
  }
  return (
    <ReviewContainer>
      <TitleBox>
        <h1>
          Review
          <span>
            {!clicked && <IoChevronDown onClick={handleShowContent} />}
            {clicked && <IoChevronUp onClick={handleShowContent} />}
          </span>
        </h1>
      </TitleBox>

      {clicked && (
        <>
          {editing && (
            <Text>
              <textarea
                value={prevReview}
                onChange={(e) => setPrevReview(e.target.value)}
              ></textarea>
              <SaveButton onClick={handleSave}>Salvar</SaveButton>
              <button onClick={handleCancel}>Cancelar</button>
            </Text>
          )}
          {!editing && (
            <Text>
              <div>
                <p>{review}</p>
              </div>
              <button onClick={handleEdit}>editar</button>
            </Text>
          )}
        </>
      )}
    </ReviewContainer>
  );
}
