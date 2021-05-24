import React from 'react'

const Student_reg =() =>{
    return(
        <div className="ui container center aligned">
                <h1>Student Registration</h1>
                <br/><br/><br/>
        <form class="ui form">
            <div class="field">
                <label>First Name</label>
                <input type="text" name="firstname" id="firstname" placeholder="First Name" />
            </div>
            <div class="field">
                <label>Middle Name</label>
                <input type="text" name="middlename" id="middlename" placeholder="Middle Name" />
            </div>
            <div class="field">
                <label>Last Name</label>
                <input type="text" name="lastname" id="lastname" placeholder="Last Name" />
            </div>
        </form>
        </div>
        
    )
}
export default Student_reg;