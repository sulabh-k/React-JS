import React from 'react';



class profile extends React.Component{
    render(){
        return(

<div className="container">
        <div className="row">
            <div className="col-md-8">
                <div className="card">
                    <form className="box userprofile">
                        <h1>User Profile (Sulabh)</h1>
						<div className="col-md-12">
							<div className="col-md-6 flexleft"> 
								Name : 
							</div>
							<div className="col-md-6 flexleft pvalue">
								Sulabh Kumar
							</div>
						</div>

						

						<div className="col-md-12">
							<div className="col-md-6 flexleft"> 
							Phone :
							</div>
							<div className="col-md-6 flexleft pvalue">
							9557903947
							</div>
						</div>

						<div className="col-md-12">
							<div className="col-md-6 flexleft"> 
							Email:
							</div>
							<div className="col-md-6 flexleft pvalue">
							
                            sulabh.dhampur@gmail.com
							</div>
						</div>

						<div className="col-md-12">
                        <div className="col-md-6 flexleft"> 
							
						Address: 
                        </div>
                        <div className="col-md-6 flexleft pvalue"> 
                        Vill and Post Morna, Bijnor, UP , 246761
						</div>
                        </div>

						<div className="col-md-12">
							<div className="col-md-6 flexleft"> 
							Gender:
							</div>
							<div className="col-md-6 flexleft pvalue">
							
                            Male
							</div>
						</div>
                        <div className="col-md-12">
							<div className="col-md-6 flexleft"> 
							Age:
							</div>
							<div className="col-md-6 flexleft pvalue">
							
                            22
							</div>
						</div>

						<div className="col-md-12">
							<div className="col-md-6 flexleft"> 
							Profile Image:
							</div>
							<div className="col-md-6 flexleft pvalue">
							
                            <img src={process.env.PUBLIC_URL + '/logo192.png'} />
							</div>
						</div>
                        <div className="col-md-12">
						<a href="edit-profile">EDIT PROFILE</a>
						</div>
				</form>
			</div>
		</div>
		</div>	
	</div>
	


        )
    }
}
export default profile;