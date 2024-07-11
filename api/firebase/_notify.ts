import axios from "axios";

interface MessagePayload {
  message: {
    token: string;
    notification: {
      title: string;
      body: string;
    };
  };
}

export const sendNotification = async () => {
  const projectId = "opika-ui";
  const url = `https://fcm.googleapis.com/v1/projects/${projectId}/messages:send`;
  const messagePayload: MessagePayload = {
    message: {
      token:
        "frS2MBCcKxKa4zYyuqAoRS:APA91bFQfjEIP2SQXc3lUN20W2BYoEJ1YTx2QuSp6xe37LjH4ZUXm_dQU_ghF8cw1IsFdwlB95KS3rj1Xf8X95prhCzbbPxSk0MUD_khZQy35ORNyhEdk06Th0xz_6hEy7Gc5dIqZh0U",
      notification: {
        title: "Notification",
        body: "Body",
      },
    },
  }
  try {
    const response = await axios.post(url, messagePayload, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ya29.c.c0ASRK0GYw0-ZK93h-ZKn1hQkhm9iro3p39oKwtzoRiLG23v5wi9oq-khmLYAkPZx8coIa0cTRIFT3H0fSbg0OvIvRvXd4KT1gKU8weKebo6NZtbtgdWWq1WlvWdCarf5Pjf_bA-SisBv-9lrtoXlsubdoD67gMOKAqpUwNLU0yROl36lkiFWm3QbzjGU5_6h3IXfKBSgv4fnx5-WsZl_VDVTL15KZQppLRWmWwb2CED5v7Y3-3dUYfbDSLc65dWd8frqbLtTG11UtGobCuxVG40J9D-Dmww8nyuuhgWe6UduSZETCKcVSOjwGtJh7SusOxmuyAXFmO-u3B3CJ-Fk1HmwJs7jUqc85pM3Mu1GAB3kTqsrdI75yIF1saowH388ArB8-9JJdqofUdcpxF3vbfyFkS04ld2Uq72Ot59a2xxJn56FxIqz1bkOu2jj_mai2laJcvV_OM1XMM9vx0xZa5e229US4sRY4raS83a4OvmeWYIIuO6Vkr6YXO3_oJo0Xwm-e3sWQvqJZRqewRkes8q8QXBYS1m67QRRfrMx5kSsycemvqgptmI0Vx-fQ_tqz1zmtRIh-todWUoWmsyBzu6Mp_wuMZjVhU0y4ubRd1b_RYeXzxka0Fg6-2lt92g4pdBsOppmMfwmFfOctdSO5u3iYmarwx41Q4Xd_XnsrUIYhqdsZogs5UXS1f7s5a3ib-qhSJlrjd99cWmssxegs355xxh5aewvsfXBFVgIn__6n39jr1RX9wXlr1lbgMOoMQQoj6hX1enYjrnrrboqr7kIVWoR6pignIU53Ooak6kXYnafSnkMeBk73XyZQo-h-berkI0eS1slsr5dzcjmSdxlsYR4m125uFZJfOOdjBoyf5Qv9Rqjz8nn1g1Oojw7ivs9gae55MpaouUo-lbBcY2zn6R83Y-XxlURxue-V65f19r3ZvdzdIBh7s5v_RJ2qXjhb9QdbuS-I8fQ3W9bz0hwXS09WvBretn9jOeFwYnYVqIh7Bd8x-Sj`,
      },
    });

    console.log("Message sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
