import React, {  useState } from "react";
import {useSelector , useDispatch, useStore} from "react-redux";
import { useContext,useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import { Navbar,Nav,NavDropdown,Container,Card,Button,InputGroup,FormControl,Form,Table } from 'react-bootstrap';
import { updateforrent } from "../Service/Operation";
import { storage } from "../firebase.config";
import {ref, uploadBytes} from  'firebase/storage'
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useHistory } from "react-router-dom";




const AddImagesforRent = () => {

    console.log("adding images for rent form")
    const history = useHistory()
    const dispatch = useDispatch();  
    const myform = useSelector((state) => state.rentreducer)    
    console.log("myform in rent",myform)
    if(myform == null)
    {
        history.push('/RentForm')
    }
    const cont = useContext(UserContext) 

    var arr = [];

    const [ selectedImages, setSelectedImages] = useState([]);
    const [files, setfiles] = useState([]);
    const [urls, seturls] = useState([]);
    const [signal, setsignal] = useState(false)
    const [completesign, setcompletesign] = useState(false)

    useEffect(() => {
        
        console.log("running useeffect")
        if(completesign == true)
        {
            console.log('inside if statement of useeffect')
            setTimeout(() => {
                history.push('/AddProperty');
            }, 2000);
        }
    
     
    }, [completesign])
    
    

    const onSelectFile = (event) =>{

        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        

        console.log("setfiles",files)

        console.log("selectedFiles",selectedFiles)
        console.log("selectedFilesArray",selectedFilesArray)

        const filesarray = [...files, ...selectedFiles]

        setfiles(filesarray)

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });

        console.log("imagesArray = ",imagesArray);
        
        setSelectedImages((previousImages) => previousImages.concat(imagesArray));
        
        console.log("selectedfilesafterupdate = ",selectedImages)

    };


    const uploading = async (file)=>{

        console.log("uplaoding inside")

        return new Promise((resolve, reject)=>{

            console.log("uploading files inside for loop")
            const storageRef = ref(storage, `images/${file.name}` + `${cont.user.uid}`);

            const uploadTask =  uploadBytesResumable(storageRef, file);


            uploadTask.on('state_changed', 
                async (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(progress)
                }, 
                (error) => {
                    console.log("error in uploading file", error)
                }, 
                async () => 
                {
                    
                    try
                    {
                        const url = await getDownloadURL(uploadTask.snapshot.ref)
                        console.log("this is url",url)
                        resolve(url)
                    }
                    catch(err)
                    {
                        reject(err)
                    }
                }

            );

            
        })

    }

    const Sending = async ()=>{

        console.log("i am in sending")
        console.log("sending urls" , arr)

        const obj = {

            userid : cont.user.uid,
            images : [...arr],
            ...myform

        }

        
        const completedsignal = await updateforrent(obj);
        setcompletesign(completedsignal)
    }

    const onsubmit = async ()=>{

        console.log("onsubmit")
        setsignal(true)

        console.log(files)

        if(files.length===0)
        {
            return;
                 
        }  
        else
        {
            for(let i=0;i<files.length;i++)
            {
                const urli = await uploading(files[i]);
                console.log("urli = ",urli)
                arr = [...arr,urli]
                console.log("inside for loop = ",arr)
            }
        }

        Sending()
    } 
            

    function ondelete(index)
    {
        console.log("ondelete = ",index)
        const hash = files
        hash.splice(index,1)
        console.log(hash)
        setfiles(hash)
        console.log("files after remove = ",files)
        console.log(files)
    }

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
                    UPLOADED
                </button>
            ))
            }

            <div className="selectImages">
                {selectedImages && selectedImages.map((image, index)=>{
                    return (
                        <div key={image} className="selectImage">
                            <img src={image} height="200" alt="upload" />
                            
                            <img className='delete'  onClick={() => {
                                setSelectedImages(selectedImages.filter((e) => e !== image ))
                                ondelete(index);
                            } } src={'images/dustbin.png'}/>
                            <p>{index + 1}</p>
                        </div>
                    );
                })}
            </div>
        </div>

        {
            completesign == true ? "file has been uploaded" : 
            
           signal == false ? <button  onClick={onsubmit}>submit</button> : 'Wait your file is being uploaded'

        }

        </section>
        </div>
        </div>
        
    );
};

export default AddImagesforRent;