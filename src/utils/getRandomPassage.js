import data from "../data/data.json";

function getRandomPassage(difficulty) {
  const passages = data[difficulty.toLowerCase()];
  const randomNum = Math.floor(Math.random() * passages.length);

  const passage = passages[randomNum].text;

  return passage;
}

export default getRandomPassage;
