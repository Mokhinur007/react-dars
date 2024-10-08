import './App.css'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from './components/ui/input';

function App() {
  return (
   <>
   <h1 className = "text-red-700">hello world</h1>
     <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
        <Input className = "rounded-full"/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </>
  );
}

export default App
