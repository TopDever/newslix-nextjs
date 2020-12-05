import Modal from "@Components/shareable/Modal/ModalContainer";
import { useState } from "react";
import CreatePostView from "./CreatePostView";
export default ({ isOpen, hide }) => {
  const [mediaFiles, setMediaFiles] = useState([]);

  return (
    <Modal isShown={isOpen} hide={hide} modalContent={<CreatePostView />} />
  );
};
