import { MainContainer, StyledTaskedContainer } from "./taskContainer.elements";

const TaskContainer = ({ tasksArr,onDelete,clickTask }) => {
    return (
        <MainContainer>
                {tasksArr.map((task) => (
                    <StyledTaskedContainer primary={task.active} key={task.id} onDoubleClick={()=>{clickTask(task.id)}}>
                        <h2>{task.task}</h2>
                        <p>{task.message}</p>
                        <button type="button" onClick={() => {
                            onDelete(task.id)
                        }}>press me</button>
                    </StyledTaskedContainer>
                ))}
        </MainContainer>
    );
};

export default TaskContainer;
