import { IColor } from "@Components/data/baseStyles";
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";
const animateScale = keyframes`
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
`;
export const Modal = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-bottom: calc(60px + 16px);
  padding-top: calc(60px + 16px);
  background-color: ${(p) => rgba(255, 255, 255, 0.7)};
  z-index: 2000;
  .modal-content {
    position: relative;
    background-color: ${IColor.white};
    border-radius: 10px;
    width: 500px;
    height: 440px;
    box-shadow: 0 12px 28px 0 ${IColor.shadow2}, 0 2px 4px 0 ${IColor.shadow1},
      inset 0 0 0 1px ${IColor.shadowInset};
    animation: ${animateScale} 0.4s;
    overflow: hidden;
    .modal-header {
      padding: 20px 0;
      background-color: ${IColor.white};
      // height: 60px;
      text-align: center;
      position: relative;
      border-bottom: 1px solid ${IColor.borderColor};
      h2 {
        margin-bottom: 0;
        color: ${IColor.textDark};
        font-size: 20px;
      }
      .close {
        color: ${IColor.textGray};
        background-color: ${IColor.background};
        font-size: 20px;
        font-weight: bold;
        position: absolute;
        right: 10px;
        top: 15px;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        &:hover,
        &:focus {
          background-color: darken($color: ${IColor.background}, $amount: 3);
          text-decoration: none;
          cursor: pointer;
        }
      }
      .back {
        color: ${IColor.textGray};
        background-color: ${IColor.background};
        font-size: 20px;
        font-weight: bold;
        position: absolute;
        left: 10px;
        top: 15px;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        &:hover,
        &:focus {
          background-color: darken($color: ${IColor.background}, $amount: 3);
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
    .modal-body {
      overflow-y: auto;
      max-height: 560px;
      .msg-title {
        color: ${IColor.textDark};
        font-size: 1.2rem;
        font-weight: 700;
        margin: 15px 0 8px 0;
      }
      .msg-desc {
        color: ${IColor.textGray};
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 23px;
      }
    }
    .modal-footer {
      padding: 10px 15px 15px 15px;
      .btn-default {
        width: 100%;
      }
    }
  }
`;

export const CreatePostStyle = styled.div`
  margin: 15px 0 35px 0;
  .inner {
    padding: 10px;
    background-color: ${IColor.white};
    border-radius: 10px;
    border: 1px solid ${IColor.borderColor};
    .cs-header {
      display: grid;
      grid-template-columns: 45px auto;
      column-gap: 5px;
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 1px solid ${IColor.borderColor};
      .user-image {
        img {
          width: 40px;
          border-radius: 50%;
        }
      }
      .user-input {
        background-color: ${IColor.background};
        border-radius: 30px;
        height: 40px;
        padding: 8px 12px;
        color: ${IColor.textGray};
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease;
        span {
          font-size: 14px;
          font-weight: 400;
        }
        &:hover {
          background-color: darken($color: ${IColor.background}, $amount: 3);
          transition: all 0.2s ease;
        }
      }
    }
    .cs-body {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 10px;
      .send-photo {
        flex: 0 0 50%;
        max-width: 50%;
        text-align: center;
      }
      .send-feeling {
        flex: 0 0 50%;
        max-width: 50%;
        text-align: center;
      }
    }
    .btn-send {
      min-width: 180px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 500;
      color: ${IColor.textGray};
      background-color: transparent;
      .mdi {
        margin-right: 5px;
        font-size: 22px;
        position: relative;
        top: 2px;
      }
      &.icon-green {
        .mdi {
          color: #45bd62;
        }
      }
      &.icon-yellow {
        .mdi {
          color: #f7ba2c;
        }
      }
      &:hover {
        background-color: ${IColor.background};
      }
    }
  }
  @media (max-width: 360px) {
    .inner .cs-body {
      flex-direction: column;
      .send-photo,
      .send-feeling {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
  }
`;

export const ContentCreatePost = styled.div`
  .user-info {
    padding: 15px;
    display: grid;
    grid-template-columns: 40px auto;
    column-gap: 10px;
    .user-image {
      img {
        width: 40px;
        border-radius: 50%;
      }
    }
    .user-privacy {
      h2 {
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: 600;
        color: ${IColor.textDark};
      }
      .select-privacy {
        background-color: ${IColor.borderColor};
        border-radius: 5px;
        display: initial;
        padding: 2px;
        cursor: pointer;
        .mdi {
          font-size: 16px;
          color: ${IColor.textGray};
        }
        span {
          font-size: 13px;
          font-weight: 500;
          color: ${IColor.textGray};
        }
      }
    }
  }
  .write-comment {
    margin: 10px 0;
    padding: 0 15px;
    min-height: 155px;
    max-height: 155px;
    overflow-y: auto;
    position: relative;
    display: none;
    &.active {
      display: block;
    }
    .comment-bg {
      display: none;
      background-image: url(/images/patterns/bg-pattern.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      overflow-y: auto;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 300px;
    }
    .myInput {
      border: none;
      font-size: 22px;
      font-weight: 300;
      color: ${IColor.textGray};
      width: 100%;
    }
    .select-bg-content {
      display: grid;
      grid-template-columns: 40px auto 40px;
      align-items: center;
      height: 32px;
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 100%;
      padding: 0 15px;
      .button-select {
        position: relative;
        height: 100%;
        #btn-show-patterns,
        #btn-hide-patterns {
          display: none;
          width: 32px;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          cursor: pointer;
          img {
            width: 100%;
          }
          &.active {
            display: block;
          }
        }
        #btn-hide-patterns {
          align-items: center;
          justify-content: center;
          background-color: ${IColor.backgroundDark};
          border-radius: 5px;
          box-shadow: 0 3px 5px ${(p) => rgba("#000000", 0.2)};
          &.active {
            display: flex;
          }
          .mdi {
            font-size: 24px;
          }
        }
      }
      .bg-patterns {
        display: flex;
        opacity: 0;
        align-items: center;
        justify-content: space-around;
        visibility: hidden;
        .pattern {
          flex: 0 0 32px;
          max-width: 32px;
          cursor: pointer;
          box-shadow: 0 3px 5px ${(p) => rgba("#000000", 0.2)};
          img {
            width: 100%;
            border-radius: 5px;
          }
          &.color {
            border-radius: 5px;
            .inner-pattern {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              border-radius: 2px;
            }
            &.gray {
              background-color: ${IColor.backgroundDark};
            }
            &.green {
              background-color: #45bd62;
            }
            &.grid {
              background-color: ${IColor.backgroundDark};
            }
          }
        }
        &.active {
          opacity: 1;
          visibility: visible;
        }
      }
      .emoji {
        height: 100%;
        .btn-emoji {
          width: 32px;
          height: 32px;
          background-color: transparent;
          border: none;
          color: ${IColor.textLight};
          font-size: 26px;
          cursor: pointer;
        }
      }
    }
    &.add-pattern {
      .comment-bg {
        display: block;
      }
      .select-bg-content {
        position: absolute;
        bottom: -130px;
        left: 0;
      }
      .myInput {
        position: absolute;
        right: 0;
        top: 100%;
        width: 100%;
        background-color: transparent;
        text-align: center;
        transform: translateY(-50%);
        font-size: 24px;
        font-weight: 600;
      }
    }
  }
  .comment-attached-file {
    display: flex;

    flex-direction: column;
    padding: 0 15px;
    min-height: 155px;
    max-height: 155px;
    overflow-y: auto;
    position: relative;
    margin-bottom: 20px;
    .text-group {
      position: relative;
      .myInput {
        width: 100%;
        height: 32px;
        font-size: 14px;
        font-weight: 400;
        color: ${IColor.textGray};
        border: none;
        padding: 5px 40px 5px 0;
      }
      .emoji {
        position: absolute;
        top: 0;
        right: 0;
        width: 32px;
        height: 32px;
        .btn-emoji {
          width: 32px;
          height: 32px;
          border: none;
          background-color: transparent;
          cursor: pointer;
          .mdi {
            font-size: 20px;
            color: ${IColor.textGray};
          }
        }
      }
    }
    .file-attached {
      position: relative;
      margin-top: 20px;
      margin-bottom: 15px;
      &:hover {
        .edit-file-buttons {
          display: flex;
        }
      }
      .edit-file-buttons {
        position: absolute;
        left: 0;
        top: 10px;
        width: 100%;
        display: none;
        z-index: 50;
        padding: 0 10px;
        align-items: center;
        justify-content: space-between;
        .btn-edit {
          padding: 0.5rem 0.8rem;
          border: none;
          border-radius: 8px;
          background-color: ${IColor.white};
          font-size: 14px;
          font-weight: 500;
          color: ${IColor.textDark};
          cursor: pointer;
          .mdi {
            font-size: 18px;
            margin-right: 5px;
            position: relative;
            top: 1px;
          }
          &:hover {
            background-color: ${IColor.background};
          }
        }
        .btn-delete-file {
          background-color: ${IColor.white};
          border-radius: 50%;
          width: 36px;
          height: 36px;
          border: none;
          cursor: pointer;
          z-index: 50;
          .mdi {
            font-size: 18px;
            position: relative;
            top: 1px;
          }
          &:hover {
            background-color: ${IColor.background};
          }
        }
      }
      .attached-inner {
        .file-preview {
          width: 100%;
          position: relative;
          margin-bottom: 3px;
          .preview-inner {
            img {
              width: 100%;
            }
          }
          .added-file-number {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: block;
            align-items: center;
            justify-content: center;
            font-size: 34px;
            font-weight: 700;
            color: #ffb0b0;
            background-color: ${(p) => rgba("#fff", 0.4)};

            span {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          &.video {
            .preview-inner {
              img {
                width: 100%;
                border-radius: 10px;
              }
            }
            &::before {
              content: "\F040D";
              font-family: "Material Design Icons";
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              font-size: 70px;
              color: ${IColor.white};
              opacity: 0.8;
              z-index: 20;
            }
          }
        }
        &.multi-1 {
          .file-preview {
            .preview-inner {
              img {
                border-radius: 10px;
              }
            }
          }
        }
        &.multi-2 {
          .file-preview {
            height: 180px;
            overflow: hidden;
            .preview-inner {
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            &:first-child {
              .preview-inner {
                img {
                  border-radius: 10px 10px 0 0;
                }
              }
            }
            &:last-child {
              .preview-inner {
                img {
                  border-radius: 0 0 10px 10px;
                }
              }
            }
          }
        }
        &.multi-3 {
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          .file-preview {
            height: 180px;
            overflow: hidden;
            .preview-inner {
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            &:nth-child(1) {
              flex: 0 0 100%;
              max-width: 100%;
              .preview-inner {
                img {
                  border-radius: 10px 10px 0 0;
                }
              }
            }
            &:nth-child(2) {
              flex: 0 0 50%;
              max-width: 50%;
              .preview-inner {
                padding-right: 3px;
                img {
                  border-radius: 0 0 0 10px;
                }
              }
            }
            &:nth-child(3) {
              flex: 0 0 50%;
              max-width: 50%;
              .preview-inner {
                img {
                  border-radius: 0 0 10px 0;
                }
              }
            }
          }
        }
        &.multi-4 {
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          .file-preview {
            height: 180px;
            overflow: hidden;
            .preview-inner {
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            &:nth-child(1) {
              flex: 0 0 50%;
              max-width: 50%;
              .preview-inner {
                padding-right: 3px;
                img {
                  border-radius: 10px 0 0 0;
                }
              }
            }
            &:nth-child(2) {
              flex: 0 0 50%;
              max-width: 50%;
              .preview-inner {
                img {
                  border-radius: 0 10px 0 0;
                }
              }
            }
            &:nth-child(3) {
              flex: 0 0 50%;
              max-width: 50%;
              .preview-inner {
                padding-right: 3px;
                img {
                  border-radius: 0 0 0 10px;
                }
              }
            }
            &:nth-child(4) {
              flex: 0 0 50%;
              max-width: 50%;
              .preview-inner {
                img {
                  border-radius: 0 0 10px 0;
                }
              }
            }
          }
        }
        &.multi-5 {
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          .file-preview {
            height: 180px;
            overflow: hidden;
            .preview-inner {
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            &:nth-child(1) {
              flex: 0 0 50%;
              max-width: 50%;
              .preview-inner {
                padding-right: 3px;
                img {
                  border-radius: 10px 0 0 0;
                }
              }
            }
            &:nth-child(2) {
              flex: 0 0 50%;
              max-width: 50%;
              .preview-inner {
                img {
                  border-radius: 0 10px 0 0;
                }
              }
            }
            &:nth-child(3) {
              flex: 0 0 33.33%;
              max-width: 33.33%;
              .preview-inner {
                padding-right: 3px;
                img {
                  border-radius: 0 0 0 10px;
                }
              }
            }
            &:nth-child(4) {
              flex: 0 0 33.33%;
              max-width: 33.33%;
              .preview-inner {
                padding-right: 3px;
                img {
                  border-radius: 0;
                }
              }
            }
            &:nth-child(5) {
              flex: 0 0 33.33%;
              max-width: 33.33%;
              .preview-inner {
                img {
                  border-radius: 0 0 10px 0;
                }
              }
            }
          }
        }
        &.multi-more {
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          .file-preview {
            height: 180px;
            overflow: hidden;
            .preview-inner {
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            &:nth-child(1) {
              flex: 0 0 50%;
              max-width: 50%;
              .preview-inner {
                padding-right: 3px;
                img {
                  border-radius: 10px 0 0 0;
                }
              }
            }
            &:nth-child(2) {
              flex: 0 0 50%;
              max-width: 50%;
              .preview-inner {
                img {
                  border-radius: 0 10px 0 0;
                }
              }
            }
            &:nth-child(3) {
              flex: 0 0 33.33%;
              max-width: 33.33%;
              .preview-inner {
                padding-right: 3px;
                img {
                  border-radius: 0 0 0 10px;
                }
              }
            }
            &:nth-child(4) {
              flex: 0 0 33.33%;
              max-width: 33.33%;
              .preview-inner {
                padding-right: 3px;
                img {
                  border-radius: 0;
                }
              }
            }
            &:nth-child(5) {
              flex: 0 0 33.33%;
              max-width: 33.33%;
              .preview-inner {
                img {
                  border-radius: 0 0 10px 0;
                }
              }
            }
          }
        }
      }

      &.multiple-file {
        .file-preview {
          max-height: 232px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
          border-radius: 10px;
          img {
            object-fit: cover;
          }
        }
      }
    }
  }
  .attachment {
    margin-bottom: 10px;
    padding: 0 15px;
    .atch-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      border: 1px solid ${IColor.borderColor};
      border-radius: 8px;
      box-shadow: 0 1px 2px ${(p) => rgba("#000000", 0.2)};
      .btn-attach-text {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        color: ${IColor.textGray};
        display: inline-block;
      }
      .btn-attach {
        background-color: transparent;
        border: none;
        cursor: pointer;
        width: 36px;
        height: 36px;
        color: ${IColor.textGray};
        border-radius: 50%;
        &:hover {
          background-color: ${IColor.background};
        }
        &.green {
          color: #45bd62;
        }
        &.yellow {
          color: #f7ba2c;
        }
        .mdi {
          font-size: 24px;
          position: relative;
          right: 1px;
        }
      }
    }
  }
`;

export const ChoosePublic = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  transform: translateX(100%) translateZ(1px);
  &.active {
    opacity: 1;
    visibility: visible;
    transition: all 0.4s ease;
    transform: translateX(0%) translateZ(1px);
  }
  .modal-body {
    height: 420px;
    padding: 0 15px;
  }
  .radio-group {
    margin: 15px 0 0 0;
  }
`;

export const PatternCategory = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  transform: translateX(100%) translateZ(1px);
  &.active {
    opacity: 1;
    visibility: visible;
    transition: all 0.4s ease;
    transform: translateX(0%) translateZ(1px);
  }
  .modal-body {
    padding: 0 15px;
  }
  .pattern-group {
    margin-top: 20px;
    max-height: 430px;
    h6 {
      font-size: 16px;
      font-weight: 600;
      padding: 15px 0 5px 5px;
      &:first-child {
        padding-top: 0;
      }
    }
    .list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      .pattern {
        flex: 0 0 90px;
        max-width: 90px;
        padding: 5px;
        margin-bottom: 5px;
        .ptn-inner {
          img {
            width: 100%;
            border-radius: 15px;
          }
        }
        &.active {
          img {
            border: 3px solid ${IColor.blue};
          }
        }
      }
    }
  }
`;
