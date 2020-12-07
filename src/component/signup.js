import React from 'react';


class signup extends React.Component{
    render(){
        return(

<div className="container">
        <div className="row">
            <div className="col-md-8">
                <div className="card">
                    <form className="box signup">
                        <h1>Sign Up</h1>
						<div className="col-md-12">
							<div className="col-md-6 flexleft"> 
								<input className="text" type="text" name="name" placeholder="Name" required/>
							</div>
							<div className="col-md-6 flexleft">
								<input className="text email" type="email" name="email" placeholder="Email" required/>
							</div>
						</div>

						<div className="col-md-12">
							<div className="col-md-6 flexleft"> 
								<input className="text" type="password" name="password" placeholder="Password" required/>
							</div>
							<div className="col-md-6 flexleft">
							<input className="text w3lpass" type="password" name="password" placeholder="Confirm Password" required/>
							</div>
						</div>

						<div className="col-md-12">
							<div className="col-md-6 flexleft"> 
							<input className="text" type="number" name="phone" placeholder="Phone" required/>
							</div>
							<div className="col-md-6 flexleft">
							<input className="text" type="number" name="age" placeholder="Age" min="0" max="200" required/>
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
						<textarea name="address" placeholder="Address" required ></textarea>
						</div>

						<div className="col-md-12">
							<div className="col-md-6 flexleft"> 
							<p>Upload Image</p>
							</div>
							<div className="col-md-6 flexleft">
							
					<input type="file" name="image"></input>
							</div>
						</div>

						<div className="col-md-12">
						<div className="wthree-text">
						<label className="anim">
							<input type="checkbox" className="checkbox" required/>
							<span>I Agree To The Terms & Conditions</span>
						</label>
						<div className="clear"> </div>
					</div>
						</div>

						<div className="col-md-12">
						<input type="submit" value="SIGNUP"/>
						</div>
					
					
				<p>Already have an Account? <a href="sign-in"> Login Now!</a></p>
				</form>
			</div>
		</div>
		</div>	
	</div>
	


        )
    }
}
export default signup;