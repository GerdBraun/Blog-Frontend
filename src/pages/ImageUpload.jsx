import { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // formData.append("myTest", 'test 123');
    // formData.append("file", e.target.file.files[0]);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_SERVER}/profile/1`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImageUrl(response.data.location);
    } catch (error) {
      console.error("Error uploading the file", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="test" />
        <input type="file" name="file" />
        <button type="submit">Upload</button>
      </form>
      {imageUrl && <img src={imageUrl} alt="Uploaded" height={300} />}
    </>
  );
};

export default ImageUpload;
