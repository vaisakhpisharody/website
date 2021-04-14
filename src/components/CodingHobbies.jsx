import "../styles/CodingHobbies.css";
import { Content } from "./Content";

export const CodingHobbies = () => {
    return (
        <div className="coding-hobbies">
            <div className="coding-hobbies__header">
                Some common coding practices/hobbies I like to do
            </div>

            <div className="coding-hobbies__content">
                <Content header="App Development" content="Content">
                    <div>
                        Develop custom web applications for users to perform actions in a more interactive manner
                    </div>
                </Content>

                <Content header="Workflow Automation">
                    <div>
                        Automating workflows to reduce the manual effort put into maintenance of these systems and thus reducing errors and improving efficiency
                    </div>
                </Content>

                <Content header="Code review">
                    <div>
                        Performing code reviews of projects to learn and supervise the codebase in order to improve the coding standards and production stability
                    </div>
                </Content>
            </div>
        </div>
    )
}