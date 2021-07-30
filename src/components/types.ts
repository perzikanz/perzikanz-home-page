export type TEntries = {
  items: {
    fields: {
      bodyText: string;
      title: string;
    };
    metadata: {};
    sys: {
      id: string;
    };
  }[];
};

export type TEntry = {
  fields: {
    bodyText: string;
    title: string;
  };
  metadata: {};
  sys: {};
};
