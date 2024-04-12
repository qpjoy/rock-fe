type Personer = {
  firstName: string;
  id: number;
};

type Usern = Personer & {
  email: string;
};

interface HasID {
  id: number;
}

function addIdToValue<T>(val: T): T & HasID {
  const id = Math.random();
  return {
    ...val,
    id,
  };
}

interface Poster {
  title: string;
  thumbsUp: number;
}

const post = addIdToValue<Poster>({
  title: "Marmite Rules",
  thumbsUp: 1000,
});
