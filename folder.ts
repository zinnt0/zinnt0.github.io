export interface File {
  name: string;
  url: string;
  target: string;
}

export interface SubFolder {
  name: string;
  files: File[];
}

export interface MainFolder {
  name: string;
  subFolders: SubFolder[];
}