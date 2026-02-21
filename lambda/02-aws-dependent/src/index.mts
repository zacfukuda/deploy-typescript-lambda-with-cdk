import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export const handler = async (event: {
  to: string;
  subject: string;
  body: string;
}) => {
  const command = new SendEmailCommand({
    Source: 'john@acme.com',
    Destination: {
      ToAddresses: [event.to],
    },
    Message: {
      Subject: { Charset: "UTF-8", Data: event.subject },
      Body: {
        Text: { Charset: "UTF-8", Data: event.body },
      },
    },
  });
  const client = new SESClient({});

  await client.send(command);
}
