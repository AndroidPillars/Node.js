const fs = require("fs");
const fileName = "target.txt";

const mErrorHandler = mError => console.log(mError);

const mDataHandler = data => console.log(data.toString());

fs.readFile(fileName, (mError, data) => {
  if (mError) mErrorHandler(mError);

  mDataHandler(data);
});

console.log("Node js async programming...");
