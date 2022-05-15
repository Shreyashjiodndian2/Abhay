import React, {  useState } from "react";

import { Navbar,Nav,NavDropdown,Container,Card,Button,InputGroup,FormControl,Form,Table } from 'react-bootstrap';


const AddImages = () => {
    const [ selectedImages, setSelectedImages] = useState([]);
    const onSelectFile = (event) =>{
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
        
        setSelectedImages((previousImages) => previousImages.concat(imagesArray));
        
       };

    return (
        <div className='backgroundimg'>
            
        <div className='maindiv'>
        
        <section>
        <div className='HostelInfo'>
            <div className="labeldiv">
            <label >
            <h2>+ Add Images of your Property</h2><br />
            <span>you can add up to 15 images</span>
            <input className="imginput" type="file" name='images' onChange={onSelectFile} multiple accept="image/png , image/jpeg , image/jpg , image/webp" />
            </label>
            </div>
            <br />

            {selectedImages.length > 0 &&
            (selectedImages.length > 15 ?(
                <p className="error">You can't upload more than 15 images! <br />
                <span> please delete <b> {selectedImages.length - 15} </b> of them </span>
                </p>
            ) : (
                <button className="upload-btn" onClick={() => {console.log("UPLOAD IMAGES")}}>
                    UPLOADED {selectedImages.length} IMAGE{selectedImages.length === 1 ? "" : "S"}
                </button>
            ))
            }

            <div className="selectImages">
                {selectedImages && selectedImages.map((image, index)=>{
                    return (
                        <div key={image} className="selectImage">
                            <img src={image} height="200" alt="upload" />
                            
                            <img className='delete'  onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image)) } src={'images/dustbin.png'}/>
                            <p>{index + 1}</p>
                        </div>
                    );
                })}
            </div>
        </div>
        </section>
        </div>
        </div>
        
    );
};

export default AddImages;