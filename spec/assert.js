let assert = function istrue(assertion, test) {
  if (!assertion) {
    throw new Error("Test failed for" + test)
  } else {
    console.log("Test passed for:" + test)
  }
}