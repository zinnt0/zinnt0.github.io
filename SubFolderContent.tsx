import { SubFolder } from '../types/folder';
import { FileItem } from './FileItem';
import { Folder } from 'lucide-react';

interface SubFolderContentProps {
  subFolder: SubFolder;
}

export const SubFolderContent = ({ subFolder }: SubFolderContentProps) => (
  <div className="border-l-2 border-gray-200 pl-4">
    <div className="flex items-center gap-2 mb-2">
      <Folder className="w-5 h-5 text-blue-400" />
      <h3 className="text-lg font-semibold text-gray-700">{subFolder.name}</h3>
    </div>
    {subFolder.files.length > 0 ? (
      <div className="space-y-2 pl-7">
        {subFolder.files.map((file, index) => (
          <FileItem key={index} file={file} />
        ))}
      </div>
    ) : (
      <p className="text-sm text-gray-500 italic pl-7">No files uploaded yet</p>
    )}
  </div>
);