import React from 'react';
import { TaskInterface } from '../components/Task';
import TaskList from '../components/TaskList';
import * as TaskStories from './Task.stories';
import { Provider } from "react-redux";
import { store } from "../store/taskSlice";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
    component: TaskList,
    title: "Task List",
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta;


const tasks:TaskInterface[]=[  { ...TaskStories.Default.arguments.task, id: '1', title: 'Task 1' },
{ ...TaskStories.Default.arguments.task, id: '2', title: 'Task 2' },
{ ...TaskStories.Default.arguments.task, id: '3', title: 'Task 3' },
{ ...TaskStories.Default.arguments.task, id: '4', title: 'Task 4' },
{ ...TaskStories.Default.arguments.task, id: '5', title: 'Task 5' },
{ ...TaskStories.Default.arguments.task, id: '6', title: 'Task 6' },
]

export function Default(){
    return(<TaskList tasks={tasks} loading={false}/>);
}


export const WithPinnedTasks = ()=>{
    return(
        <TaskList tasks={[...Default.arguments.tasks.slice(0,5),
            { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
        ]} loading={false}/>
    )
}


export const Loading = ()=>{
    return(
        <TaskList tasks={[]} loading={true} />
    )
}

export const Empty = ()=>{
    return(
        <TaskList tasks={[]} loading={false} />
    )
};
