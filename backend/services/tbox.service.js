const axios = require("axios");

axios.defaults.headers.common["Authorization"] = `Bearer aSuperSecretKey`;

async function getData(filters) {
  let files = {};

  if (filters.fileName) {
    files = {
      files: [filters.fileName],
    };
  } else {
    files = await getFiles();
  }

  const processedFiles = await processFiles(files);

  return processedFiles.filter((item) => item != null);
}

async function getFiles() {
  try {
    const response = await axios.get(
      "https://echo-serv.tbxnet.com/v1/secret/files"
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

async function readFile(name) {
  try {
    const response = await axios.get(
      `https://echo-serv.tbxnet.com/v1/secret/file/${name}`
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

async function csvJSON(name, content) {
  const fileContent = {
    file: name,
    lines: [],
  };

  if (content.length === 0) {
    return false;
  }

  const lines = content.split("\n");

  lines.shift();

  if (lines.length === 0) {
    return false;
  }

  lines.forEach((line) => {
    let currentLine = line.split(",");

    if (currentLine.length === 4) {
      fileContent.lines.push({
        text: currentLine[1],
        number: currentLine[2],
        hex: currentLine[3],
      });
    }
  });

  return fileContent;
}

async function processFiles(files) {
  return await Promise.all(
    files.files.map(async (name) => {
      const content = await csvJSON(name, await readFile(name));

      if (!!content) {
        return content;
      }
    })
  );
}

module.exports = {
  getData,
  getFiles,
};
