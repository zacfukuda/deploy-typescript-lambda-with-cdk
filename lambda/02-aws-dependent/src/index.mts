import { SESClient } from "@aws-sdk/client-ses";

export const handler = async () => {
  new SESClient({});
}
