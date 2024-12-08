import { MainFolder } from '../types/folder';

/*
# Make your changes to the project files

# Build the project
npm run build

# Deploy the changes to GitHub Pages
npm run deploy

# Commit and push your changes to the repository
git add .
git commit -m "Your commit message"
git push origin main
*/

export const folderStructure: MainFolder[] = [
  {
    name: "WP Informatik",
    subFolders: [
      {
        name: "Python Text Adventure",
        files: [
          {
            name: "Aufgabenbeschreibung",
            url: "https://github.com/zinnt0/Schuelermaterialien/blob/b3c5b9793176a0b9aba6609d65d6df117fec26ca/WP%20Informatik/Aufgabenstellung.pdf",
            target: "_blank"
            
          },
          {
            name: "Spielvorlage",
            url: "https://github.com/zinnt0/Schuelermaterialien/blob/b3c5b9793176a0b9aba6609d65d6df117fec26ca/WP%20Informatik/Spielvorlage.py",
            target: "_blank"
            
          },
          {
            name: "Szenarien",
            url: "https://github.com/zinnt0/Schuelermaterialien/blob/ba106a47183f2c39524234cf84747b50ebe16e95/WP%20Informatik/Szenarien.md",
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