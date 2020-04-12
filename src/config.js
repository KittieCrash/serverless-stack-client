export default {
    STRIPE_KEY: "pk_test_460mfPxbjOCkei7DwHBcfKuU0095S5aI3S",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "kitkat-note-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://ywlsxf9n93.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_LW6SqXysM",
      APP_CLIENT_ID: "78s2kstrloi1jdbj2lsm225svr",
      IDENTITY_POOL_ID: "us-east-1:94de94c2-7541-4c57-ab03-82acb51d6258"
    }
  };