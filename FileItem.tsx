import { FileDown } from "lucide-react";
import { File } from "../types/folder";

interface FileItemProps {
  file: File;
}

export const FileItem = ({ file }: FileItemProps) => (
  <a
    href={file.url}
    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
    target={file.target}
  >
    <FileDown className="w-4 h-4" />
    <span>{file.name}</span>
  </a>
);
