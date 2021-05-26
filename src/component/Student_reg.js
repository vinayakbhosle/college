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
            <div class="field">
                <label>Email</label>
                <input type="text" name="email" id="email" placeholder="Email" />
            </div>
            <div class="field">
                <label>Phone Number</label>
                <input type="text" name="phoneno" id="phoneno" placeholder="Phone Number" />
            </div>
        </form>
        </div>
        
    )
}
export default Student_reg;