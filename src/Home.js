import React from 'react';

function Home() {
    return (
        <>
            <section id='navbar'>
                <div className='container-flex'>
                    <div className='row'>
                        <div className='col-md-5' style={{ marginTop: '300px' }}>
                            <h1 style={{ color: 'black', paddingLeft: '130px', paddingRight: '70px' }}>
                                Lorem ipsum dolor <br /> sit amet
                            </h1>

                            <p style={{ color: 'black', paddingLeft: '130px' }}>
                                Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
                            </p>

                            {/* Form with input and button */}
                            <form style={{ paddingLeft: '130px', display: 'flex', gap: '10px' }}>
                                <input type='text' id='' style={{ width: '300px' }} />
                                <button>Submit</button>
                            </form>

                            {/* Circle with check mark and text */}
                            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '130px', marginTop: '10px' }}>
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    backgroundColor: 'rgba(25, 89, 172, 1)', // हल्का नीला रंग
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    color: 'white', // ✔ आइकन का रंग
                                    fontWeight: 'bold',
                                    marginRight: '10px'
                                }}>
                                    ✔
                                </div>
                                <p style={{ margin: 0 }}>No credit card required!!</p>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className='col-md-7'>
                            <img style={{ width: '912px', height: '700px' }} src='/sport.jpg' alt='sportsbike' />
                        </div>
                    </div>
                </div>
            </section>
            <section id='bike'>
                <div className='conatiner-fluid'>
                    <div className='row'>
                        <div className='col-md-9'>
                            <p style={{ color: 'rgba(5, 70, 210, 1)' }}> Lorem ipsum dolor sit</p>
                            <h2> Lorem ipsum  <br />dolor sit amet</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis  <br />donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in <br /> nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.</p>



                            {/* Image on the left */}
                            <div style={{ display: 'flex', alignItems: 'center', width: '30rem', padding: '10px' }}>
                                {/* Image on the left */}
                                <img src="/Bike1.png" alt="Bike Image"
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        objectFit: 'cover',
                                        marginRight: '15px',
                                        borderRadius: '10px'
                                    }} />

                                {/* Text on the right */}
                                <p style={{ fontSize: '18px', fontWeight: '400', margin: 0 }}>
                                    Lorem ipsum dolor sit amet consectetur.<br /> Vestibulum ornare fermentum feugiat.    </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', width: '30rem', padding: '10px' }}>
                                {/* Image on the left */}
                                <img src="/hands.png" alt="Bike Image"
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        objectFit: 'cover',
                                        marginRight: '15px',
                                        borderRadius: '10px'
                                    }} />

                                {/* Text on the right */}
                                <p style={{ fontSize: '18px', fontWeight: '400', margin: 0 }}>
                                    Lorem ipsum dolor sit amet consectetur.<br /> Vestibulum ornare fermentum feugiat.    </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', width: '30rem', padding: '10px' }}>
                                {/* Image on the left */}
                                <img src="/Frinds.png" alt="Bike Image"
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        objectFit: 'cover',
                                        marginRight: '15px',
                                        borderRadius: '10px'
                                    }} />

                                {/* Text on the right */}
                                <p style={{ fontSize: '18px', fontWeight: '400', margin: 0 }}>
                                    Lorem ipsum dolor sit amet consectetur.<br /> Vestibulum ornare fermentum feugiat.    </p>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <img
                                src="/bike.png"
                                alt="rider bike"
                                style={{
                                    width: "700px",
                                    height: "600px",
                                    marginTop: "20px", // Moves the image down
                                    marginLeft: "-450px", // Moves the image to the left
                                }}
                            />
                        </div>
                        <p style={{
                            backgroundColor: 'rgba(25, 89, 172, 1)', // Background color
                            color: 'rgba(255, 255, 255, 1)', // Text color
                            padding: '8px 16px', // Adds spacing inside the box
                            display: 'flex', // Makes it a flex container
                            alignItems: 'center', // Aligns items vertically
                            gap: '12px', // Adds space between icons and text
                            width: 'fit-content', // Ensures it only takes the necessary space
                            borderRadius: '5px' // Rounded corners
                        }}>
                            Lorem Ipsum
                            <i className="bi bi-arrow-right"></i>

                        </p>
                        <p style={{
                            color: 'rgba(4, 56, 152, 1)',
                            padding: '8px 16px', // Adds spacing inside the box
                            display: 'flex', // Makes it a flex container
                            alignItems: 'center', // Aligns items vertically
                            gap: '12px', // Adds space between icons and text
                            width: 'fit-content', // Ensures it only takes the necessary space
                            borderRadius: '5px' // Rounded corners
                        }}>

                            <i className="bi bi-telephone-inbound-fill"></i>
                            123456789
                        </p>




                    </div>

                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '-495px',  // Move it further down by adjusting this
                    left: '0',
                    right: '0',
                    marginLeft: '90px',
                    height: '15px',
                    background: 'linear-gradient(to bottom, rgba(4, 56, 152, 1), rgba(7, 153, 2, 1), rgba(23, 0, 65, 1))',
                    zIndex: '-1'
                }}></div>


            </section>
            <section id='partner'>
                <div className='conatiner-fluid'>
                    <div className='row'>
                        <div className='col-md-9'>
                            <p style={{
                                color: 'rgba(5, 70, 210, 1)',
                                marginLeft: '100px',   // Moves the text to the right
                                marginTop: '40px'     // Moves the text down
                            }}>
                                Lorem ipsum dolor sit
                            </p>

                            <h2> Lorem ipsum dolor sit <br /> amet consectetur. Eu  <br />elit.</h2>
                            <p>  Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend <br />condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec <br />pharetra erat lacus suspendisse ornare</p>
                            {/* Image on the left */}

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '30rem',
                                padding: '10px',
                                marginLeft: '80px'  /* Moves the entire block to the right */
                            }}>
                                {/* Image on the left */}
                                <img
                                    src="/kite.jpeg"
                                    alt="Bike Image"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        objectFit: 'cover',
                                        marginRight: '15px',
                                        borderRadius: '10px',
                                        marginTop: '-90px'  // Adjust this value to move the image up
                                    }}
                                />

                                {/* Text on the right */}

                                <p style={{
                                    fontSize: '18px',
                                    fontWeight: '400',
                                    margin: 0,
                                    width: '100%',  /* Ensure the text takes up the full width */
                                }}>
                                    <strong style={{ whiteSpace: 'nowrap' }}>
                                        Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas
                                    </strong>
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur Eros egestas et arcu eu non
                                    viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                                    vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                                </p>

                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '30rem',
                                padding: '10px',
                                marginLeft: '80px'  /* Moves the entire block to the right */
                            }}>
                                {/* Image on the left */}
                                <img
                                    src="/kite.jpeg"
                                    alt="Bike Image"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        objectFit: 'cover',
                                        marginRight: '15px',
                                        borderRadius: '10px',
                                        marginTop: '-90px'  // Adjust this value to move the image up
                                    }}
                                />

                                {/* Text on the right */}

                                <p style={{
                                    fontSize: '18px',
                                    fontWeight: '400',
                                    margin: 0,
                                    width: '100%',  /* Ensure the text takes up the full width */
                                }}>
                                    <strong style={{ whiteSpace: 'nowrap' }}>
                                        Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas
                                    </strong>
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur Eros egestas et arcu eu non
                                    viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                                    vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                                </p>

                            </div> <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '30rem',
                                padding: '10px',
                                marginLeft: '80px'  /* Moves the entire block to the right */
                            }}>
                                {/* Image on the left */}
                                <img
                                    src="/kite.jpeg"
                                    alt="Bike Image"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        objectFit: 'cover',
                                        marginRight: '15px',
                                        borderRadius: '10px',
                                        marginTop: '-90px'  // Adjust this value to move the image up
                                    }}
                                />

                                {/* Text on the right */}

                                <p style={{
                                    fontSize: '18px',
                                    fontWeight: '400',
                                    margin: 0,
                                    width: '100%',  /* Ensure the text takes up the full width */
                                }}>
                                    <strong style={{ whiteSpace: 'nowrap' }}>
                                        Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas
                                    </strong>
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur Eros egestas et arcu eu non
                                    viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                                    vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                                </p>

                            </div>

                        </div>
                        <div className="col-md-3">
                            <img
                                src="2brother.png"
                                alt="rider bike"
                                style={{
                                    width: "600px",
                                    height: "550px",
                                    marginTop: "100px", // Moves the image down
                                    marginLeft: "-300px", // Moves the image to the left
                                }}
                            />
                        </div>


                    </div>

                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '-1280px',  // Move it further down by increasing this value
                    left: '0',
                    right: '0',
                    marginLeft: '90px',
                    height: '15px',
                    background: 'linear-gradient(to bottom, rgba(4, 56, 152, 1), rgba(7, 153, 2, 1), rgba(23, 0, 65, 1))',
                    zIndex: '-1'
                }}></div>

            </section>
            <section id='mid' style={{ marginTop: '150px' }}>
                <div className='conatiner'>
                    <div className='row'>
                        <div className='col-md-12'>

                            <h3 id='logo'> LOGO</h3>

                            <h1> Lorem ipsum dolor sit amet consectetur. Quis <br />adipiscing purus egestas aliquam viverra mi.</h1>
                            <br />
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum  <br />nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id <br /> luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam  <br />condimentum nulla quam</p>

                            <br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum <br />ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra <br /> quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt <br /> morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
                                Loerum Ipsum
                            </p>


                        </div>

                    </div>
                </div>
            </section>
            <section id="company">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" >


                            <h3> Lorem ipsum dolor sit amet
                                <br /> consectetur. Commodo leo amet.</h3>

                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "120px",
                                width: "949px",
                                height: "97px",
                                marginTop: '50px',
                                paddingBottom: '30px',
                                marginLeft: "180.5px"
                            }}>
                                <img src="/Hero.png" alt="Hero Image" style={{ width: "4rem" }} />
                                <img src="/Honda.png" alt="Honda Image" style={{ width: "4rem" }} />
                                <img src="/Bajaj.png" alt="Bajaj Image" style={{ width: "5rem" }} />
                                <img src="/TVS.png" alt="TVS Image" style={{ width: "5rem" }} />
                            </div>

                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "120px",
                                width: "949px",
                                height: "97px",
                                marginLeft: "180.5px"
                            }}>
                                <img src="/Royal.png" alt="Hero Image" style={{ width: "8rem" }} />
                                <img src="/Yamaha.png" alt="Honda Image" style={{ width: "6rem" }} />
                                <img src="/KTM.png" alt="Bajaj Image" style={{ width: "5rem" }} />
                                <img src="/Ather.jpeg" alt="TVS Image" style={{ width: "5rem" }} />
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "120px",
                                width: "949px",
                                height: "97px",
                                marginLeft: "180.5px",
                                marginBottom: '30px'
                            }}>
                                <img src="/OLA.png" alt="Hero Image" style={{ width: "10rem" }} />
                                <img src="/Revolt.png" alt="Honda Image" style={{ width: "6rem" }} />
                                <img src="/ULTOAVIOLETTE.jpeg" alt="Bajaj Image" style={{ width: "6rem" }} />
                                <img src="/TORK.jpeg" alt="TVS Image" style={{ width: "6rem" }} />
                            </div>










                        </div>
                    </div>
                </div>
            </section>
            <section id='card'>
                <div className='conatiner'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <span> Lorem ipsum dolor sit amet </span>
                            <h4> LOREM IPSUM dolor sit</h4>
                            <h6> Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi <br />porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis <br /> aliquet. Hendrerit tellus at purus lectus.</h6>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',  // Center the cards horizontally
                                gap: '40px', // Increased the gap between the cards
                                marginTop: '20px' // Optional: You can add margin top if needed
                            }}>
                                <div className="card" style={{
                                    width: '30rem',
                                    borderRadius: '30px',
                                    overflow: 'hidden'
                                }}>
                                    <img src="/Hawamahal.png" className="card-img-top" alt="..." style={{ height: '300px' }} />
                                    <div className="card-body" style={{ paddingLeft: '0' }}>
                                        <h5 className="card-title" style={{ marginLeft: '0' }}>Lorem ipsum dolor sit amet consectetur.</h5>
                                        <p className="card-text" style={{ color: 'rgb(0, 0, 0, 1)', }}>
                                            Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.
                                        </p>
                                        <a href="#">Learn More</a>
                                    </div>
                                </div>

                                <div className="card" style={{
                                    width: '30rem',
                                    borderRadius: '30px', // Added border radius to the card
                                    overflow: 'hidden' // Ensures the border radius works properly with the content
                                }}>
                                    <img src="/Budh.png" className="card-img-top" alt="..." style={{ height: '300px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Lorem ipsum dolor sit amet consectetur.</h5>
                                        <p className="card-text" style={{ color: 'rgb(0, 0, 0, 1)', }}>
                                            Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.
                                        </p>
                                        <a href="#">Learn More</a>
                                    </div>
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',  // Center the cards horizontally
                                gap: '40px', // Increased the gap between the cards
                                marginTop: '30px' // Decreased margin top to shift the row up a bit
                            }}>

                                <div className="card" style={{
                                    width: '30rem',
                                    borderRadius: '30px', // Added border radius to the card
                                    overflow: 'hidden' // Ensures the border radius works properly with the content
                                }}>
                                    <img src="/Pari.png" className="card-img-top" alt="..." style={{ height: '300px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Lorem ipsum dolor sit amet consectetur.</h5>
                                        <p className="card-text" style={{ color: 'rgb(0, 0, 0, 1)', }}>
                                            Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.
                                        </p>
                                        <a href="#">Learn More</a>
                                    </div>
                                </div>

                                <div className="card" style={{
                                    width: '30rem',
                                    borderRadius: '30px', // Added border radius to the card
                                    overflow: 'hidden' // Ensures the border radius works properly with the content
                                }}>
                                    <img src="/Orange.png" className="card-img-top" alt="..." style={{ height: '300px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Lorem ipsum dolor sit amet consectetur.</h5>
                                        <p className="card-text" style={{ color: 'rgb(0, 0, 0, 1)', }}>
                                            Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.
                                        </p>
                                        <a href="#">Learn More</a>
                                    </div>
                                </div>
                            </div>








                        </div>

                    </div>

                </div>

            </section>
            <section id='hacker'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3 id='logo'> LOGO</h3>


                            <p>
                                Dolor Sit amet consectetur. Quis <br />
                                adipiscing purus egestas aliquam viverra <br /> mi. dolor sit amet consectetur. Quis <br /> adipiscing
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <section id='form'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-10' style={{ marginTop: '50px' }}>
                            <h3> REQUEST A QUOTE</h3>
                            <form>
                                <div className="mb-3 row">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-control"
                                            style={{
                                                backgroundColor: 'rgba(244, 244, 244, 1)',  // Lighter gray background color
                                                color: 'white',  // Text color
                                                textAlign: 'center'  // Center align the text
                                            }}
                                        />
                                    </div>


                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">E-mail</label>
                                        <input type="email" id="email" className="form-control"
                                            style={{
                                                backgroundColor: 'rgba(244, 244, 244, 1)',  // Lighter gray background color
                                                color: 'white',  // Text color
                                                textAlign: 'center'  // Center align the text
                                            }}

                                        />
                                    </div>
                                </div>

                                <div className="mb-3 row">
                                    <div className="col-md-6">
                                        <label htmlFor="phone" className="form-label">Phone Number</label>
                                        <input type="text" id="phone" className="form-control" style={{
                                            backgroundColor: 'rgba(244, 244, 244, 1)',  // Lighter gray background color
                                            color: 'white',  // Text color
                                            textAlign: 'center'  // Center align the text
                                        }} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="timeframe" className="form-label">Time-Frame</label>
                                        <select id="timeframe" className="form-select" style={{
                                            backgroundColor: 'rgba(244, 244, 244, 1)',  // Lighter gray background color
                                            color: 'white',  // Text color
                                            textAlign: 'center'  // Center align the text
                                        }}>
                                            <option value="1week">1 Week</option>
                                            <option value="2weeks">2 Weeks</option>
                                            <option value="1month">1 Month</option>
                                            <option value="more">More than 1 Month</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-3 row">
                                    <div className="col-md-6">
                                        <label htmlFor="size" className="form-label">Size</label>
                                        <select id="size" className="form-select" style={{
                                            backgroundColor: 'rgba(244, 244, 244, 1)',  // Lighter gray background color
                                            color: 'white',  // Text color
                                            textAlign: 'center'  // Center align the text
                                        }}>
                                            <option value="small">Small</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                            <option value="custom">Custom</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="quantity" className="form-label">Quantity</label>
                                        <select id="quantity" className="form-select" style={{
                                            backgroundColor: 'rgba(244, 244, 244, 1)',  // Lighter gray background color
                                            color: 'white',  // Text color
                                            textAlign: 'center'  // Center align the text
                                        }}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="more">More</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="projectDescription" className="form-label">Please Describe Your Project*</label>
                                    <textarea
                                        style={{
                                            backgroundColor: 'rgba(244, 244, 244, 1)',  // Lighter gray background color
                                            color: 'white',  // Text color
                                            textAlign: 'left'  // Center align the text
                                        }}
                                        id="projectDescription"
                                        className="form-control"
                                        rows="6"
                                        placeholder="Choose a project type"
                                    ></textarea>

                                </div>

                            </form>
                            <p style={{ textAlign: 'center' }}>
                                By submitting this form you agree to our
                                <a href="/terms" style={{ textDecoration: 'underline', color: 'rgb(60, 60, 60)' }}>Terms of Service</a>
                                and
                                <a href="/privacy" style={{ textDecoration: 'underline', color: 'rgb(60, 60, 60)' }}>Privacy Policy</a>.
                            </p>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'center', // Center horizontally
                                alignItems: 'center', // Center vertically
                                height: '30px' // Ensures it takes the full viewport height
                            }}>
                                <button
                                    type="submit"
                                    className="btn"
                                    style={{
                                        backgroundColor: 'rgb(25, 89, 172)', // Custom button color
                                        color: 'white', // White text color
                                        display: 'flex', // Flexbox for centering the text
                                        justifyContent: 'center', // Center align text horizontally
                                        alignItems: 'center', // Center align text vertically
                                        width: '200px', // Adjust button width as needed
                                        height: '30px',
                                        padding: '10px 20px', // Optional padding for button
                                        marginTop: '60px'
                                    }}
                                >
                                    Lorem Ipsum
                                    <span style={{ marginLeft: '8px', fontSize: '18px' }}>→</span>
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section id='hello'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 mt-5'>

                            <span> Lorem Ipsum</span>
                            <h5> Lorem Ipsum Dolor <br /> Sit Amet</h5>
                            <p> Lorem ipsum dolor sit amet consectetur. Vulputate amet <br /> aliquet morbi suspendisse convallis. Urna a urna lectus donec  <br />felis risus duis pellentesque. Pellentesque ultricies ipsum.</p>

                            <div style={{ display: 'flex', gap: '20px', marginTop: '70px', marginBottom: '50px' }}>  {/* Adds space between the images */}
                                <img src="/Google.png" alt="Hero Image" style={{ width: "9rem" }} /> {/* Increased size */}
                                <img src="/Apple.png" alt="Hero Image" style={{ width: "9rem" }} /> {/* Increased size */}
                            </div>


                        </div>
                        <div className='col-md-6'>
                            <img src='/phonehand.png' style={{ width: '500px', position: 'relative', top: '-20px' }} />

                        </div>
                    </div>

                </div>

            </section>

            <section id='photo'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12' style={{
                            backgroundColor: 'rgba(241, 245, 249, 1)',
                            marginTop: '90px' // Adjust the value as needed
                        }}>
                            <span> NO LIMITS </span>
                            <h4>LOREM IPSUM DOLOR SIT <br /> AMET</h4>

                            <p> Lorem ipsum dolor sit amet consectetur. Nisl faucibus <br />vitae porttitor pharetra tempor quis arcu. Ipsum<br /> nullam.</p>

                            <button style={{
                                backgroundColor: 'rgba(25, 89, 171, 1)', // Button background color
                                color: 'rgb(255, 255, 255, 1)', // Text color
                                display: 'flex',
                                alignItems: 'center',
                                padding: '10px 40px',
                                paddingLeft: '70px',
                                borderRadius: '5px', // Optional for rounded corners
                                border: 'none', // Removes border
                                fontSize: '16px', // Optional, for text size
                                cursor: 'pointer', // Optional, changes cursor on hover
                                marginLeft: '50px', // Moves the button slightly to the right
                            }}>
                                Lorem Ipsum <i class="bi bi-arrow-right"></i>
                            </button>


                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-220px' }}>
                                <img src='/riderfrinds.png' style={{ width: '500px', height: '200px', marginRight: '60px' }} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
                                <img src='/sunset.png' style={{ width: '720px', height: '300px', marginRight: '60px', marginTop: '20px' }} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-500px' }}>
                                <img src='/Single.png' style={{ width: '180px', height: '180px', marginRight: '600px' }} />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-80px' }}>
                                <img src='/Smart.png' style={{ width: '250px', height: '300px', marginRight: '810px', marginTop: '20px' }} />
                            </div>
                            <div >
                                <img src='/Backrider.png' style={{ width: '450px', height: '180px', marginLeft: '338px', marginTop: '20px' }} />
                            </div>
                            <div>
                                <img src='/Done.png' style={{ width: '200px', height: '140px', marginTop: '-170px', marginLeft: '100px' }} />
                            </div>
                            <div>
                                <img src='/row.jpeg' style={{ marginLeft: '810px', width: '260px', marginTop: '-180px' }} />

                            </div>
                            <div>
                                <img src='/handshake.jpeg' style={{ marginLeft: '1110px', width: '430px', marginTop: '-220px' }} />

                            </div>


                        </div>

                    </div>

                </div>

            </section>
            <section id='frindship'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div>
                                <img src='/brother.png' style={{ marginTop: '100px', width: '400px', height: '400px', marginLeft: '30px' }} />
                            </div>
                            <div style={{ marginLeft: '700px', marginTop: '-350px' }}>
                                <span> Lorem ipsum </span>
                                <h4> <span>  LOREM</span> IPSUM DOLOR SIT <br /> AMET CONSECTETUR. ENIM <br />DONEC.</h4>
                                <p>  Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim <br />amet non. </p>
                            </div>
                            <div style={{ marginLeft: '700px', marginTop: '60px' }}>
                                <p> Lorem Ipsum </p>
                            </div>
                            <div style={{ marginLeft: '700px' }}>
                                <p> Lorem Ipsum </p>
                            </div>
                            <div style={{ marginLeft: '700px' }}>
                                <p> Lorem Ipsum </p>
                            </div>
                            <div style={{ marginLeft: '1000px', marginTop: '-40px' }}>
                                <p> Lorem Ipsum </p>
                            </div>
                            <div style={{ marginLeft: '1000px', marginTop: '-80px' }}>
                                <p> Lorem Ipsum </p>
                            </div>
                            <div style={{ marginLeft: '1000px', marginTop: '-80px' }}>
                                <p> Lorem Ipsum </p>
                            </div>

                            <div style={{ marginLeft: '690px', marginTop: '100px' }}>
                                <button style={{
                                    backgroundColor: 'rgba(25, 89, 172, 1)',
                                    color: 'rgba(255, 255, 255, 1)',
                                    border: 'none',
                                    padding: '10px 40px',
                                    fontSize: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    borderRadius: '5px'
                                }}>
                                    Lorem Ipsum <i class="bi bi-arrow-right"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Gradient Background at the Bottom */}
                <div style={{
                    position: 'absolute',
                    bottom: '-7300px',  // Move it further down by increasing this value
                    left: '0',
                    right: '0',
                    marginLeft: '10px',
                    height: '15px',
                    background: 'linear-gradient(to bottom, rgba(4, 56, 152, 1), rgba(7, 153, 2, 1), rgba(23, 0, 65, 1))',
                    zIndex: '-1'
                }}></div>
            </section>

            <section id='profile ' style={{ marginTop: '100px' }}>
                <div className='conatiner' >
                    <div className='row' >
                        <div className='col-md-12' style={{
                            border: '1px solid rgba(0, 0, 0, 0.1)', // Adds a border around the box
                            padding: '50px', // Adds some padding inside the box
                            backgroundColor: 'rgba(21, 90, 218, 1)', // Light background color for the box (fixed)
                            borderRadius: '0px', // Rounded corners for the box
                            marginTop: '100px' // Space between this box and the next content
                        }}>
                            <div style={{ color: 'rgba(255, 255, 255, 1)' }}>
                                <span> Join other Sun harvesters</span>
                                <h4> LOREM IPSUM DOLOR SIT AMET </h4>
                                <h6>
                                    Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique <br />
                                    condimentum congue fusce nunc, donec magnis commodo.
                                </h6>
                            </div>


                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-140px' }}>
                                <button style={{
                                    backgroundColor: 'rgba(255, 255, 255, 1)', // White button background color
                                    color: 'rgba(0, 0, 0, 1)', // Text color black
                                    border: '1px solid rgba(0, 0, 0, 1)', // Black border for the button
                                    padding: '8px 20px', // Slightly larger padding for button size
                                    borderRadius: '5px', // Rounded corners for the button
                                    cursor: 'pointer', // Changes cursor on hover
                                    fontSize: '14px', // Normal font size
                                    width: '150px', // Fixed width for the button
                                    height: '40px', // Fixed height for the button
                                    marginRight: '160px'
                                }}>
                                    Lorem Ipsum
                                </button>
                            </div>
                            <div className="container" style={{ marginTop: '130px' }}>
                                {/* First Row - Static Cards with Different Content */}
                                <div className="row">
                                    {/* Card 1 */}
                                    <div className="col-md-3">
                                        <div className="card" style={{ width: '18rem', height: '300px', margin: '20px auto' }}>
                                            <i className="bi bi-cloud-sun" style={{ color: 'rgba(21, 90, 218, 1)', fontSize: '30px', marginTop: '10px', marginLeft: '20px' }}></i>
                                            <div className="card-body">
                                                <p className="card-text">
                                                    Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.
                                                </p>
                                                <img src='/Girl1.jpeg' style={{ width: '30px', borderRadius: '40%', marginRight: '15px' }} alt="User" /> Jane Cooper
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="col-md-3">
                                        <div className="card" style={{ width: '18rem', height: '300px', margin: '20px auto' }}>
                                            <i className="bi bi-stars" style={{ color: 'rgba(21, 90, 218, 1)', fontSize: '30px', marginTop: '10px', marginLeft: '20px' }}></i>
                                            <div className="card-body">
                                                <p className="card-text">
                                                    Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.                                                </p>
                                                <img src='/Boy1.jpeg' style={{ width: '25px', borderRadius: '40%', marginRight: '15px' }} alt="User" /> Ralph Edwards
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="col-md-3">
                                        <div className="card" style={{ width: '18rem', height: '300px', margin: '20px auto' }}>
                                            <i className="bi bi-archive" style={{ color: 'rgba(21, 90, 218, 1)', fontSize: '30px', marginTop: '10px', marginLeft: '20px' }}></i>
                                            <div className="card-body">
                                                <p className="card-text">
                                                    Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.                                                </p>
                                                <img src='/Girls2.jpeg' style={{ width: '25px', borderRadius: '40%', marginRight: '15px' }} alt="User" /> Courtney Henry
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card 4 */}
                                    <div className="col-md-3">
                                        <div className="card" style={{ width: '18rem', height: '300px', margin: '20px auto' }}>
                                            <i className="bi bi-alarm-fill" style={{ color: 'rgba(21, 90, 218, 1)', fontSize: '30px', marginTop: '10px', marginLeft: '20px' }}></i>
                                            <div className="card-body">
                                                <p className="card-text">
                                                    Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnist. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.                                                </p>
                                                <img src='/Girls4.jpeg' style={{ width: '25px', borderRadius: '40%', marginRight: '15px' }} alt="User" /> Cameron Williamson
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '40px', marginLeft: '150px' }}>
                                <i class="bi bi-arrow-left-circle-fill" style={{
                                    color: 'rgba(255, 255, 255, 1)', // Set the color to white
                                    fontSize: '30px', // Adjust the size if needed
                                    marginRight: '20px', // Adds space between the two icons
                                }}></i>
                                <i class="bi bi-arrow-right-circle-fill" style={{
                                    color: 'rgba(255, 255, 255, 1)', // Set the color to white
                                    fontSize: '30px', // Adjust the size if needed
                                }}></i>
                            </div>





                        </div >









                    </div>

                </div>

            </section>
            <section id="hands">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Heading with color and margin */}
                            <h2 style={{ color: 'rgba(15, 23, 42, 1)', fontWeight: '900', marginTop: '300px' }}>
                                Lorem ipsum dolor sit amet
                            </h2>

                            {/* Buttons with colors */}
                            <div style={{ marginTop: '20px', display: 'flex', width: '500px' }}>
                                <button style={{ backgroundColor: 'rgba(203, 213, 225, 1)', color: 'rgba(15, 23, 42, 1)', border: 'none', padding: '10px 20px', borderRadius: '4px', flex: 1 }}>
                                    Research
                                </button>
                                <button style={{ backgroundColor: 'rgba(255, 255, 255, 1)', color: 'rgba(15, 23, 42, 1)', border: '1px solid rgba(203, 213, 225, 1)', padding: '10px 20px', borderRadius: '4px', flex: 1 }}>
                                    Plan
                                </button>
                                <button style={{ backgroundColor: 'rgba(255, 255, 255, 1)', color: 'rgba(15, 23, 42, 1)', border: '1px solid rgba(203, 213, 225, 1)', padding: '10px 20px', borderRadius: '4px', flex: 1 }}>
                                    Design
                                </button>
                            </div>


                            {/* Paragraph with color */}
                            <p style={{ color: 'rgba(71, 85, 105, 1)', marginTop: '20px' }}>
                                Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque <br />
                                pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac <br />
                                turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
                            </p>

                            {/* Check tools text with arrow icon */}
                            <p style={{ color: 'rgba(25, 89, 172, 1)', marginTop: '20px' }}>
                                Check tools <i className="bi bi-arrow-right"></i>
                            </p>

                            {/* Image on the right side */}
                            {/* Image on the right side */}
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-310px' }}>
                                <img src="2hands.png" alt="2hands" style={{ width: '500px', height: '400px' }} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: 'rgba(241, 241, 241, 1)', marginTop: '100px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" style={{ marginTop: '200px' }}>
                            {/* Heading */}
                            <h2
                                style={{
                                    color: 'rgba(25, 89, 172, 1)',
                                    lineHeight: '1.3',
                                }}
                            >
                                Lorem ipsum dolor sit <br />
                                amet consectetur. <br />
                                Dignissim tellus.
                            </h2>

                            {/* Paragraph below the heading */}
                            <p
                                style={{
                                    marginTop: '20px',
                                    maxWidth: '800px',
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit <br />
                                laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt <br />
                                ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in <br />
                                facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
                            </p>

                            {/* Flex container for the button and image */}
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginTop: '30px'
                                }}
                            >
                                {/* Button on the left */}
                                <button
                                    style={{
                                        backgroundColor: 'rgba(25, 89, 172, 1)',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '10px 20px',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        marginTop: '-250px'
                                    }}
                                >
                                    Lorem Speum <i className="bi bi-arrow-right" style={{ marginLeft: '8px' }}></i>
                                </button>

                                {/* Text box */}
                                <div
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 1)',
                                        padding: '20px',
                                        borderRadius: '8px',
                                        maxWidth: '400px',
                                        marginLeft: '-570px',   // Adjust left margin to move the box left
                                        marginTop: '120px'      // Increased marginTop to move the box further down
                                    }}
                                >
                                    <h6 style={{ color: 'rgba(34, 34, 34, 1)', fontWeight: '700' }}>Lorem ipsum dolor sit</h6>
                                    <p style={{ color: 'rgba(34, 34, 34, 1)' }}>
                                        Lorem ipsum dolor sit amet consectetur. Habitant <br /> vestibulum vitae amet habitasse semper.
                                    </p>
                                    <p style={{ color: 'rgba(34, 34, 34, 1)' }}>
                                        Lorem ipsum dolor sit amet consectetur. Egestas <br /> congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.
                                    </p>
                                    <p> </p>
                                    <p style={{ color: 'rgba(34, 34, 34, 1)' }}> </p>
                                </div>



                                {/* Image on the right */}
                                <img
                                    src="/2bhai.png"
                                    alt="2bhai"
                                    style={{
                                        marginTop: '-500px',
                                        width: '500px',
                                        height: 'auto'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section id="fair">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <h2 style={{ marginTop: '70px' }}>LOREM IPSUM DOLOR SIT AMET</h2>
                            <p style={{ maxWidth: '800px', margin: '20px auto' }}>
                                Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
                            </p>
                        </div>

                        <div className="col-md-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
                            <div style={{ flex: '0 0 auto', width: '40%', paddingRight: '20px' }}>
                                <img src="/fetch.png" alt="fetch" style={{ width: '700px', height: '400px', borderRadius: '8px' }} />
                            </div>

                            <div style={{
                                flex: '1',
                                paddingLeft: '20px',
                                border: '1px solid #ddd',
                                width: '30px',
                                padding: '15px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                marginLeft: '60px' // Adjust this value to move the box more to the right
                            }}>
                                <h6 style={{ color: 'rgba(71, 85, 105, 1)' }}>Artist & Investor</h6>
                                <span style={{ fontSize: '14px', color: 'rgba(15, 23, 42, 1)' }}>
                                    Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...
                                </span>
                                <p
                                    style={{
                                        color: 'rgba(25, 89, 172, 1)',
                                        cursor: 'pointer',
                                        marginTop: '40px',
                                        fontSize: '18px' // Increase font size as needed
                                    }}
                                >
                                    Read Full Story{' '}
                                    <i
                                        className="bi bi-arrow-right"
                                        style={{ fontSize: '18px', marginLeft: '5px' }} // Increase icon size and add a left margin
                                    ></i>
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>



            <section id="question">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>FREQUENTLY ASKED QUESTIONS (FAQs)</h2>
                            <br />
                            <br />
                            <br />

                            <hr />
                            <div className="faq-item">
                                <div className="faq-content">
                                    <strong> Lorem ipsum dolor sit amet consectetur?</strong>
                                    <p> Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse <br />convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.</p>
                                </div>
                                <div className="faq-toggle">
                                    <button className="toggle-btn">-</button>
                                </div>
                            </div>
                            <hr />
                            <div className="faq-item">
                                <div className="faq-content">
                                    <p> Lorem ipsum dolor sit amet consectetur? </p></div>
                                <div className="faq-toggle">
                                    <button className="toggle-btn">+</button>
                                </div>
                            </div>
                            <hr />

                            <div className="faq-item">
                                <div className="faq-content">
                                    <p> Lorem ipsum dolor sit amet consectetur? </p></div>
                                <div className="faq-toggle">
                                    <button className="toggle-btn">+</button>
                                </div>
                            </div>
                            <hr />

                            <div className="faq-item">
                                <div className="faq-content">
                                    <p> Lorem ipsum dolor sit amet consectetur? </p></div>
                                <div className="faq-toggle">
                                    <button className="toggle-btn">+</button>
                                </div>
                            </div>
                            <hr />

                            <div className="faq-item">
                                <div className="faq-content">
                                    <p> Lorem ipsum dolor sit amet consectetur? </p></div>
                                <div className="faq-toggle">
                                    <button className="toggle-btn">+</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '-9640px',  // Move it further down by adjusting this
                    left: '0',
                    right: '0',
                    marginLeft: '90px',
                    height: '15px',
                    background: 'linear-gradient(to bottom, rgba(4, 56, 152, 1), rgba(7, 153, 2, 1), rgba(23, 0, 65, 1))',
                    zIndex: '-1'
                }}></div>
            </section>

            <section id='Lorem'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4>LOGO</h4>

                            <h5>LOREM IPSUM DOLOR SIT AMET <br />CONSECTETUR. DUI.</h5>

                            <p>Lorem ipsum dolor sit amet consectetur. Nisl faucibus <br />vitae porttitor pharetra tempor quis arcu. Ipsum nullam.</p>

                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <button style={{
                                    backgroundColor: 'rgba(25, 89, 172, 1)',
                                    color: 'rgba(255, 255, 255, 1)',
                                    padding: '12px 24px',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    textAlign: 'center',
                                    marginBottom: '100px'
                                }}>
                                    Lorem Ipsum <i className="bi bi-arrow-right-circle-fill"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 style={{ textAlign: "center", fontSize: "28px", fontWeight: "bold" }}>
                                LOGO
                            </h2>
                            {/* Text ko horizontally align karne ke liye flexbox */}
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "40px", marginBottom: '90px', gap: "50px" }}>
                                {/* First Column */}
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                </div>

                                {/* Second Column */}
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                </div>

                                {/* Third Column */}
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                </div>

                                {/* Fourth Column */}
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


        </>

    );
}

export default Home;
