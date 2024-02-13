// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TodoList {
    struct TodoTask {
        string header;
        string content;
        bool completed;
    }
    // Store Tasks in dynamic array
    TodoTask[] public tasks;

    // Function to add a new task
    function addTask(string memory _header, string memory _content) external {
        tasks.push(TodoTask(_header, _content, false));
    }

    // Function to mark a task as completed
    function toggleCompleted(uint _id) external {
        require(_id < tasks.length, "Task not found");
        tasks[_id].completed = !tasks[_id].completed;
    }

    //edit the task header
    function editTask(
        uint _id,
        string memory _newHeader,
        string memory _newContent
    ) external {
        require(_id < tasks.length, "Task not found");
        tasks[_id].header = _newHeader;
        tasks[_id].content = _newContent;
    }

    //deleteTask de;eetese the inputed id
    function deleteTask(uint _id) public {
        delete tasks[_id];
    }
}
