import React from 'react';

class editprofile extends React.Component{
    render(){
        return(

<div className="container">
        <div className="row">
            <div className="col-md-8">
                <div className="card">
                    <form className="box signup">
                        <h1>EDIT PROFILE</h1>
						<div className="col-md-12">
							<div className="col-md-6 flexleft"> 
								<input className="text" type="text" name="name" value="Sulabh Kumar" placeholder="Name" required/>
							</div>
							<div className="col-md-6 flexleft">
								<input className="text email" type="email" value="sulabh.dhampur@gmail.com" name="email" placeholder="Email" required/>
							</div>
						</div>


						<div className="col-md-12">
							<div className="col-md-6 flexleft"> 
							<input className="text" type="number" name="phone" value="9557903947" placeholder="Phone" required/>
							</div>
							<div className="col-md-6 flexleft">
							<input className="text" type="number" name="age" placeholder="Age" value="22" min="0" max="200" required/>
							</div>
						</div>

						<div className="col-md-12">
							<div className="col-md-6 flexleft"> 
							<label>Male </label>
					<input className="text" type="radio" name="gender" value="Male" defaultChecked />
							</div>
							<div className="col-md-6 flexleft">
							
					<label>Female </label>
					<input className="text" type="radio" name="gender" value="Female" />
							</div>
						</div>

						<div className="col-md-12">
						<textarea name="address" placeholder="Address" value="Vill and Post Morna, Bijnor, UP , 246761" required ></textarea>
						</div>

						<div className="col-md-12">
							<div className="col-md-6 flexleft"> 
							<p> Image</p>
							</div>
							<div className="col-md-6 flexleft">

							
                            <img src={process.env.PUBLIC_URL + '/logo192.png'} />
					<input type="file" name="image"></input>

							</div>
						</div>

						<div className="col-md-12">
						<input type="submit" value="Save Profile"/>
						</div>

				</form>
			</div>
		</div>
		</div>	
	</div>
	


        )
    }
}
export default editprofile;