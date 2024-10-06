import { TodoList } from "@/components/todo-list";

const currentDay = new Date().getDay();
const currentMonth = new Date().getMonth();
const currentDate = new Date().getDate();

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-4xl font-bold">TODO LIST</h1>
        <p className="text-2xl uppercase font-medium">
          Today is {days[currentDay - 1]}, {months[currentMonth - 1]} {currentDate}
        </p>
        <TodoList />
      </div>
    </main>
  );
}
