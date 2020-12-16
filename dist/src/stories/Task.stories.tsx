import React from 'react';
import Task from '../components/Task';
import { Provider } from "react-redux";
import { store } from "../store/taskSlice";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
  component: Task,
  title: 'Task',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta;

const Template = (args:any) => <Task {...args} />;

const task= {
    id: "1",
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  };

export const Default = ()=>{
    return(
        <Task task={task} />
    ); 
};



export const Pinned = ()=>{
    return(
        <Task task={{...task,state:"TASK_PINNED"}} />
    );
};


export const Archived = ()=>{
    return (
        <Task task={{...task,state:'TASK_ARCHIVED'}} />
    );
};
