




    import TextContext from "../Context/TaskContext";
    import { formateDate } from "../utils/DateUtil";
    import { useContext, useState } from "react";
    const Task = ({ task: indi }) => {
      const { title, description, createdDate, taskId } = indi;
      const { deleteTask, Editing } = useContext(TextContext);
      const [isEditing, setisEditing] = useState(false);
      const [task, settask] = useState({ title: "", description: "", taskId });
    
      // const { Editing } = useContext(TextContext);
    
    
      let handleInputChange = ((e) => {
        settask({
          ...task,
          [e.target.name]: e.target.value,
        });
      });
    
      if (isEditing) {
        return (
          <div className="card">
            <div className="content">
              <div className="ui form">
                <div className="field">
                  <input type="text"
                    placeholder="Title"
                    name="title"
                    spellCheck={false}
                    data-ms-editor={true}
                    onChange={handleInputChange}
                    value={task.title} />
    
                </div>
    
                <div className="meta">
                  {formateDate(createdDate)}
                </div>
    
    
                <textarea rows="2"
                  placeholder="description"
                  name="description"
                  spellCheck={false}
                  data-ms-editor={true}
                  onChange={handleInputChange}
                  value={task.description} />
    
              </div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic green button" onClick={() => { Editing(task); setisEditing(false) }}>Save</div>
                <div className="ui basic red button"
                  onClick={() => setisEditing(false)}>
                  Cancle</div>
              </div>
            </div>
          </div>
        );
      }
      else {
        return (
          <div className="card">
            <div className="content">
              <div className="header">
                {title}
              </div>
              <div className="meta">
                {formateDate(createdDate)}
              </div>
              <div className="description">
                {description}
              </div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic green button" onClick={() => setisEditing(true)}>Edit</div>
                <div className="ui basic red button"
                  onClick={() => deleteTask(taskId)}>
                  Delete</div>
              </div>
            </div>
          </div>
        );
      }
    };
    export default Task;