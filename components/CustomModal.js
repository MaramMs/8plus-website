import { Button, Modal, message } from "antd";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
} from "next-share";
import { FaRegCopy } from "react-icons/fa";

const CustomModal = ({ setIsModalOpen, isModalOpen, url, title }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCancelIcon = () => {
    setIsModalOpen(false);
  };
  const copyToClipboard = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        message.success("URL copied to clipboard!");
      })
      .catch((error) => {
        message.error(error);
      });
  };

  return (
    <>
      <Modal
        title="Share On Social Media Or Copy Link"
        open={isModalOpen}
        onCancel={handleCancelIcon}
        centered
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <div className="flex justify-center items-center gap-[20px]">
          <FacebookShareButton
            url={url}
            quote={
              "next-share is a social share buttons for your next React apps."
            }
            hashtag={"#nextshare"}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton
            url={url}
            title={
              "next-share is a social share buttons for your next React apps."
            }
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <LinkedinShareButton url={url}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>

          <TelegramShareButton
            url={url}
            title={
              "next-share is a social share buttons for your next React apps."
            }
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          <FaRegCopy onClick={() => copyToClipboard(url)} className="text-[25px] cursor-pointer" />
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
