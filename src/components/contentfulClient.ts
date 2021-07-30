import * as contentful from 'contentful';

const client = contentful.createClient({
  space: `${process.env.NEXT_PUBLIC_SPACE_ID}`,
  accessToken: `${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`,
});

export default client;
