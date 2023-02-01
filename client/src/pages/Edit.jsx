import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import "./Edit.css";

const Edit = () => {
  const [toggleImg, setToggleImg] = useState("hidden");
  const valueRef = useRef();
  const imgRef = useRef();


  const [item, setItem] = useState("");
  // console.log(item);

  const params = useParams().id;
  // console.log(params);

  const [stateName, setStateName] = useState(false);

  const getFetch = async () => {
    try {
      const response = await fetch(`http://localhost:9898/api/edit/${params}`);
      const data = await response.json();
      setItem(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetch();
  }, []);

  const showRef = () => {
    setItem(prev => { return { ...prev, name: valueRef.current.innerText }; });
    // console.log(item);
  };

  const showRefName = () => {
    setItem(prev => { return { ...prev, name: valueRef.current.innerText }; });
    setStateName(true ? false : true);
    // console.log(item);
  };

  const toggleInput = () => {
    toggleImg === "shown" ? setToggleImg("hidden") : setToggleImg("shown");
    console.log(`file is ${imgRef.current.files[0]}`);

    const output = document.getElementById('output');
    document.getElementById('file-selector').addEventListener('change', event => {
      output.src = '';
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.addEventListener('load', event => {
        output.src = event.target.result;
      });
      reader.readAsDataURL(file);
    });

  };



  return (
    <div>
      <div>
        <img id="output" src={"http://localhost:9898/" + item.path} alt="test" />
        <button type="button" onClick={toggleInput}>{toggleImg === "shown" ? "Save" : "Edit"}</button>
        <input type="file" name="image" id="file-selector" className={toggleImg} ref={imgRef} />
      </div>
      <article>
        <h1 contentEditable={stateName} ref={valueRef} >{item.name}</h1>
        <button type="button" onClick={showRefName}>{stateName ? "save" : "edit"}</button>
        <p contentEditable="true">{item.room}</p>
        <h2>Description</h2>
        <p>{item.description}</p>
      </article>
    </div>
  );
};

export default Edit;