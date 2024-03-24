export const handleTruncateText = (text: string) => {
  const maxCharacters = 200;

  if (text.length <= maxCharacters) {
    return text;
  }

  const truncatedText = text.slice(0, maxCharacters) + "...";

  return truncatedText;
};
