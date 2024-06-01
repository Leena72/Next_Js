const { username, password } = process.env;
export const connectionStr =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@nextjscluster.lty9pgc.mongodb.net/blogDB?retryWrites=true&w=majority&appName=nextjsCluster";
