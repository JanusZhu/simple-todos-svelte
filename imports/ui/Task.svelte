<script>
    import { TasksCollection } from "../api/TasksCollection";
    export let task;
    const toggleChecked = ()=> {
        TasksCollection.update(task._id, {
            $set: {isChecked: !task.isChecked}
        })
    }
    const deleteTask = ()=> {
        TasksCollection.remove(task._id)
    }

</script>

<li>
    <input type="checkbox"  checked={!!task.isChecked} on:click={toggleChecked}> 
    <span>{ task.text }</span>
    <button type="button" class="delete" on:click={deleteTask}>&times;</button>
</li>