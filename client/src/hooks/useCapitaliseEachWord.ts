const captialsieEachWord = (sentence: string) => {
  const splitSentence = sentence.toLowerCase().split(' ');

  for (let i = 0; i < splitSentence.length; i++) {
    splitSentence[i] =
      splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].substring(1);
  }

  return splitSentence.join(' ');
};

export default captialsieEachWord;
