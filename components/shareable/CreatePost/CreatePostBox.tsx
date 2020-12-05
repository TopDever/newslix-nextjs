import { useState } from "react";
import { Button } from "../ButtonsStyles";
import { CreatePostStyle } from "./styles";
import CreatePostModal from "./index";
import { useModal } from "../Modal/useModal";
import Modal from "@Components/shareable/Modal/ModalContainer";
import CreatePostView from "./CreatePostView";
export default () => {
  const { isShown, toggle } = useModal();
  return (
    <>
      <CreatePostStyle>
        <div className="inner">
          <div className="cs-header">
            <div className="user-image">
              <img src="images/user-img/user-img-1.png" alt="user-name" />
            </div>
            <div className="user-input modalCreatePost" onClick={toggle}>
              <span>What's on your mind, LXSX?</span>
            </div>
          </div>
          <div className="cs-body">
            <div className="send-photo">
              <Button className="btn-send icon-green">
                <i className="mdi mdi-image-multiple"></i>Photo/Video
              </Button>
            </div>
          </div>
        </div>
      </CreatePostStyle>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={<CreatePostView />}
      />
    </>
  );
};
