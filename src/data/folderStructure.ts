import { MainFolder } from '../types/folder';

export const folderStructure: MainFolder[] = [
  {
    name: "WP Informatik",
    subFolders: [
      {
        name: "Python Text Adventure",
        files: [
          {
            name: "Aufgabenbeschreibung",
            url: "https://raw.github.com/zinnt0/Sch-lermaterialien/blob/21f4a54588ca3f33068f144c3f3f8119aa7447e2/Aufgabenstellung.pdf",
            target: "_blank"
            
          },
          {
            name: "Spielvorlage",
            url: "https://drive.google.com/file/d/1-g-k2bxjLpEqdlqKabBvCCJN4hGQYF36/view?usp=drive_link",
            target: "_blank"
            
          }
        ]
      }
    ]
  },
  {
    name: "Physik 10",
    subFolders: [
      {
        name: "Kraft",
        files: []
      }
    ]
  },
  {
    name: "Informatik 6er",
    subFolders: [
      {
        name: "Daten",
        files: []
      }
    ]
  },
  {
    name: "Physik 8er",
    subFolders: [
      {
        name: "Planeten",
        files: []
      }
    ]
  }
];