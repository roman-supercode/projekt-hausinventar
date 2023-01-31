import "./AddItem.css";

const AddItem = () => {
    return (
        <div className="addItem-container">
            <h1>ADD NEW ITEM</h1>
            <form className="form">
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="room" placeholder="Room" />
                <input type="file" name="image" accept="image/*" />
                <label name="description" className="textarea-expandable-label" >
                    <textarea rows="3" name="description" placeholder="Description">
                    </textarea>
                </label>
                <button type="submit">PUBLISH</button>
            </form>
        </div >
    );
};
export default AddItem;