<script>
  import Task from './Task.svelte';
  let hideCompleted = false
  const setHideCompleted = () => {
    hideCompleted = !hideCompleted
  }
  let incompleteCount;
  let pendingTitle = '';
  let tasks = []

  import { TasksCollection } from '../api/TasksCollection';

  import TaskForm from './TaskForm.svelte';

  $m: {
    tasks = TasksCollection.find(hideCompleted ? {isChecked: {$ne: true}} : {}, {sort:{createdAt:-1}}).fetch()
    incompleteCount = TasksCollection.find({isChecked: {$ne: true}}).count();
    pendingTitle = `${
      incompleteCount ? `(${incompleteCount})` : ''
    }`;
  }
</script>
<div class="app">
  <header>
      <div class="app-bar">
          <div class="app-header">
              <h1>📝️ To Do List {pendingTitle}</h1>
          </div>
      </div>
  </header>

  <div class="main">
      <TaskForm />
      <div class="filter">
        <button on:click={setHideCompleted}>
          {hideCompleted ? 'Show All' : 'Hide Completed'}
        </button>
      </div>

      <ul class="tasks">
          {#each tasks as task (task._id)}
              <Task task={task} />
          {/each}
      </ul>
  </div>
</div>
