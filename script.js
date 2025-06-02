document.getElementById('add-btn').addEventListener('click', function() {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Marquer comme complété
  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Supprimer une tâche
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Empêche de déclencher la complétion
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById('task-list').appendChild(li);
  input.value = "";
});
