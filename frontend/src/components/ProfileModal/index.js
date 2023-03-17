import { useRef } from "react";
import Modal from "react-modal";
import romance from "../../assets/images/romance.png";
import { CloseProfile, UploadImage } from "./style";

export default function ProfileModal({ isOpenModal, setIsOpenModal }) {
  Modal.setAppElement(".root");
  const inputFileRef = useRef(null);

  function handleClick() {
    inputFileRef.current.click();
  }

  async function handleUpload(event) {
    const imageFile = event.target.files[0];
    console.log(imageFile);
    const imageUrl = await convertImageToUrl(imageFile);
  }

  async function convertImageToUrl(image) {
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const objectURL = URL.createObjectURL(blob);
      return objectURL;
    } catch (error) {
      console.log("Error converting image to URL: ", error);
      throw new Error("Failed to convert image to URL");
    }
  }

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={() => setIsOpenModal(false)}
      contentLabel="Profile picture"
      className="modal-content"
      overlayClassName="modal.overlay"
      shouldCloseOnOverlayClick={true}
    >
      <img src={romance} alt="profile" />
      <CloseProfile onClick={() => setIsOpenModal(false)} />
      <UploadImage onClick={handleClick} />
      <input ref={inputFileRef} type="file" onChange={handleUpload} />
    </Modal>
  );
}
