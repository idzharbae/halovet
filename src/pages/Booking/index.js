import React from 'react';
import './Booking.css';

function Booking(){
    return(
  <div>
  <div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<div class="booking-cta">
							<h1>Booking disini</h1>
							<p>Booking dokter hewan terbaik di wilayah anda</p>
						</div>
					</div>
					<div class="col-md-7 col-md-offset-1">
						<div class="booking-form">
							<form>
								<div class="form-group">
									<div class="form-checkbox">
										<label for="roundtrip">
											<input type="radio" id="roundtrip" name="flight-type"></input>
											<span></span>Roundtrip
										</label>
										<label for="one-way">
											<input type="radio" id="one-way" name="flight-type"></input>
											<span></span>One way
										</label>
										<label for="multi-city">
											<input type="radio" id="multi-city" name="flight-type"></input>
											<span></span>Multi-City
										</label>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<span class="form-label">Flying from</span>
											<input class="form-control" type="text" placeholder="City or airport"></input>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<span class="form-label">Flyning to</span>
											<input class="form-control" type="text" placeholder="City or airport"></input>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<span class="form-label">Departing</span>
											<input class="form-control" type="date" required></input>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<span class="form-label">Returning</span>
											<input class="form-control" type="date" required></input>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-4">
										<div class="form-group">
											<span class="form-label">Adults (18+)</span>
											<select class="form-control">
												<option>1</option>
												<option>2</option>
												<option>3</option>
											</select>
											<span class="select-arrow"></span>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<span class="form-label">Children (0-17)</span>
											<select class="form-control">
												<option>0</option>
												<option>1</option>
												<option>2</option>
											</select>
											<span class="select-arrow"></span>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<span class="form-label">Travel class</span>
											<select class="form-control">
												<option>Economy class</option>
												<option>Business class</option>
												<option>First class</option>
											</select>
											<span class="select-arrow"></span>
										</div>
									</div>
								</div>
							
									
								<div class="form-btn">
									<button class="submit-btn">Show flights</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> 
  </div>
    );
}

export default Booking;