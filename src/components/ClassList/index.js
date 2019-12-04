import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import api from '../../services/api';

import { Container, Listing, Teacher, ClassNumber, Descriptor, Add } from './styles';
import DashboardCard from '../DashboardCard';
import ClassForm from '../ClassForm';

export default function ClassList(props) {

  props.displayGrid(false);

  const data = {
    teacher: 'Como sonegar impostos sem ser pego?',
    descriptor: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    subject: "3a",
    number: 3
  };

  const [classes, setClasses] = useState([]);
  const [type, setType] = useState('');

  useEffect(() => {
    const _id = localStorage.getItem('user');

    async function getType(){
      const res = await api.get('/user', 
      { headers: { _id }
    });
      setType(res.data);
    }
    getType();

  }, []);

  useEffect(() => {
    async function loadClasses() {
      const _id = localStorage.getItem('user');
      const res = await api.get('/classes', {
        headers: { _id }
      });
      setClasses(res.data);
    }

    loadClasses();
  }, []);

  function gotoClass(i) {
    const id = classes[i]._id;
    props.history.push(`/dashboard/class/${id}`);
  }

  const [overlay, setOverlay] = useState(false);

  return (
    <DashboardCard 
      title={
        <>
        <p>Turmas</p>
        {type==='Professor' ? <Add onClick={() => setOverlay(!overlay)}><MdAdd size="15"/></Add> : <></>}
        </>
      }
      gridArea={props.gridArea}
      >
        <ClassForm display={overlay} undo={setOverlay} data={data}/>
        <Listing>
          {classes.map( (_class, i) => <Container key={i} onClick={() => gotoClass(i)}>
            <Teacher>
              <h1>
                {_class.teacher}
              </h1>
            </Teacher>

            <ClassNumber>
              {_class.number}
            </ClassNumber>

            <Descriptor>
              <p>
                {_class.descriptor}
              </p>
            </Descriptor>
                
          </Container>   
          )}
          
        </Listing>
      </DashboardCard>
  );
}
