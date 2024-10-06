import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { TodoItemType } from "@/types";

interface TodoItemProps extends TodoItemType {
  onDelete: () => void;
  setValue: (newTaskVal: string, itemId: number) => void;
}

export const TodoItem = ({ id, task, isDone, onDelete, setValue }: TodoItemProps) => {
  return (
    <div className="flex w-full max-w-md items-center justify-between">
      <div className="flex items-center gap-x-2">
        <Checkbox />
        <input
          type="text"
          value={task}
          className="placeholder:text-black text-lg"
          onChange={(e) => setValue(e.target.value, id)}
        />
      </div>
      <Button size="icon" variant="ghost" onClick={onDelete}>
        <Trash className="text-red-500" />
      </Button>
    </div>
  );
};
