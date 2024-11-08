import axios from "axios";

const useSendPush = () => {
  const sendPush = async ({
    title,
    body,
    click_action,
  }: {
    title: string;
    body: string;
    click_action: string;
  }) => {
    const message = {
      data: {
        title,
        body,
        image: "/icon512_rounded.png",
        click_action,
      },
    };

    axios.request({
      method: "POST",
      url: window?.location?.origin + "api/send-fcm",
      data: { message },
    });
  };

  return sendPush;
};

export default useSendPush;
