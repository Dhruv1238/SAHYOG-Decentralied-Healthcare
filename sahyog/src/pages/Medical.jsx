import React, { useEffect } from 'react';
import { Typography } from '@material-tailwind/react';
import { FaUpload, FaFilePdf, FaFileWord, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useFormContext } from '../context/FormProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

const DropBox = ({ onFilesDrop }) => {
    const [previewImages, setPreviewImages] = useState([]);

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
            onFilesDrop(acceptedFiles);
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
                    <div key={index} className="cursor-pointer">
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

const Medical = () => {
    const { form1, updateFormData } = useFormContext();
    useEffect(() => {
        console.log(form1);
    }, [form1]);
    const navigate = useNavigate();

    const handleDrop = (acceptedFiles) => {
        console.log('Files accepted: ', acceptedFiles);
    };

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
                <DropBox onFilesDrop={handleDrop} />
            </div>
        </div>
    );
};

export default Medical;


