import { MainFolder } from './MainFolder';
import { folderStructure } from '../data/folderStructure';

export const FolderStructure = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
    {folderStructure.map((folder, index) => (
      <MainFolder key={index} folder={folder} />
    ))}
  </div>
);