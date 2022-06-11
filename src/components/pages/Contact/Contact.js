import React from "react";

function Contact() {
    return (
        <div className="text-dark">
            <p className="bg-white p-1">
            <div className="container">
                <div id="content">
                    <p></p>
                    <h1><center>Contact Us</center></h1>
                    <p className="text-secondary"><center>Want to get in touch?We'd love to hear from you.Here's how you can reach us...</center></p>
                    <div class="entry">
                        <div className="row">
                            <div className="col-6 p-2">
                                <div className="card shadow">
                                    <div class="p-3 mb-2 bg-light text-dark">
                                        <div className="card-body">
                                            <table border="0" cellSpacing="8" cellPadding="8" width="50%">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h3>Genral Enquiry</h3>
                                                            <table border="0" cellSpacing="4" cellPadding="4" width="600px">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="1000" valign="top">
                                                                            <i className="fas fa-school"></i>
                                                                            <strong>&nbsp;Address </strong>
                                                                        </td>                                                                       
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Sudarshana Maha Vidyalaya, Udabadalawa, Kurunagala, Sri lanka</td>
                                                                    </tr>
                                                                    <p></p>
                                                                    <tr>
                                                                        <td width="50" valign="top">
                                                                            <i className="fas fa-phone"></i>
                                                                            <strong>&nbsp;Telephone(General) </strong>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>(+94) 037-2237150 / (+94) 075-6175795</td>
                                                                    </tr>
                                                                    <p></p>
                                                                    <tr>
                                                                        <td width="50" valign="top">
                                                                            <i class="fas fa-envelope"></i>
                                                                            <strong>&nbsp;E-mail </strong>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>info@sudarshanamv.lk, principal@sudarshanamv.lk</td>
                                                                    </tr>
                                                                    <p></p>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p></p>
                                            <div class="map-responsive px-1">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8142.808052399231!2d80.32992892833444!3d7.52040376412379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3308de8012977%3A0x617485e80af49746!2sSudarshana%20Maha%20Vidyalaya!5e0!3m2!1sen!2slk!4v1654807660397!5m2!1sen!2slk" width="575" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </div>
                                            <p></p>
                                            <hr></hr>
                                            <h5>Follow Us On:</h5>
                                            <table border="0" cellSpacing="8" cellPadding="8" width="50px">
                                                <tr>
                                                    <td align="left">
                                                        <a href="https://www.facebook.com/Ku-Udabadalawa-Sudarshana-Maha-Vidyalaya-545956182166562/" role="button"><i class="fab fa-facebook-f fa-lg"></i></a>
                                                    </td>
                                                    <td>
                                                        <a href="#" role="button"><i class="fab fa-linkedin-in fa-lg"></i></a>
                                                    </td>
                                                    <td>
                                                        <a href="#" role="button"><i class="fab fa-twitter fa-lg"></i></a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 p-2">   
                                <div className="card shadow">
                                    <div class="p-3 mb-2 bg-light text-dark">
                                        <div className="card-body">     
                                            <table border="0" cellSpacing="8" cellPadding="8" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td align="left">
                                                            <h3>Drop us a line</h3>
                                                            <p></p>
                                                            <form>
                                                                <div className="form-group">
                                                                    <label for="name">Name(required):</label><br></br>
                                                                    <input type="text" className="form-control" id="inputname" placeholder="Enter Your Name"></input><br></br>
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <label for="email">E-mail(required):</label><br></br>
                                                                            <input type="email" className="form-control" id="inputemail" placeholder="name@gmail.com"></input><br></br>
                                                                        </div>
                                                                        <div className="col">
                                                                            <label for="number">Contact No(required):</label><br></br>
                                                                            <input type="text" className="form-control" id="inputnumber" placeholder="Enter Your Contact No"></input><br></br>
                                                                        </div>
                                                                    </div>    
                                                                    <label for="subject">Subject:</label><br></br>
                                                                    <input type="text" className="form-control" id="inputsubject" placeholder="Subject of Your Message" ></input><br></br>
                                                                    <label>Message:<br></br>
                                                                        <textarea name="message" className="form-control" cols="100" rows="5" placeholder="Enter Your Message..."></textarea>
                                                                    </label><br></br>
                                                                    <button type="button" class="btn btn-outline-success">Send</button>
                                                                </div>
                                                            </form>
                                                        </td>
                                                    </tr>
                                                </tbody> 
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
        </p>
    </div>    
    )
}

export default Contact;