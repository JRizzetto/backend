import { taskManager } from "../manager/tasks.js";
import chalk from "chalk";
import { isCancel, log, select } from "@clack/prompts";
import { listtasksMenu } from "./list.js";

export async function updateTaskMenu(taskName) {
  const task = taskManager.tasks.get(taskName);

  if (!task) {
    console.warn(`Task ${taskName} not found!`);
    return;
  }
  const formatedDate = new Date(task.createdAt).toLocaleString();
  const status = taskManager.colorStatus(task.status);

  log.info(
    [
      `Tarefas: ${task.name}`,
      `Status ${status}`,
      `Criada em: ${chalk.bgGray(formatedDate)}`,
    ].join("\n")
  );

  const selected = await select({
    message: "Selecione o que fazer",
    options: [
      { label: "Alterar nome", value: "name" },
      { label: "Alterar status", value: "status" },
      { label: "Deletar", value: "delete" },
      { label: "Voltar", value: "back" },
    ],
  });

  if (isCancel(selected)) {
    listtasksMenu();
    return;
  }

  switch (selected) {
    case "delete": {
      taskManager.tasks.delete(taskName);
      taskManager.save();
    }
    case "back": {
      listtasksMenu();
      return;
    }
    case "name": {
      const oldtaskName = task.name;

      const newTaskName = await text({
        message: "Digite o novo nome da terefa",
        validade(input) {
          if (taskManager.tasks.has(input)) {
            return "Já existe uma tarefa com este nome";
          }
        },
      });
      if (isCancel(newTaskName)) {
        updateTaskMenu(oldtaskName);
        return;
      }

      taskManager.tasks.delete(oldtaskName);
      const updatedTask = { ...task, name: newTaskName };
      taskManager.tasks.set(newTaskName, updatedTask);
      taskManager.save();
      updateTaskMenu(oldtaskName);
      return;
    }
    case "status": {
      const taskStatus = ["em andamento", "concluída", "cancelada"];

      const options = taskStatus
        .filter((status) => status !== task.status)
        .map((status) => ({ label: status, value: status }));

      const status = await select({
        message: "Selecione o novo status da tarefa",
        options,
      });

      if (isCancel(status)) {
        updateTaskMenu(taskname);
        return;
      }

      taskManager.tasks.set(taskName, { ...task, status });
      taskManager.save();
      updateTaskMenu(taskName);

      return;
    }
  }
}
