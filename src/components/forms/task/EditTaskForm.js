import BaseTaskForm from './BaseTaskForm';	

export default function EditTaskForm({	
  open,	
  setOpen	
}) {	
  return (	
    <BaseTaskForm open={open} setOpen={setOpen} />	
  )	
}