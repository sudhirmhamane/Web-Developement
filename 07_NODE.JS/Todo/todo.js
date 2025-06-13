// fs module ko import kiya jo file read/write karne ke kaam aata hai
const fs = require("fs");

// Ye file path hai jisme hum task save karenge
const filePath = "./task.json";

// ✅ Task ko file se load karne ka function
const loadTask = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath); // File ko read karna (binary format mein)
    const dataJSON = dataBuffer.toString(); // Buffer ko string mein convert karna
    return JSON.parse(dataJSON); // String ko JSON object mein convert karna
  } catch (error) {
    return []; // Agar file nahi mili to empty array return karna
  }
};

// ✅ Task list ko file mein save karne ka function
const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks); // Task list ko JSON string mein convert karna
  fs.writeFileSync(filePath, dataJSON); // File mein overwrite karke save karna
};

// ✅ Naya task add karne ka function
const addTask = (task) => {
  const tasks = loadTask(); // Pehle se maujood tasks ko load karna
  tasks.push({ task }); // Naya task object ke form mein push karna
  saveTasks(tasks); // Updated task list ko file mein save karna
  console.log("✅ Task added:", task);
};

// ✅ Saare tasks ko print karne ka function
const listTasks = () => {
  const tasks = loadTask(); // Tasks ko load karna
  tasks.forEach((task, index) => {
    console.log(`${index + 1} - ${task.task}`); // Har task ke sath uska index dikhana
  });
};

// ✅ Kisi specific task ko remove karne ka function
const removeTask = (taskToRemove) => {
  const taskLoader = loadTask(); // Purane tasks ko load karna
  const filteredTask = taskLoader.filter((t) => t.task !== taskToRemove); // Us task ko hata dena jo match karta hai

  if (taskLoader.length > filteredTask.length) {
    saveTasks(filteredTask); // Agar task remove hua to naye list ko save karo
    console.log("❌ Task removed:", taskToRemove);
  } else {
    console.log("⚠️ Task not found!");
  }
};

// ✅ Command line se input lena (like 'add', 'list', 'remove')
const command = process.argv[2]; // command: add, list, remove
const argument = process.argv[3]; // task ka naam

// ✅ Command ke according function call karna
if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(argument);
} else {
  console.log("⚠️ Command not found. Use: add | list | remove");
}
