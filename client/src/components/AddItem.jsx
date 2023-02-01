import "./AddItem.css";

const AddItem = () => {


    const submit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        // console.log(form);
        // console.log(e.target)


        try {
            const response = await fetch("http://localhost:9898/api/add", {
                method: "POST",
                body: form
            });

            await response.json();
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className="addItem-container">
            <h1>ADD NEW ITEM</h1>
            <form onSubmit={submit} className="form">
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="room" placeholder="Room" />
                <label name="category">Category</label>
                <select name="category">
                    <option value="bigStuff">Big Stuff</option>
                    <option value="mediumStuff">Medium Stuff</option>
                    <option value="smallStuff">Small Stuff</option>
                </select>
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