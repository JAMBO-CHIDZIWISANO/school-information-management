import React from 'react'
import {
        Create,
        SimpleForm,
        TextInput,
        DateInput,
        NullableBooleanInput,
} from 'react-admin'

const addTeacher = (props) => {
  return (
            <Create title="Create a Post" {...props} syncWithLocation={true}
        
            >
                <SimpleForm >
               <TextInput source="teacherId" />
               <TextInput source="firstname"/>
               <TextInput source="middlename"/>
               <TextInput source="lastname"/>
               <NullableBooleanInput source="gender" trueLabel='Male' falseLabel='Female'/>
               <TextInput source="qualification"/>
               <DateInput source="joinDate"/>
               
               </SimpleForm>
           </Create>
  );
}


export default addTeacher
