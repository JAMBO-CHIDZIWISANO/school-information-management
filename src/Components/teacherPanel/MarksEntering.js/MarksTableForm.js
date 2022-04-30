import React from 'react'

const MarksTableForm = () => {

    //one state of input fields with name and age properties.
    const [inputFields, setInputFields] = useState([ {name: '', age: ''} ])


  return (
    <div>

      <div className="">
      <form>
        {/* mapping input fields */}
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name='name'
                placeholder='Name'
                value={input.name}
              />
              <input
                name='age'
                placeholder='Age'
                value={input.age}
              />
            </div>
          )
        })}
      </form>
    </div>

    </div>
  )
}

export default MarksTableForm
