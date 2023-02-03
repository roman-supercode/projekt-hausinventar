import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import "./Edit.css";

const Edit = () => {
  const [toggleImg, setToggleImg] = useState("hidden");

  const [item, setItem] = useState("");
  const [stateName, setStateName] = useState(false);
  const [stateRoom, setStateRoom] = useState(false);
  const [stateDesc, setStateDesc] = useState(false);
  const [img, setImg] = useState(false);
  // console.log(item);

  const params = useParams().id;
  // console.log(params);

  const nameRef = useRef();
  const imgRef = useRef();
  const roomRef = useRef();
  const descRef = useRef();


  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:9898/api/edit/${params}`);
        const data = await response.json();
        setItem(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, []);

  const updateFetch = async () => {

    const form = new FormData();
    form.append("image", img);
    form.append("name", item.name);
    form.append("room", item.room);
    form.append("category", item.category);
    form.append("description", item.description);
    console.log(form);


    try {
      const updateItem = await fetch(`http://localhost:9898/api/update/${params}`,
        {
          method: "PUT",
          // headers: {
          //   "Content-Type": "application/json"
          // },
          body: form
          // JSON.stringify({
          //   name: item.name,
          //   room: item.room,
          //   category: item.category,
          //   description: item.description,
          //   path: form
          // })
        });

      await updateItem.json();

    } catch (error) {
      console.log(error);
    }
  };


  const showRefName = () => {
    if (stateName) {
      setItem(prev => { return { ...prev, name: nameRef.current.innerText }; });

      setStateName(false);
      return;
    } else {
      setStateName(true);
    };
  };


  const showRefRoom = () => {
    if (stateRoom) {
      setItem(prev => { return { ...prev, room: roomRef.current.innerText }; });

      setStateRoom(false);
      return;
    } else {
      setStateRoom(true);
    };

  };

  const showRefDesc = () => {
    if (stateDesc) {
      setItem(prev => { return { ...prev, desc: descRef.current.innerText }; });

      setStateDesc(false);
      return;
    } else {
      setStateDesc(true);
    };
  };

  const toggleInput = () => {
    toggleImg === "shown" ? setToggleImg("hidden") : setToggleImg("shown");
    // console.log(item.path);

  };

  const handleImageChange = (e) => {
    document.getElementById("editimg").src = URL.createObjectURL(e.target.files[0]);
    // setItem(prev => { return { ...prev, path: e.target.files[0] }; });
    // console.log("URL" + URL.createObjectURL(e.target.files[0]));
    setImg(e.target.files[0]);
  };

  // console.log(item.path);


  return (
    <div>
      <div>
        <img id="editimg" src={"http://localhost:9898/" + item.path} alt="test" />
        <button type="button" onClick={toggleInput}>{toggleImg === "shown" ? "Save" : "Edit"}</button>
        <input type="file" name="image" id="file-selector" onChange={handleImageChange} className={toggleImg} ref={imgRef} />
      </div>
      <article>
        <h1 contentEditable={stateName} ref={nameRef} >{item.name}</h1>
        <button type="button" onClick={showRefName}>{stateName ? "save" : "edit"}</button>

        <p contentEditable={stateRoom} ref={roomRef}>{item.room}</p>
        <button type="button" onClick={showRefRoom}>{stateRoom ? "save" : "edit"}</button>

        <h2>Description</h2>

        <p contentEditable={stateDesc} ref={descRef}>{item.description}</p>
        <button type="button" onClick={showRefDesc}>{stateDesc ? "save" : "edit"}</button>

      </article>

      <button type="button" onClick={updateFetch}>SAVE</button>
    </div>
  );
};

export default Edit;