import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import SubmissionForm from './SubmissionForm';
import TaskArea from './TaskArea';

import { v4 as uuidv4 } from 'uuid';

const TodoListWrapper = styled.div`
    flex: 1;
    max-width: 33%;
    height: 100%;
`;

const TodoListFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;

type TaskData = {
    id: string,
    title: string,
    description: string | undefined
};

interface TodoListState {
    tasks: Array<TaskData>;
}

class TodoList extends React.Component<{}, TodoListState> {
    constructor(props: any) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: uuidv4(),
                    title: 'This is Task 1, with a description',
                    description: 'Description here!'
                },
                {
                    id: uuidv4(),
                    title: 'This is Task 2, just a title!',
                    description: undefined
                },
            ]
        };

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    addTask(task: TaskData) {
        this.setState((prevState) => {
            return {tasks: [...prevState.tasks, task]};
        });
    }

    deleteTask(targetTaskId: string) {
        let oldTaskList = this.state.tasks;

        let newTaskList = oldTaskList.filter((task) => {
            return task.id !== targetTaskId;
        });

        this.setState(() => {
            return {tasks: newTaskList};
        });
    }
    
    render() {
        return (
            <TodoListWrapper>
                <TodoListFlexContainer>
                    <Header/>
                    <TaskArea taskList={this.state.tasks} deleteTaskCallback={this.deleteTask}/>
                    <SubmissionForm addTaskCallback={this.addTask}/>
                </TodoListFlexContainer>
            </TodoListWrapper>
        );
    }
}

export default TodoList;

