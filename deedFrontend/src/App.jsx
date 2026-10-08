import React from 'react'

function App() {
  return (
    <div>
      <div>
        <h1>Deed information</h1>
        <div>
          <label>
            Deed Id :
          </label>
          <input type='text' placeholder='Enter Deed Id' name='deedId' value={deeds.deedId} onChange={handleChange} />
        </div>
        <div>
          <label>
            Owner Name :
          </label>
          <input type='text' placeholder='Enter Owner Name' name='ownerName' value={deeds.ownerName} onChange={handleChange} />
        </div>

      </div>

      <div>

      </div>
    </div>
  )
}

export default App
