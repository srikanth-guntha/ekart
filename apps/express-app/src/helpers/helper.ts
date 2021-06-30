export const formatSearchResponse = (data) => {
  if (!data.items) {
    return data;
  }
  data.items = data.items.map((value) => {
    return {
      id: value.id,
      volumeInfo: {
        imageLinks: value.volumeInfo?.imageLinks,
        title: value.volumeInfo?.title,
        subtitle: value.volumeInfo?.subtitle,
        description: value.volumeInfo?.description,
        authors: value.volumeInfo?.authors,
      },
    };
  });
  return data;
};

export const formatBookInfoResponse = (value) => {
  return {
    id: value.id,
    volumeInfo: {
      imageLinks: value.volumeInfo?.imageLinks,
      title: value.volumeInfo?.title,
      publisher: value.volumeInfo?.publisher,
      printedPageCount: value.volumeInfo?.printedPageCount,
      language: value.volumeInfo?.language,
      description: value.volumeInfo?.description,
      authors: value.volumeInfo?.authors,
    },
  };
};
