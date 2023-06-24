import { Button, Modal } from "antd";
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

const CustomModal = ({ setIsModalOpen, isModalOpen, url, title }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCancelIcon = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Share On Social Media"
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
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
