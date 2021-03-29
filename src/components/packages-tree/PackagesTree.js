
import './PackagesTree.css';
import { useState } from 'react';

const PackagesTree = ({node, name, version}) => {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(!show);
  }
  return (
    <div className={`packages-tree ${node.dependencies ? 'has-children' : ''}`}>
      <div>
        {name}:{version}
        {
          node.dependencies && (<button onClick={toggleShow}>
            {show ? 'Hide': 'Show'}
          </button>)
        }
      </div>
      {
        show && node.dependencies && Object.keys(node.dependencies).map(key => (
          <PackagesTree
            name={key}  
            version={node.dependencies[key].version ? node.dependencies[key].version : node.dependencies[key]}
            node={node.dependencies[key]}
          >
          </PackagesTree  >
        ))
      }
    </div> 
  );
}

export default PackagesTree;
