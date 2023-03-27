export type Monster = {
  id: string;
  name: string;
  date: string;
  gender: string;
  permitions: {
    read: boolean;
    write: boolean;
    execute: boolean;
  };
  fruit: string;
  file: string;
};
