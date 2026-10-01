const tasks = [];
let nextId = 1;

function addTask(title) {
  if (title.trim() === "") {
    console.log("عنوان کار نمی‌تواند خالی باشد.");
    return;
  }

  const task = {
    id: nextId,
    title: title.trim(),
    completed: false
  };

  tasks.push(task);
  nextId++;
}

function removeTask(id) {
  for (let index = 0; index < tasks.length; index++) {
    if (tasks[index].id === id) {
      tasks.splice(index, 1);
      return;
    }
  }

  console.log("کاری با این شناسه پیدا نشد.");
}

function editTask(id, newTitle) {
  if (newTitle.trim() === "") {
    console.log("عنوان جدید نمی‌تواند خالی باشد.");
    return;
  }

  for (const task of tasks) {
    if (task.id === id) {
      task.title = newTitle.trim();
      return;
    }
  }

  console.log("کاری با این شناسه پیدا نشد.");
}

function toggleTask(id) {
  for (const task of tasks) {
    if (task.id === id) {
      if (task.completed === false) {
        task.completed = true;
      } else {
        task.completed = false;
      }

      return;
    }
  }

  console.log("کاری با این شناسه پیدا نشد.");
}

function showTasks() {
  console.log("\nهمه کارها:");

  if (tasks.length === 0) {
    console.log("هنوز کاری ثبت نشده است.");
    return;
  }

  for (const task of tasks) {
    let status = "انجام نشده";

    if (task.completed === true) {
      status = "انجام شده";
    }

    console.log(`${task.id}. ${task.title} | ${status}`);
  }
}

function showCompletedTasks() {
  console.log("\nکارهای انجام شده:");

  for (const task of tasks) {
    if (task.completed === true) {
      console.log(`${task.id}. ${task.title} | انجام شده`);
    }
  }
}

function showPendingTasks() {
  console.log("\nکارهای باقی مانده:");

  for (const task of tasks) {
    if (task.completed === false) {
      console.log(`${task.id}. ${task.title} | انجام نشده`);
    }
  }
}

function showTaskSummary() {
  let completedCount = 0;

  for (const task of tasks) {
    if (task.completed === true) {
      completedCount++;
    }
  }

  const pendingCount = tasks.length - completedCount;

  console.log("\nخلاصه کارها:");
  console.log(`کل کارها: ${tasks.length}`);
  console.log(`انجام شده: ${completedCount}`);
  console.log(`باقی مانده: ${pendingCount}`);
}

addTask("تمرین JavaScript");
addTask("مرور آرایه‌ها");
addTask("حل تمرین توابع");
addTask("مطالعه ES6");

showTasks();

toggleTask(1);
editTask(2, "مرور آرایه‌ها و اشیا");
removeTask(3);

showTasks();
showCompletedTasks();
showPendingTasks();
showTaskSummary();
