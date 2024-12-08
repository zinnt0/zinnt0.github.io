import { useState } from 'react';
import { Folder, ChevronDown, ChevronRight } from 'lucide-react';
import { MainFolder as MainFolderType } from '../types/folder';
import { SubFolderContent } from './SubFolderContent';

interface MainFolderProps {
  folder: MainFolderType;
}

export const MainFolder = ({ folder }: MainFolderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 mb-4 w-full text-left hover:bg-gray-50 p-2 rounded-lg transition-colors"
      >
        <Folder className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-800">{folder.name}</h2>
        {isOpen ? (
          <ChevronDown className="w-5 h-5 ml-auto" />
        ) : (
          <ChevronRight className="w-5 h-5 ml-auto" />
        )}
      </button>
      {isOpen && (
        <div className="space-y-4 pl-6">
          {folder.subFolders.map((subFolder, index) => (
            <SubFolderContent key={index} subFolder={subFolder} />
          ))}
        </div>
      )}
    </div>
  );
};