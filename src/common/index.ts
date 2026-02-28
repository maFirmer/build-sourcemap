import axios from "axios";
import { SourceMapConsumer } from "source-map-js";

export const getSourcemap = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

export const getErrorCodeFromgetSourcemap = async (errorStack: any) => {
  const sourcemapUrl = errorStack.fileName + ".map";
  const sourcemap = await getSourcemap(sourcemapUrl);
  const consumer = new SourceMapConsumer(sourcemap);

  const sourcemapPosition = consumer.originalPositionFor({
    line: errorStack.lineNumber,
    column: errorStack.columnNumber || 0,
  });
  if (!sourcemapPosition.source) {
    return null;
  }
  const errorCode = consumer.sourceContentFor(sourcemapPosition.source);
  console.log(errorCode);
  return errorCode;
};
