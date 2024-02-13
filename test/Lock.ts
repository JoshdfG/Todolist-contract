import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { ContractTransactionResponse } from "ethers";
import { TodoList } from "../typechain-types";

describe("TodoList Contract", () => {
  let todoList: TodoList & {
    deploymentTransaction(): ContractTransactionResponse;
  };

  beforeEach(async () => {
    const TodoList = await ethers.getContractFactory("TodoList");
    todoList = (await TodoList.deploy()) as TodoList & {
      deploymentTransaction(): ContractTransactionResponse;
    };
    await todoList.deploymentTransaction();
  });

  it("should add a new task", async () => {
    await todoList.addTask("Task Header", "Task Content");
    const task = await todoList.tasks(0);

    expect(task.id).to.equal(0);
    expect(task.header).to.equal("Task Header");
    expect(task.content).to.equal("Task Content");
    expect(task.completed).to.equal(false);
  });
});
