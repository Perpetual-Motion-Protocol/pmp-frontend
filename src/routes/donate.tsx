import ProjectView from "../components/ProjectView"
import { useParams } from 'react-router-dom';

function Donate() {
  let { projectAddress } = useParams();

  return (
    <div>
    {projectAddress && <ProjectView projectAddress={projectAddress} />}
    </div>
  )
}

export default Donate