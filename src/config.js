const dev = {
  STRIPE_KEY: "pk_test_460mfPxbjOCkei7DwHBcfKuU0095S5aI3S",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1hg2q9td9buon"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ph3knyplwl.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_fy8wMaAZl",
    APP_CLIENT_ID: "6a52cese21jop6itt18pto09c4",
    IDENTITY_POOL_ID: "us-east-1:a2a46282-5cba-4cf3-9877-5247ddab101c"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_460mfPxbjOCkei7DwHBcfKuU0095S5aI3S",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-11yv9gtluceux"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://eoynnxllnl.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_iuLZBbxk7",
    APP_CLIENT_ID: "24juoiqed8ujv25u5l6gl4211e",
    IDENTITY_POOL_ID: "us-east-1:79639999-1290-44c8-8d13-646dff4a87d1"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};