import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { FaUpload, FaFilePdf, FaFileWord } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useFormContext } from '../context/FormProvider';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { TiDelete } from "react-icons/ti";


const DropBox = ({ onFilesDrop, onDeleteFile }) => {
    const [previewImages, setPreviewImages] = useState([]);
    const [hasFiles, setHasFiles] = useState(false);

    const handleDeleteFile = (index) => {
        const updatedFiles = [...previewImages];
        updatedFiles.splice(index, 1);
        setPreviewImages(updatedFiles);
        onDeleteFile(updatedFiles.map((file) => file.file));
        setHasFiles(updatedFiles.length > 0);
    };

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*, video/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        onDrop: (acceptedFiles) => {
            const previewImagesArray = acceptedFiles.map((file) => {
                return {
                    file,
                    preview: getFileIcon(file.type) || URL.createObjectURL(file),
                };
            });
            setPreviewImages([...previewImages, ...previewImagesArray]);
            setHasFiles(true);
            onFilesDrop([...previewImages, ...previewImagesArray].map((file) => file.file));
        },
        multiple: true, // Enable multiple file uploads
    });

    const getFileIcon = (fileType) => {
        if (fileType.includes('pdf')) {
            return 'pdf';
        } else if (fileType.includes('msword') || fileType.includes('wordprocessingml.document')) {
            return 'word';
        }
        // Add more file type checks and icons as needed
        return null;
    };

    return (
        <div
            {...getRootProps()}
            className="flex justify-center rounded-[15px] w-full shadow-xl h-[150px] cursor-pointer border-2 border-white overflow-auto"
        >
            <input {...getInputProps()} />
            <div className="flex flex-row items-center gap-2 overflow-auto">
                {previewImages.map((image, index) => (
                    <div key={index} className="relative cursor-pointer">
                        <button
                            onClick={() => handleDeleteFile(index)}
                            className="absolute top-[-10px] right-0 z-50 text-white"
                        >
                            <TiDelete color='red' fontSize={20} />
                        </button>
                        {image.preview === 'pdf' ? (
                            <FaFilePdf className="text-4xl text-white" />
                        ) : image.preview === 'word' ? (
                            <FaFileWord className="text-4xl text-white" />
                        ) : (
                            <img
                                src={image.preview}
                                alt={`Uploaded ${index + 1}`}
                                style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                            />
                        )}
                    </div>
                ))}
                <div className="cursor-pointer">
                    {previewImages.length === 0 && <FaUpload className="text-4xl text-white" />}
                </div>
            </div>
        </div>
    );
};

// Medical component

const Medical = () => {
    const { form2, updateFormData } = useFormContext();
    const [hasFiles, setHasFiles] = useState(false);
    const navigate = useNavigate();

    const handleDrop = (acceptedFiles) => {
        console.log('Files accepted: ', acceptedFiles);
        setHasFiles(true);
        updateFormData('files', acceptedFiles);
        updateFormData('completed', true);
    };

    const handleDeleteFile = (updatedFiles) => {
        updateFormData('files', updatedFiles);
        setHasFiles(updatedFiles.length > 0);
    };

    useEffect(() => {
        console.log('Form2: ', form2);
        if (hasFiles) {
            updateFormData('completed', true); // Set form2.completed to true when files are present
        }
    }, []);

    return (
        <div className="flex flex-col gap-24 my-10 mx-7">
            <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Typography color="blue" className="font-inter">
                    You are almost there!!
                </Typography>
                <Typography color="white" className="text-3xl font-bold font-inter">
                    Please upload your medical details
                </Typography>
            </motion.div>
            <div className="flex flex-col gap-4">
                <Typography color="white" className="font-bold text-blue-500 text-md font-inter">
                    Diagnostic Details
                </Typography>
                <DropBox onFilesDrop={handleDrop} onDeleteFile={handleDeleteFile} />
                <div className='flex justify-between'>
                    <Button
                        type="submit"
                        color="blue"
                        className="text-white"
                        onClick={() => navigate('/healthinsurance')}
                        disabled={!hasFiles}
                    >
                        Submit
                    </Button>
                    <Button
                        color="blue"
                        className="text-white"
                        onClick={() => navigate('/details')}
                    >
                        Back
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Medical;