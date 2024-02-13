import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("TodoList", function () {
  async function deployTodoList() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const TodoList = await ethers.getContractFactory("TodoList");
    const todoList = await TodoList.deploy();

    return { todoList };
  }

  describe("AddTask", function () {
    it("Should update the todo list", async function () {
      const { todoList } = await loadFixture(deployTodoList);

      const Lists = await todoList.addTask("header,todo,false", () => todoList.);
      const name = await todoList.getName();

      expect(name).to.equal("John");

      expect(todoList).to.equal("");
    });
  });
});
